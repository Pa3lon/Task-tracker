const express = require("express");
const router = express.Router();

require("./components/task/controller")(router);

module.exports = router;
