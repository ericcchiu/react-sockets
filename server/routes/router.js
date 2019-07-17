const express = require("express"); 
const router = express.Router();

router.get("/", (req, res) => {
  res.send({response: "Iam alive"}).status(200);
})