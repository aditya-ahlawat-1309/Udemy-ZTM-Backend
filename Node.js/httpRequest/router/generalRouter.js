const express = require("express");
const generalController = require("../controllers/general.controller");

const generalRouter = express.Router();

generalRouter.get("",generalController.home);

module.exports = generalRouter;