// import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div
      style={{
        padding: 5,
        display: "flex",
        height: 100,
        fontFamily: "Helvetica",
        fontSize: 20,
        fontWeight: "bold",
        margin: "auto",
      }}
    >
      <div>
        <FontAwesomeIcon
          icon={faCompass}
          style={{ height: 80, marginTop: "5px", marginLeft: "5px" }}
        />
      </div>
      <div style={{ margin: "auto" }}>
        <Link href="/">
          {/* 
            Ignorar el warning. Esto sucede porque no hay href en el anchor, pero al estar dentro del Link, no lo requiere. 
          */}
          <a style={{ padding: 70 }}>Ligas</a>
        </Link>
        <Link href="/">
          <a style={{ padding: 70 }}>Torneos</a>
        </Link>
        <Link href="/">
          <a style={{ padding: 70 }}>Equipo</a>
        </Link>
        <Link href="/">
          <a style={{ padding: 70 }}>Calendario</a>
        </Link>
        <Link href="/">
          <a style={{ padding: 70 }}>Estadisticas</a>
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faGear}
          style={{ height: 25, marginTop: "30px", marginRight: "30px" }}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{ height: 80, padding: "5px" }}
        />
      </div>
    </div>
  );
}

export default Navbar;
