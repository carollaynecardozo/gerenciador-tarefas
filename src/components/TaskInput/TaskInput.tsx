// src/TaskInput.tsx
import React, { useState } from "react";
import "./TaskInput.css";

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      onAddTask(newTaskText);
      setNewTaskText(""); // Limpa o campo de input após adicionar
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Digite uma nova tarefa"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </div>
  );
};

export default TaskInput;
