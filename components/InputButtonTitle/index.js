import styles from "../../styles/Imputbuttontitle.module.css";

// U de que es el parametro que ingresa el usuario
// Esta es la molecula
export default function InputButtonTitleComponent({
  titleU,
  nameU,
  placeholderU,
  contentU,
}) {
  return (
    // Seria el placeholder y el contenido del boton ?
    <div className={styles.inputbutton}>
      <InputComponent
        title={titleU}
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
export function InputComponent({ title, name, placeholder }) {
  return (
    <>
      <label htmlFor="title">{title}</label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
}
