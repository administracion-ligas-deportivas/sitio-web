/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-css-tags */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Jugador(playerName = "") {
  const name = "Nombre del jugador";
  return (
    <div
      style={{
        display: "flex",
        height: "auto",
        fontFamily: "Helvetica",
        fontSize: 18,
        margin: "auto",
      }}
    >
      <div>
        <a>{name}</a>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faUser}
          style={{ height: 15, margin: 5, marginLeft: 15 }}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ height: 15, margin: 5, marginLeft: 15 }}
        />
      </div>
    </div>
  );
}

export default Jugador;
