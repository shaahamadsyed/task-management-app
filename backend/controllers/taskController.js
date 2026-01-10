// const Task = require("../models/Task");

// // Create Task
// exports.createTask = async (req, res,next) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     next(error);
//   }
// };

// // Get All Tasks
// // exports.getTasks = async (req, res) => {
// //   const tasks = await Task.find();
// //   res.json(tasks);
// // };
// exports.getTasks = async (req, res,next) => {
//   try {
//     const tasks = await Task.find();
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//     next(error);
//   }
// };



// Update Task
// exports.updateTask = async (req, res) => {
//   const updatedTask = await Task.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
// //   );
// //   res.json(updatedTask);
// // };

// exports.updateTask = async (req, res,next) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedTask) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.json(updatedTask);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//     next(error);
//   }
// };


// // Delete Task
// // exports.deleteTask = async (req, res) => {
// //   await Task.findByIdAndDelete(req.params.id);
// //   res.json({ message: "Task deleted successfully" });
// // };

// exports.deleteTask = async (req, res) => {
//   try {
//     const deletedTask = await Task.findByIdAndDelete(req.params.id);
//     if (!deletedTask) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//     next(error);
//   }
// };

// const Task = require("../models/Task");

// // Create Task
// exports.createTask = async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get All Tasks
// exports.getTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update Task
// exports.updateTask = async (req, res) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedTask) return res.status(404).json({ message: "Task not found" });
//     res.json(updatedTask);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete Task
// exports.deleteTask = async (req, res) => {
//   try {
//     const deletedTask = await Task.findByIdAndDelete(req.params.id);
//     if (!deletedTask) return res.status(404).json({ message: "Task not found" });
//     res.json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// const Task = require("../models/Task");

// // Create Task
// exports.createTask = async (req, res) => {
//   try {
//     // Ensure only required fields are saved and attach user ID if needed
//     const task = new Task({
//       title: req.body.title,
//       description: req.body.description || "",
//       status: req.body.status.toLowerCase(), // must match enum
//       dueDate: req.body.dueDate || null,
//       createdAt: Date.now(),
//     });

//     await task.save();
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get All Tasks
// exports.getTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find().sort({ createdAt: -1 });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update Task
// exports.updateTask = async (req, res) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       req.params.id,
//       {
//         title: req.body.title,
//         description: req.body.description,
//         status: req.body.status.toLowerCase(),
//         dueDate: req.body.dueDate || null,
//       },
//       { new: true }
//     );
//     if (!updatedTask) return res.status(404).json({ message: "Task not found" });
//     res.json(updatedTask);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete Task
// exports.deleteTask = async (req, res) => {
//   try {
//     const deletedTask = await Task.findByIdAndDelete(req.params.id);
//     if (!deletedTask) return res.status(404).json({ message: "Task not found" });
//     res.json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


const Task = require("../models/Task");

// ======================= CREATE TASK =======================
exports.createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description || "",
      status: req.body.status.toLowerCase(),
      dueDate: req.body.dueDate || null,
      user: req.user._id, // attach logged-in user
      createdAt: Date.now(),
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ======================= GET ALL TASKS FOR CURRENT USER =======================
exports.getTasks = async (req, res) => {
  try {
    // Only fetch tasks belonging to the logged-in user
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ======================= UPDATE TASK =======================
exports.updateTask = async (req, res) => {
  try {
    // Only update task if it belongs to logged-in user
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status.toLowerCase(),
        dueDate: req.body.dueDate || null,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found or not authorized" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ======================= DELETE TASK =======================
exports.deleteTask = async (req, res) => {
  try {
    // Only delete task if it belongs to logged-in user
    const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found or not authorized" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
