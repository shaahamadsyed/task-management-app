
import React, { useEffect, useState } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  /* ================= FILTER + SORT + SEARCH ================= */
  useEffect(() => {
    let temp = [...tasks];

    // Filter
    if (statusFilter !== "all") {
      temp = temp.filter((t) => t.status === statusFilter);
    }

    // Search
    if (search.trim()) {
      temp = temp.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "newest") {
      temp.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    if (sortBy === "oldest") {
      temp.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    if (sortBy === "dueDate") {
      temp.sort(
        (a, b) => new Date(a.dueDate || Infinity) - new Date(b.dueDate || Infinity)
      );
    }

    setFilteredTasks(temp);
  }, [tasks, statusFilter, sortBy, search]);

  /* ================= CRUD ================= */
  const handleSave = async (data) => {
    if (editTask) {
      const res = await updateTask(editTask._id, data);
      setTasks(tasks.map((t) => (t._id === editTask._id ? res.data : t)));
    } else {
      const res = await createTask(data);
      setTasks([res.data, ...tasks]);
    }
    setShowForm(false);
    setEditTask(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this task?")) {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    }
  };

  const handleStatusChange = async (task, status) => {
    const res = await updateTask(task._id, { ...task, status });
    setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
  };

  return (
    <Container className="mt-4">
      <h2>Tasks</h2>

      <Button onClick={() => setShowForm(true)} className="mb-3">
        + Add Task
      </Button>

      {/* FILTER / SORT / SEARCH */}
      <Form className="mb-3 d-flex gap-2">
        <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </Form.Select>

        <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="dueDate">Due Date</option>
        </Form.Select>

        <Form.Control
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Row>
        {filteredTasks.length === 0 ? (
          <p>No results found.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onEdit={() => {
                setEditTask(task);
                setShowForm(true);
              }}
              onDelete={() => handleDelete(task._id)}
              onStatusChange={handleStatusChange}
            />
          ))
        )}
      </Row>

      <TaskForm
        show={showForm}
        task={editTask}
        onSave={handleSave}
        onCancel={() => {
          setShowForm(false);
          setEditTask(null);
        }}
      />
    </Container>
  );
}

export default TaskPage;
