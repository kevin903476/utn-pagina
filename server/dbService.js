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

    async insertNewUser(name){
        try {
            const insertUser = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO carrera_iti (nombre, test_logico, test_matematico, test_idioma) VALUES (?,0,0,0)";
                connection.query(query,[name], (err , results)=>{
                    if (err) reject(new Error(err.message));
                    resolve(result.insertUser);
                }) 
            });

            return {
                nombre : name
            };
        } catch (error) {
            console.log(error)
        }
    }

    async updateByName(puntuacion_logico, nombre){
        try {
            
            const response = await new Promise((resolve, reject)=>{
                const query = "UPDATE carrera_iti SET puntuacion_logico = (?) WHERE nombre = 'kevin'"
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
}

module.exports = DbService;