@echo off
cd "C:\Users\User\Documents\Projects\bots"
powershell "& {npm run forever start .\coins\ada.js}"
powershell "& {npm run forever start .\coins\xrp.js}"
# powershell "& {npm run forever start .\coins\btc.js}"
powershell "& {npm run forever start .\coins\dash.js}"
powershell "& {npm run forever start .\coins\ltc.js}"
powershell "& {npm run forever start .\coins\zec.js}"