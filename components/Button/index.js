import Link from "next/link";
import styles from "./Button.module.css";

/**
 * Botón que puede ser una etiqueta button o un anchor (a) dependiendo de los
 * atributos que reciba. Esto nos permite crear enlaces a otras páginas de forma
 * semántica con un anchor y crear botones con button, aprovechando las
 * capacidades de cada etiqueta.
 */
export default function Button({
  variant = "primary",
  disabled = false,
  inverse = false,
  value = "",
  classNames = [],
  isSpaLink = false,
  href = "",
  target = "_blank",
  buttonType = "button",
  children,
}) {
  const allClassNames = [
    ...classNames,
    styles.button,
    styles[variant],
    // Si inverse es verdadero, lo agrega. Si no, hace corto circuito.
    inverse && styles.inverse,
  ].join(" ");

  const CustomTag = isSpaLink || href ? "a" : "button";
  const attributes = {
    general: { disabled, className: allClassNames },
    anchor: { href, target, rel: "noopener noreferrer" },
    button: { type: buttonType, value },
  };

  // Si es un componente Link de Next.js, el anchor (a) no necesita ningún
  // atributo. De no ser así y ser un enlace normal, si necesita dichos
  // atributos.
  const isNormalLink = !isSpaLink && href;
  const tagAttributes = {
    ...(CustomTag === "button" && attributes.button),
    // Si no es un Link de SPA, agregamos sus atributos.
    ...(isNormalLink && attributes.anchor),
    ...attributes.general,
  };

  if (isSpaLink) {
    return (
      <Link
        href={href}
        passHref
      >
        <CustomTag {...tagAttributes}>{children}</CustomTag>
      </Link>
    );
  }

  return <CustomTag {...tagAttributes}>{children}</CustomTag>;
}
