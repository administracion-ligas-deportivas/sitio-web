import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/Footer.module.css";

library.add(faFacebook, faInstagram, faTwitter);

export default function FooterComponent() {
  return (
    <div className={styles.divfooter}>
      <div className={styles.divfooterdivicons}>
        <FontAwesomeIcon
          icon={faTwitter}
          className={styles.divfootericons}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.divfootericons}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className={styles.divfootericons}
        />
      </div>
      <div>
        <p>© Administración de Ligas Deportivas</p>
      </div>
      <div>
        <a href="next/link"> Contáctanos </a>
        <a href="next/link"> Acerca de </a>
      </div>
    </div>
  );
}
