import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/InputCode.module.css";

// U parametros del Usuario
// Molecula

export default function InputCodeComponent({
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
      <CopyComponent />
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

// Atomos
export function CopyComponent() {
  return (
    // Estan en linea los estilos porque asigne estilo general
    // a todos los botones y así se puede cambiar solo para el de copiar
    <button
      style={{
        border: "1px solid #1e1457",
        backgroundColor: "white",
        width: "50px",
      }}
      type="button"
      className="copybutton"
    >
      <FontAwesomeIcon
        icon={faCopy}
        className={styles.copyicon}
      />
    </button>
  );
}
