CREATE TABLE equipo_puntaje_partido(
  id_equipo_puntaje_partido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  partido_id INT NOT NULL,
  equipo_id INT NOT NULL,
  puntos SMALLINT NOT NULL
);

ALTER TABLE equipo_puntaje_partido ADD CONSTRAINT Fk_EquipoPuntajePartido_partido_id FOREIGN KEY (partido_id) REFERENCES partido(id_partido) ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE equipo_puntaje_partido ADD CONSTRAINT Fk_EquipoPuntajePartido_equipo_id FOREIGN KEY (equipo_id) REFERENCES equipo(id_equipo) ON UPDATE NO ACTION ON DELETE NO ACTION;