const resize = require("../../resize");

function imageController() {
  function setSize(req, res) {
    let { imgHeight, imgWidth } = req.body;
    let height = parseInt(imgHeight);
    let width = parseInt(imgWidth);
    const format = "png";
    resize("./img/nodejs.png", format, width, height).pipe(res);
  }

  return { setSize };
}

module.exports = imageController;
