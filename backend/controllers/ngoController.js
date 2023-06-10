const ngoModel = require("../models/ngo.model.js");

const ngoController = async (req, res) => {
  try {
    var { name, mission, contactInfo, location, website } = req.body;
    //validations
    if (!name || !mission || !contactInfo || !location || !website) {
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
