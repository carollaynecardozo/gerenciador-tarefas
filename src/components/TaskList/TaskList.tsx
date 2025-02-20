// src/TaskList.tsx
import React from "react";
import Task from "../Task/Task";
import "./TaskList.css";

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onRemoveTask,
  onToggleCompletion,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onRemove={() => onRemoveTask(task.id)}
          onToggleCompletion={() => onToggleCompletion(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
