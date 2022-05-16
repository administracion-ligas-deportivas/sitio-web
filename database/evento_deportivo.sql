CREATE TABLE evento_deportivo(
  id_evento_deportivo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  organizador_id INT NOT NULL,
  formato_evento_deportivo_id INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL
);

ALTER TABLE evento_deportivo ADD CONSTRAINT Fk_EventoDeportivo_organizador_id FOREIGN KEY (organizador_id) REFERENCES usuario(id_usuario) ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE evento_deportivo ADD CONSTRAINT Fk_EventoDeportivo_formato_evento_deportivo_id FOREIGN KEY (formato_evento_deportivo_id) REFERENCES formato_evento_deportivo(id_formato_evento_deportivo) ON DELETE NO ACTION ON UPDATE NO ACTION;