CREATE TABLE equipo(
  id_equipo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  capitan_id INT NOT NULL,
  evento_deportivo_id INT NOT NULL,
  nombre VARCHAR(255) NOT NULL
);

ALTER TABLE equipo ADD CONSTRAINT Fk_capitan_id FOREIGN KEY (capitan_id) REFERENCES usuario(id_usuario) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE equipo ADD CONSTRAINT Fk_equipo_eventoid FOREIGN KEY (evento_deportivo_id) REFERENCES evento_deportivo(id_evento_deportivo) ON DELETE NO ACTION ON UPDATE NO ACTION;