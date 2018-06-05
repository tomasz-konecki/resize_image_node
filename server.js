const express = require("express");
const resize = require("./resize");
const bodyParser = require("body-parser");
const path = require("path");

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/css", express.static(path.join(__dirname, "/public/css")));

server.set("views", "./src/views");
server.set("view engine", "ejs");

const imageRouter = require("./src/routes/imageRoutes")();
server.use("/image", imageRouter);

server.get("/", (req, res) => {
  res.render("index");
});

server.listen(8000, () => {
  console.log("Server running...");
});
