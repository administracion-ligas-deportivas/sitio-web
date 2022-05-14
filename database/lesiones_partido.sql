CREATE TABLE lesiones_partido(
  id_lesiones_partido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  partido_id INT NOT NULL,
  lesionado_id INT NOT NULL,
  hora_lesion TIME NOT NULL,
  descripcion TEXT NOT NULL
);

ALTER TABLE lesiones_partido ADD CONSTRAINT Fk_LesionesPartido_partido_id FOREIGN KEY (partido_id) REFERENCES partido(id_partido) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE lesiones_partido ADD CONSTRAINT Fk_LesionesPartido_lesionado_id FOREIGN KEY (lesionado_id) REFERENCES usuario(id_usuario) ON UPDATE NO ACTION ON DELETE NO ACTION;