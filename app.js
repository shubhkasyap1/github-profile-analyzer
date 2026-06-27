const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const profileRoutes = require("./routes/profileRoutes");
const { notFound, errorHandler } = require("./middleware");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "GitHub Profile Analyzer API is running 🚀",
  });
});

app.use("/api", profileRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;