//  import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

export default function UserIconComponent() {
  return (
    <div className="usericondiv">
      <FontAwesomeIcon
        icon={faUserPen}
        style={{ width: "100px" }}
        className="usericon"
      />
    </div>
  );
}
