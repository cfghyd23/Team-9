const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController.js");
const { donorController } = require("../controllers/donorController.js");
const {
  bloodBankController,
} = require("../controllers/bloodBankController.js");

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

//create blood banks (only admin can do this)
router.post("/createBloodBank", bloodBankController);

//create ngo (only admin can do this)
router.post("/createNGO", ngoController);

module.exports = router;
