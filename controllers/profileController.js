const { fetchGitHubProfile } = require("../services/githubService");
const {
  insertProfile,
  getAllProfiles,
  getProfileByUsername,
} = require("../models/profileModel");
const calculateStats = require("../utils/calculateStats");




const { asyncHandler } = require("../middleware");

// ================= Analyze GitHub Profile =================

const analyzeProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;

  if (!username) {
    const err = new Error("Username is required");
    err.status = 400;
    throw err;
  }

  let profile, repos;

  try {
    ({ profile, repos } = await fetchGitHubProfile(username));
  } catch (error) {
    if (error.response && error.response.status === 404) {
      const err = new Error("GitHub user not found");
      err.status = 404;
      throw err;
    }

    throw error;
  }

  // Calculate Total Stars
  const {
  totalStars,
  totalForks,
  accountAgeYears,
} = calculateStats(profile, repos);

  // Prepare data
  const profileData = {
    github_id: profile.id,
    username: profile.login,
    name: profile.name,
    bio: profile.bio,
    company: profile.company,
    location: profile.location,
    followers: profile.followers,
    following: profile.following,
    public_repos: profile.public_repos,
    public_gists: profile.public_gists,
    profile_url: profile.html_url,
    avatar_url: profile.avatar_url,
    created_at_github: new Date(profile.created_at)
      .toISOString()
      .slice(0, 19)
      .replace("T", " "),
    total_stars: totalStars,
    total_forks: totalForks,
    account_age_years: accountAgeYears,
  };

  // Save to Database
  await insertProfile(profileData);

  res.status(201).json({
    success: true,
    message: "GitHub profile analyzed successfully",
    data: profileData,
  });
});

// ================= Get All Profiles =================

const getProfiles = asyncHandler(async (req, res) => {
  const profiles = await getAllProfiles();

  res.status(200).json({
    success: true,
    count: profiles.length,
    data: profiles,
  });
});

// ================= Get Profile By Username =================

const getProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;

  const profile = await getProfileByUsername(username);

  if (!profile) {
    const err = new Error("Profile not found");
    err.status = 404;
    throw err;
  }

  res.status(200).json({
    success: true,
    data: profile,
  });
});

module.exports = {
  analyzeProfile,
  getProfiles,
  getProfile,
};