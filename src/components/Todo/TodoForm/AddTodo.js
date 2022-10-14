import { useState } from "react";

import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //TODO ADD EVENT.
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    setTodoTitle("");
  };

  const todoInputChangeHandler = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <div className={styles["global-form"]}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["form-control"]}>
          <label>To Do</label>
          <input
            type="text"
            value={todoTitle}
            placeholder={"Type here..."}
            onChange={todoInputChangeHandler}
          />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
