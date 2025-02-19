import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  // Função para adicionar uma nova tarefa à lista
  function addTask() {
    if (newTask.trim() === "") {
      return; // Evita adicionar tarefas vazias
    }

    setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao array
    setNewTask(""); // Limpa o input após adicionar a tarefa
  }

  function removeTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      {/* Chamamos addTask quando o botão for clicado */}
      <button onClick={addTask}>Adicionar Tarefa</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => removeTask(index)}
            style={{ cursor: "pointer" }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
