CREATE TABLE transaccion(
  id_transaccion INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  equipo_id INT NOT NULL,
  monto FLOAT NOT NULL,
  tipo_transaccion ENUM('Cobro', 'Pago') NOT NULL,
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  realizado TINYINT(1) NOT NULL
);

ALTER TABLE transaccion ADD CONSTRAINT Fk_Transaccion_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario) ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE transaccion ADD CONSTRAINT FK_Transaccion_Equipo_id FOREIGN KEY (equipo_id) REFERENCES equipo(id_equipo) ON UPDATE NO ACTION ON DELETE NO ACTION;