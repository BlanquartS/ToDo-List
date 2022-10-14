import { useState } from "react";

import AddTodo from "./components/Todo/TodoForm/AddTodo";
import TodoList from "./components/Todo/TodoList/TodoList";

import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "Finir l'application Todo-List", id: "t1" },
    { text: "Leçon conduite moto 15h30", id: "t2" },
  ]);

  const addTodoHandler = (todo) => {
    setTodos((prevState) => {
      const updateTodos = [...prevState];
      updateTodos.unshift(todo);
      return updateTodos;
    });
  };

  return (
    <section className={styles["main-content"]}>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList data={todos} />
    </section>
  );
}

export default App;
