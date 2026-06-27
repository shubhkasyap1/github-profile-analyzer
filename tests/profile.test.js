require("dotenv").config();
const pool = require("../config/db");
const request = require("supertest");
const app = require("../app");


describe("GitHub Profile API", () => {

    test("GET / should return API status", async () => {

        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);

        expect(res.body.success).toBe(true);

    });

    test("GET Unknown Route", async () => {

        const res = await request(app).get("/unknown");

        expect(res.statusCode).toBe(404);

    });

});

describe("Analyze GitHub Profile", () => {

    test("POST existing github profile", async () => {

        const res = await request(app)
            .post("/api/profile/shubhkasyap1");

        expect(res.statusCode).toBe(201);

        expect(res.body.success).toBe(true);

    });

});

describe("All Profiles", () => {

    test("GET /api/profiles", async () => {

        const res = await request(app)
            .get("/api/profiles");

        expect(res.statusCode).toBe(200);

        expect(res.body.success).toBe(true);

        expect(Array.isArray(res.body.data)).toBe(true);

    });

});

describe("Single Profile", () => {

    test("GET Existing Profile", async () => {

        const res = await request(app)
            .get("/api/profile/shubhkasyap1");

        expect(res.statusCode).toBe(200);

        expect(res.body.success).toBe(true);

    });

    test("GET Unknown Profile", async () => {

        const res = await request(app)
            .get("/api/profile/not_exist_123456789");

        expect(res.statusCode).toBe(404);

    });

});



afterAll(async () => {
  await pool.end();
});