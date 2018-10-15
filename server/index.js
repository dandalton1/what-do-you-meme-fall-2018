const express = require('express');
const game = require('./game/controller');

console.log("loading...");

const app = express();

const port = 80; // 80 is HTTP's default
const server = "localhost";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../client/"));
app.use("/game", game);

app.listen(port);

console.log(`listening on: http://${server}:${port}`);