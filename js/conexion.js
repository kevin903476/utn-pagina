
const mysql = require('mysql');



// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: "localhost",
    database: "utn-test",
    user: "root",
    password: ""
});

// Conexión a la base de datos MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión establecida');
})




module.exports = connection
// 