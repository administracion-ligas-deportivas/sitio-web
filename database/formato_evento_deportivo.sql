CREATE TABLE formato_evento_deportivo(
  id_formato_evento_deportivo INT NOT NULL PRIMARY KEY,
  deporte_id INT NOT NULL,
  tipo_evento_deportivo_id INT NOT NULL,
  nombre VARCHAR(60) NOT NULL,
  descripcion TEXT NOT NULL,
  max_equipos TINYINT NOT NULL
);

ALTER TABLE formato_evento_deportivo ADD CONSTRAINT Fk_FormatoEventoDeportivo_deporte_id FOREIGN KEY (deporte_id) REFERENCES deporte(id_deporte) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE formato_evento_deportivo ADD CONSTRAINT Fk_FormatoEventoDeportivo_tipo_evento_deportivo_id Foreign KEY (tipo_evento_deportivo_id) REFERENCES tipo_evento_deportivo(id_tipo_evento_deportivo) ON DELETE NO ACTION ON UPDATE NO ACTION;