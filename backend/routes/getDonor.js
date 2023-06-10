const express = require("express");
const { donorController } = require("../controllers/donorController.js");

//router object
const router = express.Router();

//routing
//register | method POST
router.post("/getDonor", donorController);

module.exports = router;
