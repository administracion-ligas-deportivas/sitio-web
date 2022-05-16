import pool from "../../../config/db";

// Esta función permite convertir el bigint a json, así evita el error "TypeError: Do not know how to serialize a BigInt" que retorna si intentas poner un entero de Mariadb
function toJson(data) {
  return JSON.stringify(data, (_, v) =>
    typeof v === "bigint" ? `${v}n` : v,
  ).replace(/"(-?\d+)n"/g, (_, a) => a);
}

export default async function handler(req, res) {
  let funcReturn;
  switch (req.method) {
    case "GET":
      funcReturn = res.status(200).json("Getting users");
      break;
    case "POST":
      {
        const { nombre } = req.body;
        // Result no regresa un arreglo, sino un solo objeto (confirmar en casos con más de 1 dato a insertar)
        const result = await pool.query(
          "INSERT INTO estado (nombre) VALUE (?) ",
          nombre,
        );
        funcReturn = res
          .status(200)
          .json({ nombre, id: toJson(result.insertId) });
      }
      break;
    default:
      break;
  }
  return funcReturn;
  /* if (req.method === "POST") {
    console.log(req.body);
    result = res.status(200).json("Creando usuarios...");
  } else {
    result = res.status(200).json("Obteniendo usuarios...");
  } */
}
