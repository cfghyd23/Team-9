const userModel = require("../models/donor.model.js");

async function getItems(bloodType, zipcode) {
  const Items = await userModel.find({
    bloodType: bloodType,
    zipcode: zipcode,
  });
  return Items;
}

const donorController = async (req, res) => {
  try {
    var { bloodType, zipcode, units } = req.body;
    //validations
    if (!bloodType || !zipcode || !units) {
      return res.status(400).send({
        message: "Please enter all fields",
        success: false,
      });
    }
    //check user

    getItems(bloodType, zipcode).then((docs) => {
      if (!docs) {
        //console;
        //  console.log(err);
      } else {
        console.log(docs.length);
        console.log("Result : ", docs);

        console.log("docs length ", docs.length);
        if (docs.length >= units) {
          return res.status(200).send({
            message: "Donors found",
            success: true,
            data: docs,
          });
        } else {
          return res.status(400).send({
            message: "Required Amount could not be found",
            success: false,
          });
        }
      }
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
  donorController,
};
