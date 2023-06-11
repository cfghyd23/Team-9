const adminModel = require("../models/admin.model.js");
const { removeListener } = require("../models/donor.model.js");

const adminController = async (req, res) => {
  try {
    var { name, role, contactInfo } = req.body;
    //validations
    if (!name || !removeListener || !contactInfo ) {
      console.log(req.body);
      return res.status(400).send({
        message: "Please enter all fields",
        success: false,
      });
    }

    var ngo = await ngoModel.create({
      name,
      mission,
      contactInfo,
      location,
      website,
    });

    return res.status(200).send({
      message: "NGO registered successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = {
  ngoController,
};
