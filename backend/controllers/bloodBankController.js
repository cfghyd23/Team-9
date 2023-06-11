const bloodBankModel = require("../models/bloodBankModel");

const bloodBankController = async (req, res) => {
  try {
    var { name, location, contactInfo, storageCapacity, inventoryStatus } =
      req.body;
    //validations
    if (
      !name ||
      !location ||
      !contactInfo ||
      !storageCapacity ||
      !inventoryStatus
    ) {
      console.log(req.body);
      return res.status(400).send({
        message: "Please enter all fields",
        success: false,
      });
    }

    var bloodBank = await bloodBankModel.create({
      name,
      location,
      contactInfo,
      storageCapacity,
      inventoryStatus,
    });

    console.log(bloodBank);
    return res.status(200).send({
      message: "Hospital registered successfully",
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
  bloodBankController,
};
