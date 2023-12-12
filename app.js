const express = require("express");
const path = require("path");
const app = express();

global.__basedir = __dirname;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './app/public')));

module.exports = app;