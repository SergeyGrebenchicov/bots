@echo off
cd "C:\Users\User\Documents\Projects\bots"
powershell "& {npm run forever restart .\coins\ada.js}"
powershell "& {npm run forever restart .\coins\xrp.js}"
# powershell "& {npm run forever restart .\coins\btc.js}"
powershell "& {npm run forever restart .\coins\dash.js}"
powershell "& {npm run forever restart .\coins\ltc.js}"
powershell "& {npm run forever restart .\coins\zec.js}"