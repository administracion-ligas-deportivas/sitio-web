CREATE TABLE estadisticas_jugador_baseball_softball(
  id_estadisticas_jugador_baseball_softball INT NOT NULL AUTO_INCREMENT	PRIMARY KEY,
  jugador_id INT NOT NULL,
  partido_id INT NOT NULL,
  homeruns TINYINT NOT NULL,
  bases_robadas TINYINT NOT NULL,
  carreras TINYINT NOT NULL
);

ALTER TABLE estadisticas_jugador_baseball_softball ADD CONSTRAINT Fk_EstadisticasJugadorBaseSoft_jugador_id FOREIGN KEY (jugador_id) REFERENCES usuario(id_usuario) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE estadisticas_jugador_baseball_softball ADD CONSTRAINT Fk_EstadisticasJugadorBaseSoft_partido_id FOREIGN KEY (partido_id) REFERENCES partido(id_partido) ON DELETE NO ACTION ON UPDATE NO ACTION;