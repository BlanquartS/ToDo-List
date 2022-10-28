import { useState } from "react";

import styles from "./AddTodo.module.css";
import Button from "../../UI/Button.js";

const AddTodo = (props) => {
  const [todoText, setTodoText] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const todo = { text: todoText, id: Math.random() };
    props.onAddTodo(todo);
    setTodoText("");
  };

  const todoInputChangeHandler = (event) => {
    setTodoText(event.target.value);
  };

  return (
    <div className={styles["global-form"]}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["form-control"]}>
          <label>To Do</label>
          <input
            type="text"
            value={todoText}
            placeholder={"Type here..."}
            onChange={todoInputChangeHandler}
          />
          <Button addButton={true} type="submit" text="+" />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
