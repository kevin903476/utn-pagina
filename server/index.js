const express = require('express' );
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//create
app.post('/insert', (request, response) =>{
    const {nombre } = request.body;
    const db = dbService.getDbServiceInstance();
    const result = db.insertNewUser(nombre)

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
});
//read
app.get('/getAll', (request, response) =>{
    const db = dbService.getDbServiceInstance();
    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err)); 
});
//update
app.patch('/update', (request , response) => {
    const {puntuacion_logico, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByName(puntuacion_logico,nombre);
    console.log(puntuacion_logico)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})
//delete

app.listen(process.env.PORT, () => console.log("app is running"))