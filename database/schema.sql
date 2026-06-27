CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,

    github_id BIGINT NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(255),
    bio TEXT,
    company VARCHAR(255),
    location VARCHAR(255),

    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    public_repos INT DEFAULT 0,
    public_gists INT DEFAULT 0,

    profile_url VARCHAR(255),
    avatar_url VARCHAR(500),

    created_at_github DATETIME,

    total_stars INT DEFAULT 0,
    total_forks INT DEFAULT 0,
    account_age_years DECIMAL(5,2),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);