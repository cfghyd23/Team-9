const express = require("express");
const { ngoController } = require("../controllers/ngoController.js");

//router object
const router = express.Router();

//routing
//register | method POST
router.post("/ngoController", ngoController);

module.exports = router;
