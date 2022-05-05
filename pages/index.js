import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";
import InputButton from "../components/InputButton";
import Footer from "../components/Footer";
import SingleStat from "../components/Statistics";
import UserIcon from "../components/Icon";
import InputButtonTitle from "../components/InputButtonTitle";
import InputCode from "../components/InputCode";
// import Input from "../components/Input/index";

// import Image from "next/image";
import Header from "../components/header";
import OldInput from "../components/OldInput";
import Input from "../components/Input";
import Label from "../components/Label";
import Jugador from "../components/jugador";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <div className="container mx-auto py-2">
        <div>
          <Label
            htmlFor="new-input"
            content="Nuevo Input"
          >
            <Input
              id="new-input"
              placeholder="Nuevo Input"
            />
          </Label>
          <OldInput />
          <Jugador />
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              gap: ".5em",
              flexWrap: "wrap",
              padding: "1em",
            }}
          >
            <Button variant="primary">
              <p>Primary</p>
            </Button>
            <Button disabled>
              <p>Primary Disabled</p>
            </Button>
            <Button variant="secondary">
              <p>Secondary</p>
            </Button>
            <Button
              variant="secondary"
              disabled
            >
              <p>Secondary Disabled</p>
            </Button>
            <Button
              variant="accent"
              disabled
            >
              <p>Accent Disabled</p>
            </Button>
            <Button variant="accent">
              <p>Accent</p>
            </Button>
          </section>
        </div>
        <div>
          <InputButton
            nameU="codigo"
            placeholderU="Ingresa"
            contentU="Registro"
          />
          <SingleStat
            pj={20}
            pg={20}
            pp={20}
            pe={20}
            nj={20}
          />
          <UserIcon />
          <InputButtonTitle
            titleU="Añadir integrante"
            nameU="addIntegrante"
            placeholderU="Ingresa el nombre del jugador"
            contentU="Añadir"
          />
          <InputCode
            titleU="Código de acceso"
            nameU="accessCode"
            placeholderU="Código"
            contentU="Generar código"
          />
          {/* <Input
          title="Titulo"
          name="input"
          placeholder="Input"
        /> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
