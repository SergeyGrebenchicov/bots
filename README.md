# Exmo exchange trade bot
1) Registration [EXMO](https://exmo.me/?ref=648079)
2) npm install exmo-api
3) Get API key & API secret in Profile settings on [EXMO](https://exmo.me/?ref=648079)
4) Change in index.js
```
const apiKey = 'YOUR-API-KEY';
const apiSecret = 'YOUR-API-SECRET';
```
5) Start
```
node app
```

6) Install [forever](https://www.npmjs.com/package/forever)

Установите 'forever' и 'forever-win' глобально

* npm -g install forever
* npm -g install forever-win

```
"scripts": {
  "forever" : "forever"
},
```

* npm install

* npm run forever
* npm run forever list
* npm run forever start .\coins\dash.js
