const calculateStats = (profile, repos) => {
  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repos.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const accountAgeYears = (
    (Date.now() - new Date(profile.created_at)) /
    (1000 * 60 * 60 * 24 * 365)
  ).toFixed(2);

  return {
    totalStars,
    totalForks,
    accountAgeYears,
  };
};

module.exports = calculateStats;