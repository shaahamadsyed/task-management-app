
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
    // Only update task if belongs to logged-in user
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
