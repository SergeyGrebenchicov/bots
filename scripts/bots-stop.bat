@echo off
cd "C:\Users\User\Documents\Projects\bots"
powershell "& {npm run forever stop .\coins\ada.js}"
powershell "& {npm run forever stop .\coins\xrp.js}"
# powershell "& {npm run forever stop .\coins\btc.js}"
powershell "& {npm run forever stop .\coins\dash.js}"
powershell "& {npm run forever stop .\coins\ltc.js}"
powershell "& {npm run forever stop .\coins\zec.js}"