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

  const onDeleteItem = (todoId) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };
  let contentTodo = (
    <p style={{ textAlign: "center" }}> No Todo found. Maybe add one ?</p>
  );

  if (todos.length > 0) {
    contentTodo = <TodoList onDeleteItem={onDeleteItem} data={todos} />;
  }

  return (
    <div>
      <section id="Todo Form" className={styles["form"]}>
        <AddTodo onAddTodo={addTodoHandler} />
      </section>
      <section className={styles["content"]}>{contentTodo}</section>
    </div>
  );
}

export default App;
