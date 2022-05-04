import styles from "../../styles/InputButton.module.css";

// U parametros del Usuario
// Molecula

export default function InputButtonComponent({
  nameU,
  placeholderU,
  contentU,
}) {
  return (
    // Seria el placeholder y el contenido del boton ?
    <div className={styles.inputbutton}>
      <InputComponent
        name={nameU}
        placeholder={placeholderU}
      />
      <ButtonComponent content={contentU} />
    </div>
  );
}

// Atomos
export function ButtonComponent({ content }) {
  return <button type="button">{content}</button>;
}

// Atomos
export function InputComponent({ name, placeholder }) {
  return (
    <input
      name={name}
      type="text"
      placeholder={placeholder}
    />
  );
}
