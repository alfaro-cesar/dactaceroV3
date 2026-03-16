const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',      // En XAMPP el usuario siempre es root
  password: '',      // En XAMPP la contraseña suele estar VACÍA (déjalo así: '')
  database: 'proyecto_cero',
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool.promise();