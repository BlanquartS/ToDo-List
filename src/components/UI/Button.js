import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      {props.addButton === true ? (
        <button className={styles["button_add"]} type={props.type}>
          {props.text}
        </button>
      ) : (
        <button>{props.icon}</button>
      )}
    </div>
  );
};

export default Button;
