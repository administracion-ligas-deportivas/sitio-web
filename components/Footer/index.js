import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faTwitter);

export default function FooterComponent() {
  return (
    <div
      style={{
        alignitems: "center",
        background: "#1A1C9E",
        color: "white",
        display: "flex",
        fontFamily: "Helvetica",
        fontSize: 12,
        justifyContent: "space-between",
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          marginLeft: "50px",
          display: "flex",
        }}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ width: "20px", marginRight: "20px" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ width: "20px", marginRight: "20px" }}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ width: "20px", marginRight: "20px" }}
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "100px",
          justifyContent: "center",
        }}
      >
        © Administración de Ligas Deportivas
      </div>
      <div
        style={{
          margin: "20px",
        }}
      >
        <a
          style={{
            margin: "20px",
          }}
          href="next/link"
        >
          Contáctanos
        </a>
        <a
          style={{
            margin: "20px",
          }}
          href="next/link"
        >
          Acerca de
        </a>
      </div>
    </div>
  );
}
