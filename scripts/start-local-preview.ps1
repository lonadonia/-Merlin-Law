$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot
node .\node_modules\next\dist\bin\next start -p 3000
