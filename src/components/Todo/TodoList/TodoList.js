import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem.js";

const TodoList = (props) => {
  return (
    <section>
      <ul className={styles["todo-list"]}>
        {props.data.map((todo) => (
          <TodoItem id={todo.id} key={todo.id} onDelete={props.onDeleteItem}>
            {todo.text}
          </TodoItem>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
