import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import styles from "./App.module.css";

const App: React.FC = () => {
  const savedTasks = localStorage.getItem("tasks");
  const initialTasks = savedTasks ? JSON.parse(savedTasks) : [];

  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: string) => {
    const newTaskObject = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]);
  };

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

  // Função para completar todas as tarefas
  // function completeAllTasks() {
  //   const completedTasks = tasks.map((task) => {
  //     task.completed = true;
  //     return task;
  //   });

  //   setTasks(completedTasks);
  // }

  return (
    <div className={styles.container}>
      <h1>Gerenciador de Tarefas</h1>
      <div className={styles.inputContainer}>
        <TaskInput onAddTask={addTask} />
      </div>
      <TaskList
        tasks={tasks}
        onRemoveTask={removeTask}
        onToggleCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
