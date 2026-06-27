# GitHub Profile Analyzer API

A RESTful backend API built with **Node.js**, **Express.js**, **MySQL**, and the **GitHub Public API** to analyze GitHub user profiles, store useful insights, and retrieve analyzed profiles.

---

## 🚀 Live Demo

**API Base URL**

```
https://github-profile-analyzer-yh0q.onrender.com
```

---

## 📌 Features

* Analyze any GitHub public profile using username
* Fetch data from GitHub Public API
* Store profile insights in MySQL
* Calculate additional insights:

  * Total Stars
  * Total Forks
  * Account Age (Years)
* Prevent duplicate records by updating existing profiles
* Retrieve all analyzed profiles
* Retrieve a single analyzed profile
* Global error handling
* MVC Architecture
* RESTful APIs
* Environment Variable Configuration
* Jest & Supertest Testing

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub REST API
* Axios
* Jest
* Supertest

---

## 📁 Project Structure

```
github-profile-analyzer/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── profileController.js
│
├── database/
│   └── schema.sql
│
├── middleware/
│   └── index.js
│
├── models/
│   └── profileModel.js
│
├── routes/
│   └── profileRoutes.js
│
├── services/
│   └── githubService.js
│
├── tests/
│   ├── githubService.test.js
│   └── profile.test.js
│
├── utils/
│   ├── apiResponse.js
│   ├── calculateStats.js
│   └── constants.js
│
├── .env.example
├── app.js
├── server.js
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/github-profile-analyzer.git

cd github-profile-analyzer
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer

GITHUB_API=https://api.github.com
```

---

## Create Database

Create MySQL database

```sql
CREATE DATABASE github_analyzer;
```

Execute

```
database/schema.sql
```

---

## Run Development Server

```bash
npm run dev
```

---

## Run Production Server

```bash
npm start
```

---

## Run Tests

```bash
npm test
```

---

# API Endpoints

## 1. Analyze GitHub Profile

**POST**

```
/api/profile/:username
```

Example

```
POST /api/profile/shubhkasyap1
```

---

## 2. Get All Profiles

**GET**

```
/api/profiles
```

---

## 3. Get Single Profile

**GET**

```
/api/profile/:username
```

Example

```
GET /api/profile/shubhkasyap1
```

---

# Database Schema

The application stores the following information:

* GitHub ID
* Username
* Name
* Bio
* Company
* Location
* Followers
* Following
* Public Repositories
* Public Gists
* Profile URL
* Avatar URL
* GitHub Account Created Date
* Total Stars
* Total Forks
* Account Age (Years)
* Created At
* Updated At

---

# Sample Response

```json
{
  "success": true,
  "message": "GitHub profile analyzed successfully",
  "data": {
    "github_id": 77494972,
    "username": "shubhkasyap1",
    "followers": 9,
    "public_repos": 65,
    "total_stars": 6,
    "total_forks": 18,
    "account_age_years": "5.45"
  }
}
```

---

# Testing

The project uses:

* Jest
* Supertest

Run tests using:

```bash
npm test
```

Current Status

```
Test Suites: 2 passed
Tests: 7 passed
```

---

# Deployment

Backend is deployed on **Render**.

Database is hosted on **Railway MySQL**.

---

# Author

**Shubham Kumar**

* GitHub: https://github.com/shubhkasyap1
* LinkedIn: https://linkedin.com/in/shubhkasyap1

---

## Future Improvements

* Pagination
* Search & Filtering
* API Rate Limiting
* Authentication
* Swagger Documentation
* Docker Support
* GitHub OAuth Integration

---

## License

This project is developed for educational and assessment purposes.
