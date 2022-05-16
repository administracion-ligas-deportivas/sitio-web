CREATE TABLE anuncios_evento (
	id_anuncios_evento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  	evento_id INT NOT NULL,
  	prioridad INT NOT NULL,
  	descripcion TEXT NOT NULL
);

ALTER TABLE anuncios_evento ADD CONSTRAINT Fk_anunciosEvento_Evento_id FOREIGN KEY (evento_id) REFERENCES evento_deportivo(id_evento_deportivo) ON UPDATE NO ACTION ON DELETE NO ACTION;