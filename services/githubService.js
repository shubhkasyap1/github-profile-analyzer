const axios = require("axios");

const fetchGitHubProfile = async (username) => {
  const GITHUB_API = process.env.GITHUB_API;

  const profileResponse = await axios.get(
    `${GITHUB_API}/users/${username}`
  );

  const repoResponse = await axios.get(
    `${GITHUB_API}/users/${username}/repos?per_page=100`
  );

  return {
    profile: profileResponse.data,
    repos: repoResponse.data,
  };
};

module.exports = {
  fetchGitHubProfile,
};