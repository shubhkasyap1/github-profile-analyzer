const express = require("express");
const router = express.Router();

const {
  analyzeProfile,
  getProfiles,
  getProfile,
} = require("../controllers/profileController");

// Analyze GitHub profile
router.post("/profile/:username", analyzeProfile);

// Get all analyzed profiles
router.get("/profiles", getProfiles);

// Get one analyzed profile
router.get("/profile/:username", getProfile);

module.exports = router;