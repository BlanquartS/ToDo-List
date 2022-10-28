import React from "react";
import { FaRegCircle } from "react-icons/fa";

import styles from "./Item.module.css";

const Item = (props) => {
  const deleteHandler = () => {
    if (props.onDelete) {
      props.onDelete(props.id);
    }
  };

  return (
    <li
      className={props.doneTodoList ? styles["done-item"] : styles["todo-item"]}
      onClick={deleteHandler}
    >
      <div>
        <div
          style={{
            display: "inline-block",
            padding: "1rem 1rem",
          }}
        >
          <FaRegCircle />
        </div>
        <div style={{ display: "inline-block" }}>{props.children}</div>
      </div>
    </li>
  );
};

export default Item;
