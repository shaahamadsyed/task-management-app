
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const logger = require("./utils/logger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Global error handler (optional)
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
