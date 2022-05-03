import Image from "next/image";
import myimg from "../../public/football-generic.jpg";

// pj = partidos jugados, pg = partidos ganados, pp = partidos perdidos
// pe = partidos empatados, nj = numero de jugadores //

export default function SingleStatComponent({ pj, pg, pp, pe, nj }) {
  return (
    <section className="singlestat">
      <div>
        <h2>Estadísticas</h2>
        <div className="singlestatpp">
          <p>Partidos jugados</p> <p>{pj}</p>
        </div>
        <div className="singlestatpp">
          <p>Partidos ganados</p> <p>{pg}</p>
        </div>
        <div className="singlestatpp">
          <p>Partidos perdidos</p> <p>{pp}</p>
        </div>
        <div className="singlestatpp">
          <p>Partidos empatados</p> <p>{pe}</p>
        </div>
        <div className="singlestatpp">
          <p>Número de jugadores</p> <p>{nj}</p>
        </div>
        <Image src={myimg} width="229px" height="175px" />
      </div>
    </section>
  );
}
