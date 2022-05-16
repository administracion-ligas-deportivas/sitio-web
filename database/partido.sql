CREATE TABLE partido (
  id_partido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  equipo_local_id INT NOT NULL,
  equipo_visitante_id INT NOT NULL,
  evento_deportivo_id INT NOT NULL,
  cancha_id INT NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  tiempo_regular TIME NOT NULL,
  tiempo_extra TIME,
  duracion_total TIME NOT NULL
);

ALTER TABLE partido ADD CONSTRAInt Fk_Partido_equipo_local_id FOREIGN KEY (equipo_local_id) REFERENCES equipo(id_equipo) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE partido ADD CONSTRAINT Fk_Partido_equipo_visitante_id  FOREIGN KEY (equipo_visitante_id) REFERENCES equipo(id_equipo) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE partido ADD CONSTRAINT Fk_Partido_evento_deportivo_id FOREIGN KEY (evento_deportivo_id) REFERENCES evento_deportivo(id_evento_deportivo) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE partido ADD CONSTRAINT Fk_Partido_cancha_id FOREIGN KEY (cancha_id) REFERENCES cancha(id_cancha) ON DELETE NO ACTION ON UPDATE NO ACTION;