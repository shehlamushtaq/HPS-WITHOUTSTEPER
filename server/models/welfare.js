const mongoose = require("mongoose");

const welfareSchema = mongoose.Schema({
  MRNo: Number,
  TokenNo: Number,
  WelfareDate: {
    type: Date,
    default: new Date(),
  },
  Profession: String,
  Fiqa: String,
  Education: String,
  Cast: String,
  MonthlyIncome: Number,
  Guardian: String,
  OtherInfo: String,
  MaleKids: Number,
  FemaleKids: Number,
  OtherKids: Number,
  Brothers: Number,
  Sisters: Number,
  NoOFFamilyMembers: Number,
  IsMarried: Boolean,
  IsAbleToPay: Boolean,
  IsEarning: Boolean,
  IsZakat: Boolean,
  IsDonation: Boolean,
  HaveGold: Boolean,
  ReqName: String,
  ReqPhone: Boolean,
  ReqRelationWithPatient: String,
  CreateUser: String,
  ModifyUser: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
//===========================================================

const Welfare = mongoose.model("Welfare", welfareSchema);
module.exports = Welfare;
