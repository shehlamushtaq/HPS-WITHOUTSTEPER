const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  TokenNo: Number,
  ServiceDate: {
    type: Date,
    default: new Date(),
  },
  MRNo: Number,
  Ward: String,
  Amount: Number,
  TotalAmount: Number,
  PatientContribution: Number,
  Remarks: String,
  CreatedUser: String,
  ModifyUser: String,
});
//===========================================================

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
