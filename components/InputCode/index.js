import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import styles from "./InputCode.module.css";
import Button from "../Button";
import Input from "../Input/index";

// U parametros del Usuario
// Molecula

export default function InputCode({ titleU, nameU, placeholderU, contentU }) {
  return (
    // Seria el placeholder y el contenido del boton ?
    <div className={styles.inputButton}>
      {/* <label htmlFor="title">{titleU}</label> */}
      <Input
        title={titleU}
        name={nameU}
        placeholder={placeholderU}
      />
      <Button variant="primary">{contentU}</Button>
      <Button
        variant="primary"
        inverse
      >
        <FontAwesomeIcon
          icon={faCopy}
          className={styles.copyIcon}
        />
      </Button>
    </div>
  );
}
