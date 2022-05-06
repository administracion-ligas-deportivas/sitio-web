export default function handler(req, res) {
  console.log(`Obteniendo usuario:  ${req.query.id}`);
  return res.status(200).json({
    userId: req.query.id,
  });
}
