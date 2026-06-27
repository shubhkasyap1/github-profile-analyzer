const pool = require("../config/db");

const insertProfile = async (data) => {
  const sql = `
INSERT INTO profiles (
    github_id,
    username,
    name,
    bio,
    company,
    location,
    followers,
    following,
    public_repos,
    public_gists,
    profile_url,
    avatar_url,
    created_at_github,
    total_stars,
    total_forks,
    account_age_years
)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)

ON DUPLICATE KEY UPDATE

name = VALUES(name),
bio = VALUES(bio),
company = VALUES(company),
location = VALUES(location),
followers = VALUES(followers),
following = VALUES(following),
public_repos = VALUES(public_repos),
public_gists = VALUES(public_gists),
profile_url = VALUES(profile_url),
avatar_url = VALUES(avatar_url),
created_at_github = VALUES(created_at_github),
total_stars = VALUES(total_stars),
total_forks = VALUES(total_forks),
account_age_years = VALUES(account_age_years),
updated_at = CURRENT_TIMESTAMP;
`;

  const values = [
    data.github_id,
    data.username,
    data.name,
    data.bio,
    data.company,
    data.location,
    data.followers,
    data.following,
    data.public_repos,
    data.public_gists,
    data.profile_url,
    data.avatar_url,
    data.created_at_github,
    data.total_stars,
    data.total_forks,
    data.account_age_years,
  ];

  const [result] = await pool.execute(sql, values);

  return result;
};

const getAllProfiles = async () => {
    const [rows] = await pool.execute(`
        SELECT
            id,
            username,
            name,
            followers,
            following,
            public_repos,
            total_stars,
            total_forks,
            account_age_years,
            updated_at
        FROM profiles
        ORDER BY updated_at DESC
    `);

    return rows;
};

const getProfileByUsername = async (username) => {
    const [rows] = await pool.execute(
        `SELECT * FROM profiles WHERE username = ?`,
        [username]
    );

    return rows[0];
};

module.exports = {
    insertProfile,
    getAllProfiles,
    getProfileByUsername,
};
