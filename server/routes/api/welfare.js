const express = require("express");
const router = express.Router();
const Welfare = require("../../models/welfare.js");

router.post("/add", (req, res) => {
    const patientData = new Welfare(req.body);
    patientData.save();
  
    res.json({ st: 1, msg: "Patient Welfare Data saved successfully" });
  });
  








module.exports = router;
