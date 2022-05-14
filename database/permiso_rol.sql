CREATE TABLE permiso_rol(
  id_permiso_rol INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rol_id INT NOT NULL,
  permiso_id INT NOT NULL
);

ALTER TABLE permiso_rol ADD CONSTRAINT Fk_permisoRol_rol_id FOREIGN KEY (rol_id) REFERENCES rol(id_rol) ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE permiso_rol ADD CONSTRAINT Fk_permisoRol_permiso_id FOREIGN KEY (permiso_id) REFERENCES permiso(id_permiso) ON DELETE NO ACTION ON UPDATE NO ACTION;