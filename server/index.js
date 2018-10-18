const express = require('express');
const game = require('./game/controller');

// eslint-disable-next-line no-console
console.log("loading...");

const app = express();

const port = 80; // 80 is HTTP's default
const server = "localhost";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../dist/"));
app.use("/game", game);

app.listen(port);

// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);