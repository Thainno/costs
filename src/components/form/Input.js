import styles from "./Input.module.css";

function Input({ type, text, name, placehouder, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placehouder={placehouder}
        handleOnChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
