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
    async getAllData(){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM carrera_iti"
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
            return response ;
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

    async insertNewUser(name){
        try {
            const insertUser = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO carrera_iti (nombre) VALUES (?)";
                connection.query(query,[name], (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(results.insertUser);
                }) 
            });

            return {
                nombre : name
            };
        } catch (error) {
            console.log(error)
        }
    }

    async updateByNamePLG(puntuacion_logico, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET puntuacion_logico = (?) WHERE nombre = ?"
                connection.query(query, [puntuacion_logico, nombre],(err , result)=>{
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
    async updateByNamePMT(puntuacion_matematico, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET puntuacion_matematico = (?) WHERE nombre = ?"
                connection.query(query, [puntuacion_matematico, nombre],(err , result)=>{
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
    async updateByNamePIM(puntuacion_idioma, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET puntuacion_idioma = (?) WHERE nombre = ?"
                connection.query(query, [puntuacion_idioma, nombre],(err , result)=>{
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
    async updateByNameAPAR(puntuacion_ar, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_ar = (?) WHERE nombre = ?"
                connection.query(query, [puntuacion_ar, nombre],(err , result)=>{
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

    async updateByNameAPCI(puntuacion_ci, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_ci = (?) WHERE nombre = ?"
                connection.query(query, [puntuacion_ci, nombre],(err , result)=>{
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

    async updateByNameAPIG(puntuacion_ig, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_ig = (?) WHERE nombre = ?"
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

    async updateByNameAPMT(puntuacion_mt, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET agro_puntuacion_mt = (?) WHERE nombre = ?"
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
                const query = "UPDATE carrera_iti SET ext_puntuacion_lg = (?) WHERE nombre = ?"
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
                const query = "UPDATE carrera_iti SET gec_puntuacion_at = (?) WHERE nombre = ?"
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