const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController.js");

//router object
const router = express.Router();

//routing
//register | method POST
router.post("/register", registerController);

//login | method POST
router.post("/login", loginController);

module.exports = router;
