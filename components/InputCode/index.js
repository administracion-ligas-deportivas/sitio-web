import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
/*  
Hay que agregar directamente los estilos. Si no, PostCSS los purga.

https://stackoverflow.com/a/66575373/13562806 
*/
import "@fortawesome/fontawesome-svg-core/styles.css";

import styles from "./InputCode.module.css";
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";

// U parametros del Usuario
// Molecula

export default function InputCodeComponent({
  titleU,
  nameU,
  placeholderU,
  contentU,
}) {
  return (
    <>
      <div className={styles.container}>
        <Label
          content={titleU}
          htmlFor={nameU}
        />

        <div className={styles.container}>
          <Input
            id={nameU}
            name=""
            type="text"
            title=""
            placeholder=""
            readOnly
          />
        </div>
      </div>
      {/* Seria el placeholder y el contenido del boton ? */}
      <div className={styles.inputbutton}>
        <InputComponent
          title={titleU}
          name={nameU}
          placeholder={placeholderU}
        />
        <Button>{contentU}</Button>
        <Button
          variant="primary"
          inverse
        >
          <FontAwesomeIcon
            icon={faCopy}
            className={styles.copyIcon}
            // size="2x"
          />
        </Button>
        {/* <CopyComponent /> */}
      </div>
    </>
  );
}

// // Atomos
// export function ButtonComponent({ content }) {
//   return <button type="button">{content}</button>;
// }

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
        className={styles.copyIcon}
      />
    </button>
  );
}
