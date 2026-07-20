"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, PlayIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function VideoStage() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };

  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setOpen(false);
      triggerRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  return (
    <>
      <button ref={triggerRef} className="video-poster" type="button" onClick={show} aria-haspopup="dialog">
        <div className="video-poster-art" aria-hidden="true">
          <div className="video-page video-page-a"><span>1,284</span><i /><i /><i /></div>
          <div className="video-page video-page-b"><span>INDEXED</span><i /><i /><i /></div>
          <div className="video-page video-page-c"><span>ANSWER</span><i /><i /><i /></div>
          <div className="video-axis"><b>RECORD</b><b>CURATION</b><b>COMMAND</b></div>
        </div>
        <span className="video-play"><PlayIcon /></span>
        <span className="video-meta">
          <b>See the record become intelligence</b>
          <span>02:10 / Explainer preview</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="video-dialog"
        aria-labelledby="video-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="video-dialog-inner">
          <button className="dialog-close" type="button" onClick={close} aria-label="Close video">
            <CloseIcon />
          </button>
          <p className="eyebrow eyebrow-light">Merlin.law / Explainer</p>
          <h2 id="video-dialog-title">The record, illuminated.</h2>
          {siteConfig.explainerVideoUrl ? (
            <video src={siteConfig.explainerVideoUrl} controls autoPlay={open} playsInline>
              Your browser does not support embedded video.
            </video>
          ) : (
            <div className="storyboard" role="img" aria-label="Animated preview: curate, index, question, answer">
              <div className="storyboard-track" aria-hidden="true">
                <div><span>01</span><b>Curate</b><small>Resolve the production</small></div>
                <div><span>02</span><b>Index</b><small>Structure pertinent detail</small></div>
                <div><span>03</span><b>Question</b><small>Ask in plain language</small></div>
                <div><span>04</span><b>Answer</b><small>Return to the source</small></div>
              </div>
              <p>
                Explainer preview ready. Add the approved video URL in <code>lib/site-config.ts</code> or via the documented environment variable.
              </p>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
