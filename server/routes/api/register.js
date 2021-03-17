const express = require("express");
const router = express.Router();
const Registration = require("../../models/register.js");

router.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  const user = await Registration.findById(id);
  if (user) {
    res.json({ st: 1, patient: user });
  } else {
    res.json({ st: 0, patient: null });
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await Registration.find();
    res.json({ st: 1, patients: users });
  } catch (err) {
    console.log(err);
    res.json({ st: 0 });
  }
});

router.post("/add", (req, res) => {
  const patientData = new Registration(req.body);
  patientData.save();

  res.json({ st: 1, msg: "Patient Data saved successfully" });
});

module.exports = router;
