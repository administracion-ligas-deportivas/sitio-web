CREATE TABLE deportivo(
  id_deportivo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  municipio_id int NOT NULL,-- Mantener tipos de datos correctos
  nombre VARCHAR(255) NOT NULL,
  calle VARCHAR(255) NOT NULL,
  colonia VARCHAR(255) NOT NULL,
  codigo_postal SMALLINT NOT NULL,
  numero_exterior Varchar(10) NOT NULL,
  numero_interior VARCHAR(10)
);

ALTER TABLE deportivo ADD CONSTRAINT Fk_municipio_de_deportivo_id FOREIGN KEY (municipio_id) REFERENCES municipio(id_municipio) ON DELETE NO ACTION ON UPDATE NO ACTION;
