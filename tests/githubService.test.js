require("dotenv").config();

const {
    fetchGitHubProfile
} = require("../services/githubService");

describe("GitHub Service", () => {

    test("Fetch shubhkasyap1", async () => {

        const data = await fetchGitHubProfile("shubhkasyap1");

        expect(data.profile.login).toBe("shubhkasyap1");

        expect(Array.isArray(data.repos)).toBe(true);

    });

});