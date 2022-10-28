import React from "react";

import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["todo-item"]} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default TodoItem;
