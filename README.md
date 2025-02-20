# Gerenciador de Tarefas

## 📌 Sobre o Projeto

O **Gerenciador de Tarefas** é uma aplicação web desenvolvida em **React** com **TypeScript** que permite adicionar, visualizar e remover tarefas. As tarefas são armazenadas no **Local Storage**, garantindo que persistam mesmo após o usuário recarregar a página.

## 🛠 Tecnologias Utilizadas

- **React**: Biblioteca para criação de interfaces.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta para criação e otimização de projetos em React.
- **CSS**: Estilização da interface.
- **Local Storage**: Armazenamento local das tarefas.

## 🏗 Passos para Construção

### 1️⃣ Configuração do Ambiente

Rodando o projeto localmente usando **Vite**:

```sh
npm run dev
```

### 2️⃣ Estruturando o **App.tsx**

O **App.tsx** gerencia o estado das tarefas e usa componentes separados para entrada e exibição das tarefas.

#### 🔹 Estados Gerenciados

- `tasks`: Lista de tarefas.
- `newTask`: Texto da nova tarefa.

#### 🔹 Efeito para Persistência de Dados

Utilizamos `useEffect` para salvar as tarefas no **Local Storage**:

```tsx
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

### 3️⃣ Criando o Componente `TaskInput.tsx`

Este componente contém o campo de entrada e o botão para adicionar novas tarefas.

### 4️⃣ Criando o Componente `TaskList.tsx`

Este componente exibe a lista de tarefas e permite removê-las ao clicar.

### 5️⃣ Integrando os Componentes no `App.tsx`

Importamos e utilizamos os componentes.

## 🚀 Funcionalidades

✅ Adicionar tarefas pressionando **Enter** ou clicando no botão.
✅ Listar tarefas na tela.
✅ Completar tarefas clicando no checkbox.
✅ Remover tarefas ao clicar nelas.
✅ Armazenamento no **Local Storage**.

## 📌 Conclusão

Este projeto me ensinou sobre **componentização**, **gerenciamento de estado** e **persistência de dados** no React. Componentizar o código tornou a aplicação mais modular e reutilizável.

💡 **Próximos passos:** Melhorar o design (responsividade e UX), adicionar edição de tarefas e fazer o deploy em um serviço de hosting.

---

### 🎯 Feito com dedicação e aprendizado! 🚀
