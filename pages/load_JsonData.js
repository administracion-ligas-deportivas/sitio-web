const estados = [];

function EstadosJSON() {
  let id = 1;
  fetch("../database/datos/estados.json")
    .then(function (res) {
      // console.log(res);
      return res.json();
    })
    .then(function (data) {
      let sql = "INSERT INTO estado (id_estado, nombre) VALUES";
      data.forEach((element) => {
        sql += ` (${id}, '${element.nombre}'),  \n`;
        estados.push({ id, nombre: element.nombre, mun: [] });
        id += 1;
      });
      sql += ";";
      console.log(sql);
      // console.log(estados);
    });
}

function MunicipiosJSON() {
  let id = 1;
  /* console.log("Crear municipios\n")
    console.log(estados); */
  fetch("../database/datos/municipios.json")
    .then(function (res) {
      // console.log(res);
      return res.json();
    })
    .then(function (data) {
      let sql = "";
      data.forEach((element) => {
        sql += `Municipio: ${element.state_id} - Nombre: ${element.name}; \n`;
        const muni = {
          estado_id: element.state_id,
          municipio_nombre: element.name,
        };
        // console.log(muni);
        const estadoActual = estados.find(
          (estadoActualA) => estadoActualA.id === id,
        );
        estadoActual.mun.push(muni);
        id = element.state_id;
      });
      console.log(sql);
      // console.log(estados);
    });
}

function crearSentenciaMunicipios() {
  let sql = "INSERT INTO municipio (estado_id, nombre) VALUES ";
  estados.forEach((element) => {
    element.mun.forEach((municipioActual) => {
      sql += `(${municipioActual.estado_id}, '${municipioActual.municipio_nombre}'), \n`;
    });
  });
  console.log(sql);
}

document.getElementById("estados").addEventListener("click", EstadosJSON);
document.getElementById("municipios").addEventListener("click", MunicipiosJSON);
document
  .getElementById("SLQmunicipios")
  .addEventListener("click", crearSentenciaMunicipios);
