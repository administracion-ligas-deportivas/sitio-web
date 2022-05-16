const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "da7a_Bas3",
  port: 3310,
  database: "ligas_deportivas",
});

export default pool;
