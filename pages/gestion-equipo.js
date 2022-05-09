import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

import Head from "next/head";
import styles from "../styles/GestionEquipo.module.css";
import InputButton from "../components/InputButton";
import Footer from "../components/Footer";
import SingleStat from "../components/Statistics";
import UserIcon from "../components/Icon";
import InputButtonTitle from "../components/InputButtonTitle";
import InputCode from "../components/InputCode";
// import Input from "../components/Input/index";

// import Image from "next/image";
import OldInput from "../components/OldInput";
import Input from "../components/Input";
import Label from "../components/Label";
import Jugador from "../components/Jugador";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function GestionEquipo() {
  return (
    <>
      <Head>
        <title>Crear Equipo</title>
        <meta
          name="Creación de un nuevo equipo"
          content="Administración de Ligas Deportivas"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Navbar />

      <div className="container mx-auto py-2">
        <div>
          <div className={styles.rectangle}>
            <h1> Nombre del Equipo </h1>
            <div className={styles.flexContainer}>
              <div className={styles.contenido}>
                <Label> Integrantes </Label>
                <div className={styles.flexContainer}>
                  <div>
                    <Jugador />
                    <Jugador />
                    <Jugador />
                    <Jugador />
                  </div>
                  <div>
                    <Jugador />
                    <Jugador />
                    <Jugador />
                    <Jugador />
                  </div>
                </div>
              </div>
              <div className={styles.estadisticas}>
                <SingleStat
                  pj={20}
                  pg={20}
                  pp={20}
                  pe={20}
                  nj={20}
                />
              </div>
            </div>
            <div style={{ padding: "10px" }}>
              <Label> Añadir integrante </Label>
              <InputButton
                nameU="integrante"
                placeholderU="Nombre"
                contentU="Añadir"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
