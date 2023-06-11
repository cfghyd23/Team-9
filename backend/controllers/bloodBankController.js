 const bloodBankModel = require("../models/bloodBankModel");

const bloodBankController = async (req, res) => {
  try {
    var { name, location, contactInfo, storageCapacity, InventoryStatus } =
      req.body;
    //validations
    if (
      !name ||
      !location ||
      !contactInfo ||
      !storageCapacity ||
      !InventoryStatus
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
      InventoryStatus,
    });

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
