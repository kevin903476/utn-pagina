const express = require('express' );
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');

dotenv.config();

const dbService = require('./dbService')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//create

app.post('/insertUser', async (request, response) =>{
    const {nombre, email, contra } = request.body;
    const db = dbService.getDbServiceInstance();
    let encriptada = await bcryptjs.hash(contra, 8)
    const result = db.insertUser(nombre,email,encriptada)

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
});

app.post('/insert', (request, response) =>{
    const {nombre } = request.body;
    const db = dbService.getDbServiceInstance();
    const result = db.insertNewUser(nombre)

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err))
});
//read
app.get('/getAll', async (request, response) => {
    try {
      const db = dbService.getDbServiceInstance();
  
      const data = await db.getAllData();
  
      response.json({ data: data });
    } catch (err) {
      console.log(err);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.get('/estadisticas-iti', (request, response) =>{
    const db = dbService.getDbServiceInstance();

    const result = db.EstadisticaEstudianteITI();
    
    result
    .then(data => response.json({data}))
    .catch(err => console.log(err)); 
});
app.get('/estadisticas-agro', (request, response) =>{
    const db = dbService.getDbServiceInstance();

    const result = db.estadisticasAgro();
    
    result
    .then(data => response.json({data}))
    .catch(err => console.log(err)); 
});
app.get('/estadisticas-ig', (request, response) =>{
    const db = dbService.getDbServiceInstance();

    const result = db.estadisticasIg();
    
    result
    .then(data => response.json({data}))
    .catch(err => console.log(err)); 
});
app.get('/estadisticas-gec', (request, response) =>{
    const db = dbService.getDbServiceInstance();

    const result = db.estadisticasGEC();
    
    result
    .then(data => response.json({data}))
    .catch(err => console.log(err)); 
});
app.post('/obtenerUser', (request, response) =>{
    const { email} = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.obtenerUsuario(email);
    
    result
    .then(data => response.json({data}))
    .catch(err => console.log(err)); 
});
app.post('/validarUser', async (request, response) => {
    const { email, contra } = request.body;
    const db = dbService.getDbServiceInstance();
    const result = await db.validarUser(email);

    if (result.length > 0) {
        const user = result[0];
        const compare = await bcryptjs.compare(contra, user.contra);

        if (compare) {
            response.json({ data: true });
        } else {
            response.json({ data: false });
        }
    } else {
        response.json({ data: false });
    }
});

//update
app.patch('/updatePLG', (request , response) => {
    const {puntuacion_logico, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNamePLG(puntuacion_logico,nombre);



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

app.patch('/updateEXPI', (request , response) => {
    const {ext_puntuacion_lg, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNameEXPI(ext_puntuacion_lg,nombre);
    console.log(ext_puntuacion_lg)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})

app.patch('/updateGCPA', (request , response) => {
    const {gec_puntuacion_at, nombre} =request.body
    const db = dbService.getDbServiceInstance();
    const result = db.updateByNameGCPA(gec_puntuacion_at,nombre);
    console.log(gec_puntuacion_at)
    console.log(nombre)


    result
    .then(data => response.json({sucess : data}))
    .catch(err => console.log(err))
})

//delete

app.listen(process.env.PORT, () => console.log("app is running"))