import React from "react";
import "./Task.css";

interface TaskProps {
  task: Task;
  onRemove: () => void;
  onToggleCompletion: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onRemove, onToggleCompletion }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleCompletion}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <button onClick={onRemove}>Remover</button>
    </li>
  );
};

export default Task;
