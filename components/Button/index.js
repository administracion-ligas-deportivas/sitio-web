/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-css-tags */

import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  disabled = false,
  inverse = false,
  value = "",
  classNames = [],
  children,
}) {
  const allClassNames = [
    ...classNames,
    styles.button,
    styles[variant],
    // Si inverse es verdadero, lo agrega. Si no, hace corto circuito.
    inverse && styles.inverse,
  ].join(" ");
  return (
    <button
      type="button"
      className={allClassNames}
      disabled={disabled}
      value={value}
    >
      {children}
    </button>
  );
}

/* function Button({ type = "primary" }) {
  return (
    <div>
      <button
        type="button"
        href="www.google.com"
        style={{
          backgroundColor: "rgb(30, 20, 87)",
        }}
      >
        Botón
      </button>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(223, 29, 45)",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          height: "40px",
          width: "70px",
        }}
      >
        Botón
      </button>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(26, 28, 158)",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          height: "40px",
          width: "70px",
        }}
      >
        Botón
      </button>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(60, 100, 177)",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          height: "40px",
          width: "70px",
        }}
      >
        Botón
      </button>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(243, 88, 101)",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          height: "40px",
          width: "70px",
        }}
      >
        Botón
      </button>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(239, 239, 239)",
          borderRadius: "10px",
          color: "black",
          fontWeight: "bold",
          height: "40px",
          width: "70px",
        }}
      >
        Botón
      </button>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(244, 246, 251)",
          borderRadius: "10px",
          color: "black",
          fontWeight: "bold",
          height: "40px",
          width: "70px",
        }}
      >
        Botón
      </button>
      <button
        type="button"
        style={{
          backgroundColor: "rgb(255, 245, 246)",
          borderRadius: "10px",
          color: "black",
          fontWeight: "bold",
          height: "40px",
          width: "70px",
        }}
      >
        Botón
      </button>
    </div>
  );
} */
