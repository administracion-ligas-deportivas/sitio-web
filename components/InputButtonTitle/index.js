import styles from "./InputButtonTitle.module.css";
import Button from "../Button";
import Input from "../Input/index";

// U de que es el parametro que ingresa el usuario
// Esta es la molecula
export default function InputButtonTitle({
  titleU,
  nameU,
  placeholderU,
  contentU,
}) {
  return (
    // Seria el placeholder y el contenido del boton ?
    <div className={styles.inputButton}>
      {/* <label htmlFor="title">{titleU}</label> */}
      <Input
        title={titleU}
        name={nameU}
        placeholder={placeholderU}
      />
      {/* Utilice el componente Boton, pero mantuve el tamaño del 
      boton anterior, de ser necesario se cambia.
      El tamaño actual me pareció un poco más estético.  */}
      <Button variant="primary">{contentU}</Button>
    </div>
  );
}
