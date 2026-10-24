const express = require("express");
const Application = require("../models/Application");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, rollNumber, internship } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !rollNumber?.trim() ||
      !internship?.trim()
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const application = await Application.create({
      name,
      email,
      rollNumber,
      internship
    });

    res.status(201).json({
      message: "Application submitted successfully",
      application
    });

  } catch (error) {
    res.status(400).json({
      message: "Failed to submit application",
      error: error.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });

    res.status(200).json(applications);

  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve applications"
    });
  }
});

module.exports = router;