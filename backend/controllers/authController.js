const userModel = require("../models/donor.model.js");
const bloodBankModel = require("../models/bloodBankModel.js");

const registerController = async (req, res) => {
  try {
    var { uid, fname, lname, age, bloodType, contact, address, zipcode } =
      req.body;
    //validations
    if (
      !uid ||
      !fname ||
      !lname ||
      !age ||
      !bloodType ||
      !contact ||
      !zipcode ||
      !address
    ) {
      return res.status(400).send({
        message: "Please enter all fields",
        success: false,
      });
    }

    var users = userModel;
    console.log(users);
    //check user
    // const existingUser = await users.findOne({ uid });

    // //existing user
    // if (existingUser) {
    //   return res.status(200).send({
    //     message: "User already exists",
    //     success: false,
    //   });
    // }

    //register user
    console.log(req.body.uid);
    console.log(uid);
    var donationHistory = [];
    var availability = false;
    var healthInfo = "";
    var consentInfo = "";

    var user = await users.create({
      uid,
      fname,
      lname,
      age,
      bloodType,
      contact,
      address,
      zipcode,
      //   donationHistory,
      //   availability,
      //   healthInfo,
      //   consentInfo,
    });

    //send response
    return res.status(201).send({
      message: "User registered successfully",
      success: true,
      user: user,
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
    res.status(500).send({
      message: "Error in registering user",
      success: false,
      error: err.message,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { uid } = req.body;

    const users = userModel;
    //check user
    const user = await users.findOne({ uid });
    if (user) {
      return res.status(200).send({
        message: "User exists",
        success: true,
      });
    } else {
      const banks = bloodBankModel;
      //check user
      const bank = await banks.findOne({ uid });
      if (bank) {
        return res.status(200).send({
          message: "Hospital/Blood Bank exists",
          success: true,
        });
      } else {
        return res.status(200).send({
          message: "User does not exist",
          success: false,
        });
      }
    }
  } catch (err) {
    console.log(`Error: ${err.message}`);
    res.status(500).send({
      message: "Error in login",
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  registerController,
  loginController,
};
