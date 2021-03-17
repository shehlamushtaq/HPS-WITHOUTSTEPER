const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  MRNo: Number,
  Name: String,
  TokenNo: Number,
  FatherOrHusband: String,
  DOB: {
    type: Date,
    default: new Date(),
  },
  Age: Number,
  Gender: String,
  Religion: String,
  District: String,
  City: String,
  Area: String,
  HousNo: String,
  Address: String,
  CNIC: String,
  Phone: Number,
  OffPhone: Number,
  Mobile: Number,
  RefBy: String,
  Remarks: String,
  IsRejected: false,
  IsZakat: String,
  IsPAFEmp: false,
  MonthlyConsLimit: Number,
  ThumbImage: "",
  NOY: "",
  EmpID: Number,
  IsStaff: false,
  CreateUser: "",
  ModifyUser: "",
  ModifyDate: "",
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
//===========================================================

const Registration = mongoose.model("registration", registrationSchema);
module.exports = Registration;
