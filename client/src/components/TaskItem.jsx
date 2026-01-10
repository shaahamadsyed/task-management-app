
import { Card, Button, Col, Badge, Form } from "react-bootstrap";

function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>
            {task.title}{" "}
            <Badge bg={task.status === "completed" ? "success" : "warning"}>
              {task.status}
            </Badge>
          </Card.Title>

          {task.description && <Card.Text>{task.description}</Card.Text>}
          {task.dueDate && <small>Due: {task.dueDate.slice(0, 10)}</small>}

          <Form.Select
            className="my-2"
            value={task.status}
            onChange={(e) => onStatusChange(task, e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </Form.Select>

          <Button size="sm" onClick={onEdit} className="me-2">
            Edit
          </Button>
          <Button size="sm" variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TaskItem;
