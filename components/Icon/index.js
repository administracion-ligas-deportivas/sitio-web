//  import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Icon.module.css";

export default function UserIconComponent() {
  return (
    <div className={styles.usericondiv}>
      <FontAwesomeIcon
        icon={faUserPen}
        className={styles.usericon}
      />
    </div>
  );
}
