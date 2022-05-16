CREATE TABLE cancha(
  id_cancha INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  deportivo_id INT NOT NULL,
  numero int NOT NULL,
  nombre VARCHAR(100) NOT NULL
);

ALTER TABLE cancha ADD CONSTRAINT Fk_cancha_deportivo_id FOREIGN KEY (deportivo_id) REFERENCES deportivo(id_deportivo) ON UPDATE NO ACTION ON DELETE NO ACTION;
