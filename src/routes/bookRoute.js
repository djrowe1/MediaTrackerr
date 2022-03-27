//import express
const express = require("express");
//create express router
const router = express.Router();

router.route("/").get();
router.route("/create").post();
router.route("/:id").get().put().delete();

module.exports = router;
