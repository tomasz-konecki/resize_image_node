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

server.get("/", (req, res) => {
  res.render("index");
});

server.post("/resize", (req, res) => {
  let { imgHeight, imgWidth } = req.body;
  let height = parseInt(imgHeight);
  let width = parseInt(imgWidth);
  const format = "png";
  resize("./img/nodejs.png", format, width, height).pipe(res);
});

server.get("/image", (req, res) => {
  // Extract the query-parameter
  const widthString = req.query.width;
  const heightString = req.query.height;
  const format = req.query.format;

  console.log(req.query);

  //Parse to integer if possible
  let width, height;

  if (widthString) {
    width = parseInt(widthString);
  }
  if (heightString) {
    height = parseInt(heightString);
  }

  //Set the content type of the response
  res.type(`image/${format || "png"}`);

  console.log(`format: ${format}\nwidth: ${width}\nheight: ${height}`);

  //Get the resized image
  resize("./img/nodejs.png", format, width, height).pipe(res);
});

server.listen(8000, () => {
  console.log("Server running...");
});
