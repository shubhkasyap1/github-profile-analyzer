# GitHub Profile Analyzer API

A Node.js + Express backend that fetches public GitHub profile data, stores useful insights in MySQL, and exposes APIs to analyze and retrieve profiles.

## Features
- Analyze a GitHub profile by username
- Store profile insights such as follower count, repository count, gist count, and account age
- List all stored analyses
- Retrieve a single analyzed profile

## Setup
1. Install dependencies: `npm install`
2. Create a MySQL database and update `.env`
3. Start the server: `npm start`

## Endpoints
- `POST /api/profiles/analyze`
- `GET /api/profiles`
- `GET /api/profiles/:username`
- `GET /health`
