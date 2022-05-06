import Image from "next/image";
import Link from "next/link";
import myimg from "../public/img-login.png";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Input from "../components/Input/index";
import Label from "../components/Label";
import Button from "../components/Button/index";

function Signup() {
  return (
    <section className={styles.box}>
      <div className={styles.div1su}>
        <div className={styles.imageContainer}>
          <h1 className={styles.titleLeague}>
            Administración de Ligas Deportivas
          </h1>
          {/* <Image
            src={myimg}
            width="300px"
            height="300px"
          /> */}
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.elementsContainer}>
          <h1 className={styles.titlePage}>Registro</h1>
          {/* <Label
            htmlFor="user-label"
            content="Correo o teléfono"
          >
            <Input
              id="user-input"
              placeholder="Correo o teléfono"
            />
          </Label> */}
          <Label
            htmlFor="user-label-pass"
            content="Nombre(s)"
          >
            <Input
              id="user-input-pass"
              placeholder="Nombre(s)"
            />
          </Label>
          <Label
            htmlFor="user-label-pass"
            content="Apellido(s)"
          >
            <Input
              id="user-input-pass"
              placeholder="Apellido(s)"
            />
          </Label>
          <Label
            htmlFor="user-label-pass"
            content="Fecha de nacimiento"
          >
            <Input
              id="user-input-pass"
              placeholder="DD/MM/AAAA"
            />
          </Label>
          <Label
            htmlFor="user-label-pass"
            content="Género"
          >
            <Input
              id="user-input-pass"
              placeholder="Género"
            />
          </Label>
          <Label
            htmlFor="user-label-pass"
            content="Correo"
          >
            <Input
              id="user-input-pass"
              placeholder="Correo"
            />
          </Label>
          <Label
            htmlFor="user-label-pass"
            content="Contraseña"
          >
            <Input
              id="user-input-pass"
              placeholder="Contraseña"
            />
          </Label>
          <Label
            htmlFor="user-label-pass"
            content="Confirmar contraseña"
          >
            <Input
              id="user-input-pass"
              placeholder="Confirmar contraseña"
            />
          </Label>
          <Link
            href="./login"
            passHref
          >
            <a
              href="dummy-href"
              className={styles.elementsContainerAnchor}
            >
              {" "}
              Iniciar sesión{" "}
            </a>
          </Link>
          <Button variant="primary">
            <p>Registrar</p>
          </Button>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Signup;
