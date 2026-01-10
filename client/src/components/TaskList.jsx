
import React from "react";
import { Row } from "react-bootstrap";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (!tasks || tasks.length === 0) return <p>No tasks available.</p>;

  return (
    <Row>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task._id)}
          onToggle={() => onToggle(task)}
        />
      ))}
    </Row>
  );
}

export default TaskList;
