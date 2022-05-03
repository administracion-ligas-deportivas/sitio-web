/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-css-tags */

// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
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
        <a style={{ padding: 70 }}>Ligas</a>
        <a style={{ padding: 70 }}>Torneos</a>
        <a style={{ padding: 70 }}>Equipo</a>
        <a style={{ padding: 70 }}>Calendario</a>
        <a style={{ padding: 70 }}>Estadisticas</a>
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

export default Header;
