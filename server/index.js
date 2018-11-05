const express = require('express');
const game = require('./game/controller');

// eslint-disable-next-line no-console
console.log("loading...");

const app = express();

const port = 80; // 80 is HTTP's default
const server = "localhost";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../dist/"));
app.use("/game", game);
app.use(function(req, res, next) {
    if (res.headersSent) { return next(); }
    res.send("404 error when trying to access " + req.baseUrl);
})
app.use(function(err, req, res, next) {
    if (res.headersSent) { return next(); }
    res.status(500).send("500 error when trying to access " + req.baseUrl + ":\n" + err.stack);
    console.error(err.stack);
})

app.listen(port);

// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);