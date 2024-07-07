const mysql = require('mysql');
let instance = null;
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('db '+ connection.state)
})

class DbService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }
    async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM carrera_iti";
        connection.query(query, async (err, results) => {
          if (err) reject(new Error(err.message));

          
          //Agarrar el campo email
          for (let i = 0; i < results.length; i++) {
            
            const usuarioQuery = `SELECT email FROM usuarios WHERE nombre = '${results[i].nombre}'`;
            const usuarioResult = await new Promise((resolve, reject) => {
              connection.query(usuarioQuery, (err, userResult) => {
                if (err) reject(new Error(err.message));
                resolve(userResult[0]?.email);
              });
            });

            //Agarrar el campo carrera
            const estadisticasQuery = `SELECT carrera FROM estadisticas WHERE id = '${results[i].id_estadistica}'`;
            const estadisticasResult = await new Promise((resolve, reject) => {
              connection.query(estadisticasQuery, (err, statsResult) => {
                if (err) reject(new Error(err.message));
                resolve(statsResult[0]?.nombre_carrera);
              });
            });

        
            results[i].email = usuarioResult;
            results[i].carrera = estadisticasResult;
          }

          resolve(results);
        });
      });

      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
    async EstadisticaEstudianteITI(){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT estudiantes,graduados,insercion FROM estadisticas WHERE carrera= 'carrera_iti'"
                connection.query(query, (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results);
                }) 
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async estadisticasGEC(){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT estudiantes,graduados,insercion FROM estadisticas WHERE carrera= 'carrera_gec'"
                connection.query(query, (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results);
                }) 
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async estadisticasIg(){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT estudiantes,graduados,insercion FROM estadisticas WHERE carrera= 'carrera_ig'"
                connection.query(query, (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results);
                }) 
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async estadisticasAgro(){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT estudiantes,graduados,insercion FROM estadisticas WHERE carrera= 'carrera_agro'"
                connection.query(query, (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results);
                }) 
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    
    async validarUser(name,contra){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM usuarios WHERE nombre = ? AND contra = ?";
                connection.query(query,[name,contra], (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results.length > 0);
                }) 
            });
            console.log(response);
            return response ;
        } catch (error) {
            console.log(error)
        }
    }
    async obtenerUsuario(user){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM usuarios WHERE nombre = ? ";
                connection.query(query,[user], (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results);
                }) 
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async insertUser(name,email,contra){
        try {
            const insertUser = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO usuarios (nombre,email,contra) VALUES (?,?,?)";
                connection.query(query,[name,email,contra], (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results.insertUser);
                }) 
            });

            return {
                nombre : name,
                email : email,
                contra : contra

            };
        } catch (error) {
            console.log(error)
        }
    }

    async insertNewUser(name,fecha){
        try {
            const insertUser = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO carrera_iti (nombre,Fecha) VALUES (?,?)";
                connection.query(query,[name], (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results.insertUser);
                }) 
            });

            return {
                nombre : name,
                fecha  : fecha
            };
        } catch (error) {
            console.log(error)
        }
    }

    async updateByNamePLG(puntuacion_logico, nombre,fecha){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET puntuacion_logico = ?, Fecha = CURRENT_DATE WHERE nombre = ?";
                connection.query(query, [puntuacion_logico, nombre,fecha],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    async updateByNamePMT(puntuacion_matematico, nombre,fecha){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET puntuacion_matematico = ?, Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_matematico, nombre,fecha],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    async updateByNamePIM(puntuacion_idioma, nombre,fecha){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET puntuacion_idioma = ?, Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_idioma, nombre,fecha],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    async updateByNameAPAR(puntuacion_ar, nombre,fecha){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_ar = ? , Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_ar, nombre,fecha],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async updateByNameAPCI(puntuacion_ci, nombre,fecha){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_ci = ? , Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_ci, nombre,fecha],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async updateByNameAPIG(puntuacion_ig, nombre,fecha){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_ig = ? , Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_ig, nombre,fecha],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async updateByNameAPMT(puntuacion_mt, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_mt =  ? , Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_mt, nombre],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async updateByNameEXPI(puntuacion_ig, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET ext_puntuacion_lg = ?, Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_ig, nombre],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async updateByNameGCPA(puntuacion_at, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET gec_puntuacion_at = ?, Fecha = CURRENT_DATE WHERE nombre = ?"
                connection.query(query, [puntuacion_at, nombre],(err , result)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                }) 
            });
            return response === 1 ? true : false;
            //return response;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}

module.exports = DbService;