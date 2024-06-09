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
app.patch('/updatePLG', (request , response) => {
    const {puntuacion_logico, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNamePLG(puntuacion_logico,nombre);
    console.log(puntuacion_logico)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})
app.patch('/updatePMT', (request , response) => {
    const {puntuacion_matematico, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNamePMT(puntuacion_matematico,nombre);
    console.log(puntuacion_matematico)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})
app.patch('/updatePIM', (request , response) => {
    const {puntuacion_idioma, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNamePIM(puntuacion_idioma,nombre);
    console.log(puntuacion_idioma)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})
app.patch('/updateAPAR', (request , response) => {
    const {agro_puntuacion_ar, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNameAPAR(agro_puntuacion_ar,nombre);
    console.log(agro_puntuacion_ar)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})
app.patch('/updateAPCI', (request , response) => {
    const {agro_puntuacion_ci, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNameAPCI(agro_puntuacion_ci,nombre);
    console.log(agro_puntuacion_ci)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})

app.patch('/updateAPIG', (request , response) => {
    const {agro_puntuacion_ig, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNameAPIG(agro_puntuacion_ig,nombre);
    console.log(agro_puntuacion_ig)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})

app.patch('/updateAPMT', (request , response) => {
    const {agro_puntuacion_mt, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNameAPMT(agro_puntuacion_mt,nombre);
    console.log(agro_puntuacion_mt)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})
//delete

app.listen(process.env.PORT, () => console.log("app is running"))