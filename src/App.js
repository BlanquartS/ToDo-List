import { useState } from "react";

import AddTodo from "./components/Todo/TodoForm/AddTodo";
import TodoList from "./components/Todo/TodoList/TodoList";

import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "Finir l'application Todo-List", id: "t1" },
    { text: "Leçon conduite moto 15h30", id: "t2" },
  ]);

  const [doneTodos, setDoneTodos] = useState([
    { text: "Laver la cuisine", id: "t19092" },
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
      //Récupération de l'item réalisé
      const deletedItem = prevState.filter((todo) => todo.id === todoId);
      //Ajoute de l'item réalisé dans la liste
      setDoneTodos((prevValues) => {
        const updateTodos = [...prevValues];
        updateTodos.unshift(deletedItem[0]);
        return updateTodos;
      });
      //Mise a jour de la liste des items a réaliser.
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };
  let contentTodo = (
    <p style={{ textAlign: "center" }}> No Todo found. Maybe add one ?</p>
  );

  let contentDoneTodo = <p style={{ textAlign: "center" }}> Nothing done.</p>;

  if (todos.length > 0) {
    contentTodo = (
      <div>
        <h1 style={{ color: "white" }}>To Do</h1>
        <TodoList onDeleteItem={onDeleteItem} data={todos} />;
      </div>
    );
  }

  if (doneTodos.length > 0) {
    contentDoneTodo = (
      <div>
        <h1 style={{ color: "white" }}>Done</h1>
        <TodoList doneTodoList={true} data={doneTodos} />;
      </div>
    );
  }

  return (
    <div>
      <section id="Todo Form" className={styles["form"]}>
        <AddTodo onAddTodo={addTodoHandler} />
      </section>
      <section className={styles["content"]}>{contentTodo}</section>
      <section className={styles["content"]}>{contentDoneTodo}</section>
    </div>
  );
}

export default App;
