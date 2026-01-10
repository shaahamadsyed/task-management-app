// const express=require('express');
// const cors=require('cors');
// require('dotenv').config();
// const app=express();

// app.use(express.json());
// app.use(cors());

// const PORT=process.env.PORT||8000

// app.listen(PORT,()=>{
//     console.log(`Server running at ${PORT}`)
// })


// require('dotenv').config();
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.use("/api/tasks", require("./routes/taskRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


// require('dotenv').config();
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // Routes
// app.use("/api/tasks", require("./routes/taskRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));

// // Global error handler (optional)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Server error", error: err.message });
// });

// // Start server
// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // allow frontend requests
app.use(express.json());

// Routes
app.use("/api/tasks", require("./routes/taskRoutes")); // keep as is
app.use("/api/users", require("./routes/userRoutes"));

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/taskmanager";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
