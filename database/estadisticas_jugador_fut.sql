CREATE TABLE estadisticas_jugador_futbol(
  id_estadisticas_jugador_futbol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  jugador_id INT NOT NULL,
  partido_id INT NOT NULL,
  goles TINYINT NOT NULL,
  tarjetas_amarillas TINYINT NOT NULL,
  tarjetas_rojas TINYINT NOT NULL,
  fuera_de_lugar TINYINT NOT NULL
);

ALTER TABLE estadisticas_jugador_futbol ADD CONSTRAINT Fk_EstadisticasJugadorFut_jugador_id FOREIGN KEY (jugador_id) REFERENCES usuario(id_usuario) ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE estadisticas_jugador_futbol ADD CONSTRAINT Fk_EstadisticasJugadorFut_partido_id FOREIGN KEY (partido_id) REFERENCES partido(id_partido) ON UPDATE NO ACTION ON DELETE NO ACTION;
