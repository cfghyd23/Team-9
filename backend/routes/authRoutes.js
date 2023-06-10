const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController.js");
const { donorController } = require("../controllers/donorController.js");
const {
  bloodBankController,
} = require("../controllers/bloodBankController.js");

const { searchBloodBank } = require("../controllers/searchBloodBank.js");

const { ngoController } = require("../controllers/ngoController.js");

//router object
const router = express.Router();

//routing
//register | method POST
router.post("/register", registerController);

//login | method POST
router.post("/login", loginController);

//find donors
router.post("/getDonor", donorController);

//find blood bank with the blood Type and the quantity required
router.post("/bankSearch", searchBloodBank);

//create blood banks (only admin can do this)
router.post("/createBloodBank", bloodBankController);

//create ngo (only admin can do this)
router.post("/createNGO", ngoController);

module.exports = router;
