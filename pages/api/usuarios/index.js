export default function handler(req, res) {
  let result;
  if (req.method === "POST") {
    result = res.status(200).json("Creando usuarios...");
  } else {
    result = res.status(200).json("Obteniendo usuarios...");
  }

  return result;
}
