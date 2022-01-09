const express = require("express");
const server = express();
require("dotenv").config();
const POST = process.env.PORT || 3007; //PORT=3001
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const twig = require("twig");
const session = require("express-session");
const morgan = require("morgan");

mongoose.connect("mongodb://localhost/biblio2");
server.use("/", (req, rep) => {
  rep.send("Hllo les nodejss");
});
server.use(morgan("dev"));
server.listen(POST, () => {
  console.log(`Serveur ${POST} fonctionnelle`);
});
