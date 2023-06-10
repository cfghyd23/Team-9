const express = require("express");
const {
  bloodBankController,
} = require("../controllers/bloodBankController.js");

//router object
const router = express.Router();

//routing
//register | method POST
router.post("/bloodBankController", bloodBankController);

module.exports = router;
