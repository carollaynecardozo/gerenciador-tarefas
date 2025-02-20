import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Pega as tarefas salvas no localStorage
  const savedTasks = localStorage.getItem("tasks");
  const initialTasks = savedTasks ? JSON.parse(savedTasks) : [];

  // Estado para armazenar as tarefas
  const [tasks, setTasks] =
    useState<{ id: number; text: string; completed: boolean }[]>(initialTasks);
  const [newTask, setNewTask] = useState("");

  // Atualiza o localStorage sempre que as tarefas mudam
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Função para adicionar uma nova tarefa
  function addTask() {
    if (newTask.trim() === "") {
      return; // Não adiciona tarefas vazias
    }

    const newTaskObject = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask(""); // Limpa o campo de entrada
  }

  // Função para remover uma tarefa
  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id)); // Filtra e remove a tarefa com o id correspondente
  }

  // Função para alternar o status de conclusão da tarefa
  function toggleTaskCompletion(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      {/* Botão para adicionar uma nova tarefa */}
      <button onClick={addTask}>Adicionar Tarefa</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
