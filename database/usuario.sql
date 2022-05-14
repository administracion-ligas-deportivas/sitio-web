CREATE TABLE usuario(
  id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  municipio_id INT NOT NULL,
  genero ENUM('Hombre', 'Mujer', 'Otro'),
  nombres VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  email VARCHAR(100) NOT NULL,
  email_recuperacion VARCHAR(100) NOT NULL,
  contrasenia VARCHAR(255) NOT NULL,
  calle VARCHAR(255) NOT NULL,
  colonia VARCHAR(255) NOT NULL, 
  codigo_postal SMALLINT NOT NULL,
  numero_exterior VARCHAR(10) NOT NULL,
  numero_interior VARCHAR(10),
  hora_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  
  ALTER TABLE usuario ADD CONSTRAINT Fk_municipio_id FOREIGN KEY (municipio_id) REFERENCES municipio(id_municipio) ON DELETE NO ACTION ON UPDATE NO ACTION;