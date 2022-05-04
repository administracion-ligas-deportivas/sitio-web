import styles from "./Input.module.css";

export default function Input({ title, name, placeholder }) {
  return (
    <>
      <label
        htmlFor="label"
        className={styles.inputLabel}
      >
        {title}
      </label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
    </>
  );
}
