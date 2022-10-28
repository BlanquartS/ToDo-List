import styles from "./TodoList.module.css";
import Item from "./Item.js";

const TodoList = (props) => {
  return (
    <section>
      <ul className={styles["list"]}>
        {props.data.map((todo) => (
          <Item
            id={todo.id}
            key={todo.id}
            doneTodoList={props.doneTodoList}
            onDelete={props.onDeleteItem}
          >
            {todo.text}
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
