CREATE TABLE usuario_rol(
  id_usuario_rol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rol_id INT NOT NULL,
  usuario_id INT NOT NULL
);

ALTER TABLE usuario_rol ADD CONSTRAINT Fk_usuarioRol_rol_id FOREIGN KEY (rol_id) REFERENCES rol(id_rol) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE usuario_rol ADD CONSTRAINT Fk_usuarioRol_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario) ON DELETE NO ACTION ON UPDATE NO ACTION;
