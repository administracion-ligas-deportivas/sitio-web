import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

library.add(faFacebook, faInstagram, faTwitter);

export default function Footer() {
  return (
    <footer className={styles.divFooter}>
      <div className={styles.divFooterDivIcons}>
        <FontAwesomeIcon
          icon={faTwitter}
          className={styles.divFooterIcons}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.divFooterIcons}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className={styles.divFooterIcons}
        />
      </div>
      <div>
        <p>© Administración de Ligas Deportivas</p>
      </div>
      <div>
        <a href="next/link"> Contáctanos </a>
        <a href="next/link"> Acerca de </a>
      </div>
    </footer>
  );
}
