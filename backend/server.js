require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const logger = require("./utils/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

/* ---------- Routes ---------- */
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

/* ---------- Global Error Handler ---------- */
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
    error: err.message
  });
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      logger.info(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    logger.error("Failed to connect DB");
    logger.error(err.message);
    process.exit(1);
  });
