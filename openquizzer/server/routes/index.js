const express = require("express");
const router = express.Router();
// Sample route for the API
router.get("/", (req, res) => {
  res.json("Welcome to the OpenQuizzer API!");
});

module.exports = router;
