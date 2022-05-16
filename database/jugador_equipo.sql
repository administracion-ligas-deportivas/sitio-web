create TABLE jugador_equipo(
  id_jugador_equipo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  equipo_id INT NOT NULL
);

ALTER TABLE jugador_equipo ADD CONSTRAINT Fk_JugadorEquipo_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE jugador_equipo ADD CONSTRAINT Fk_JugadorEquipo_equipo_id FOREIGN KEY (equipo_id) REFERENCES equipo(id_equipo) ON DELETE NO ACTION ON UPDATE NO ACTION;