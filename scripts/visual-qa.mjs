import { chromium } from "playwright-core";
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:3100";
const browserPath =
  process.env.QA_BROWSER_PATH ||
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputDir = path.join(process.cwd(), "qa", "screenshots");
const routes = ["/", "/how-it-works", "/capabilities", "/trust"];
const checks = [];
let serverProcess = null;

if (!process.env.QA_BASE_URL) {
  let portOccupied = false;
  try {
    await fetch(baseUrl, { signal: AbortSignal.timeout(700) });
    portOccupied = true;
  } catch {
    // Expected: QA owns this port and starts the server below.
  }
  if (portOccupied) {
    throw new Error(`QA port is already occupied: ${baseUrl}`);
  }
  const nextBin = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
  serverProcess = spawn(process.execPath, [nextBin, "start", "-p", "3100"], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
  });
  let serverLog = "";
  serverProcess.stdout?.on("data", (chunk) => { serverLog += chunk.toString(); });
  serverProcess.stderr?.on("data", (chunk) => { serverLog += chunk.toString(); });
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  if (!ready) throw new Error(`QA server did not start. ${serverLog}`);
}

const stopServer = () => {
  if (!serverProcess) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(serverProcess.pid), "/T", "/F"], { stdio: "ignore" });
  } else if (!serverProcess.killed) {
    serverProcess.kill("SIGTERM");
  }
};
process.once("exit", stopServer);
process.once("SIGINT", () => { stopServer(); process.exit(130); });

await fs.mkdir(outputDir, { recursive: true });

function check(name, pass, detail = "") {
  checks.push({ name, pass, detail });
}

async function revealPage(page) {
  const dimensions = await page.evaluate(() => ({
    limit: document.documentElement.scrollHeight - window.innerHeight,
    step: Math.max(420, window.innerHeight * 0.62),
  }));
  for (let y = 0; y <= dimensions.limit; y += dimensions.step) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(110);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(320);
}

const browser = await chromium.launch({ executablePath: browserPath, headless: true });
const consoleErrors = [];

for (const [label, viewport] of [
  ["desktop", { width: 1440, height: 1050 }],
  ["mobile", { width: 390, height: 844 }],
]) {
  const context = await browser.newContext({ viewport, reducedMotion: "no-preference" });
  for (const route of routes) {
    const page = await context.newPage();
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(`${label} ${route}: ${message.text()}`);
    });
    page.on("pageerror", (error) => consoleErrors.push(`${label} ${route}: ${error.message}`));
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    check(`${label} ${route} returns 200`, response?.status() === 200, String(response?.status()));
    check(`${label} ${route} has one h1`, (await page.locator("h1").count()) === 1);
    const dimensions = await page.evaluate(() => ({
      viewport: window.innerWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }));
    check(
      `${label} ${route} has no horizontal overflow`,
      Math.max(dimensions.document, dimensions.body) <= dimensions.viewport + 1,
      JSON.stringify(dimensions),
    );
    await revealPage(page);
    const slug = route === "/" ? "home" : route.slice(1);
    await page.screenshot({
      path: path.join(outputDir, `${label}-${slug}.png`),
      fullPage: true,
    });
    await page.close();
  }
  await context.close();
}

for (const [label, viewport] of [
  ["laptop", { width: 1024, height: 820 }],
  ["tablet", { width: 768, height: 900 }],
  ["narrow", { width: 360, height: 780 }],
]) {
  const context = await browser.newContext({ viewport, reducedMotion: "no-preference" });
  for (const route of routes) {
    const page = await context.newPage();
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    const dimensions = await page.evaluate(() => ({
      viewport: window.innerWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }));
    check(`${label} ${route} returns 200`, response?.status() === 200, String(response?.status()));
    check(
      `${label} ${route} has no horizontal overflow`,
      Math.max(dimensions.document, dimensions.body) <= dimensions.viewport + 1,
      JSON.stringify(dimensions),
    );
    const slug = route === "/" ? "home" : route.slice(1);
    await page.screenshot({ path: path.join(outputDir, `${label}-${slug}-top.png`) });
    await page.close();
  }
  await context.close();
}

const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await desktop.newPage();
await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.locator(".video-poster").click();
check("video dialog opens", await page.locator("dialog.video-dialog[open]").isVisible());
check("video fallback is intentional", await page.locator(".storyboard").isVisible());
await page.keyboard.press("Escape");
check("video dialog closes with Escape", !(await page.locator("dialog.video-dialog[open]").count()));
await page.goto(`${baseUrl}/trust`, { waitUntil: "networkidle" });
const faqButton = page.locator(".faq-list button").nth(1);
await faqButton.click();
check("FAQ accordion expands", (await faqButton.getAttribute("aria-expanded")) === "true");
await page.locator(".demo-form button[type='submit']").click();
check("form validates required fields", (await page.locator("[aria-invalid='true']").count()) >= 5);
await page.locator("input[name='name']").fill("Jordan Lee");
await page.locator("input[name='email']").fill("jordan@examplelaw.com");
await page.locator("input[name='organization']").fill("Example Defense LLP");
await page.locator("select[name='role']").selectOption({ label: "Defense attorney" });
await page.locator("textarea[name='message']").fill("I would like to review a multi-provider record workflow.");
await page.locator(".demo-form button[type='submit']").click();
check("form reaches success state", await page.locator(".form-success").isVisible());
await desktop.close();

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mobilePage = await mobile.newPage();
await mobilePage.goto(baseUrl, { waitUntil: "networkidle" });
const menuButton = mobilePage.locator(".menu-toggle");
await menuButton.click();
check("mobile menu opens", (await menuButton.getAttribute("aria-expanded")) === "true");
check("mobile menu link is reachable", await mobilePage.locator(".mobile-panel a[href='/how-it-works']").isVisible());
await mobilePage.keyboard.press("Escape");
check("mobile menu closes with Escape", (await menuButton.getAttribute("aria-expanded")) === "false");
await mobilePage.reload({ waitUntil: "networkidle" });
await mobilePage.keyboard.press("Tab");
check(
  "keyboard exposes skip link",
  (await mobilePage.evaluate(() => document.activeElement?.textContent?.trim())) === "Skip to content",
);
await mobile.close();

const reduced = await browser.newContext({ viewport: { width: 768, height: 900 }, reducedMotion: "reduce" });
const reducedPage = await reduced.newPage();
await reducedPage.goto(baseUrl, { waitUntil: "networkidle" });
check(
  "reduced-motion preference is honored",
  await reducedPage.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches),
);
await reduced.close();

check("no browser console errors", consoleErrors.length === 0, consoleErrors.join(" | "));
await browser.close();
stopServer();

const failed = checks.filter((item) => !item.pass);
console.log(JSON.stringify({ baseUrl, checks, consoleErrors, failed }, null, 2));
if (failed.length) process.exitCode = 1;
