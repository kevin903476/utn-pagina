
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
// Middleware para analizar las solicitudes JSON
//app.use(bodyParser.json());

// Manejar solicitud para crear un nuevo registro
/* app.post('/api/create', (req, res) => {
  const { name, email } = req.body;

  const sql = `INSERT INTO users (nombre, test_logico, test_matematico, test_idioma) VALUES (?, ?)`;
  connection.query(sql, [name, email], (error, results, fields) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'New record created successfully' });
  });
}); */

/* // Manejar solicitud para leer datos
app.get('/api/read', (req, res) => {
    // Realizar una consulta a la base de datos para obtener los datos
    const sql = 'SELECT * FROM carrera_iti';
  
    connection.query(sql, (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json(results);
    });
  });



  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Test_Logico.html'));
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 */