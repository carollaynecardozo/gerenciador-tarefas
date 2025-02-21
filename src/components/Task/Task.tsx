import React from "react";
import styles from "./Task.module.css";

interface TaskProps {
  task: Task;
  onRemove: () => void;
  onToggleCompletion: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onRemove, onToggleCompletion }) => {
  return (
    <li className={styles.task} onClick={onToggleCompletion}>
      <input type="checkbox" checked={task.completed} />
      <label className={`${task.completed ? styles.completed : ""}`}>
        {task.text}
      </label>
      <button
        onClick={(event) => {
          event.stopPropagation();
          onRemove();
        }}
      >
        Remover
      </button>
    </li>
  );
};

export default Task;
