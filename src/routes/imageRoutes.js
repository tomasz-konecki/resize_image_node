const express = require("express");
const imageController = require("../controllers/imageController");

const imageRouter = express.Router();

function router() {
  const { setSize } = imageController();
  imageRouter.route("/resize").post(setSize);

  return imageRouter;
}

module.exports = router;
