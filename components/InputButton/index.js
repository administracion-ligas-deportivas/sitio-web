export default function InputButtonComponent({ name, placeholder, content }) {
  return (
    // Seria el placeholder y el contenido del boton ?
    <div className="inputbutton">
      <input name={name} type="text" placeholder={placeholder} />
      <button type="button">{content}</button>
    </div>
  );
}
