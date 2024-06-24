document.addEventListener("DOMContentLoaded", function () {

const btnInsertar = document.querySelector('#boton-insertar')

fetch("http://localhost:5501/getAll")
.then((response) => response.json())
.then((data) => {loadTable(data["data"])});

function insertUser(nombre){
  fetch('http://localhost:5501/insert', {
    
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      nombre : nombre
    })
  })
  .then(response => response.json())
  .then(data => {
    
      location.reload();
    
  })

} 

btnInsertar.onclick = function(){
    const nombre = document.querySelector('#nombre-insertar');
    insertUser(nombre.value)
    
  }


  function loadTable(data) {
    
    const table = document.querySelector("#tableiti tbody");
    const tableAgro = document.querySelector("#tableagro tbody");
    const tableGec = document.querySelector("#tablegec tbody");
    const tableIg = document.querySelector("#tableig tbody");

    console.log(data);
   
    if (data.length === 0) {
      table.innerHTML += `
    <tr><td class='no-data' colspan='5'> no data </td></tr>
    `;
      return;
    }
    let tablehtml = "";
    data.forEach(function ({
      nombre,
      puntuacion_logico,
      puntuacion_matematico,
      puntuacion_idioma,
    }) {
     
      tablehtml += "<tr>";
      tablehtml += `<td> ${nombre} </td>`;
      tablehtml += `<td> ${puntuacion_logico} </td>`;
      tablehtml += `<td> ${puntuacion_matematico} </td>`;
      tablehtml += `<td> ${puntuacion_idioma} </td>`;
      tablehtml += "</tr>";
    });

    let tablehtmlAgro = "";
    data.forEach(function ({
      nombre,
      agro_puntuacion_ar,
      agro_puntuacion_ci,
      agro_puntuacion_ig,
      agro_puntuacion_mt
    }) {
      
      tablehtmlAgro += "<tr>";
      tablehtmlAgro += `<td> ${nombre} </td>`;
      tablehtmlAgro += `<td> ${agro_puntuacion_ar} </td>`;
      tablehtmlAgro += `<td> ${agro_puntuacion_ci} </td>`;
      tablehtmlAgro += `<td> ${agro_puntuacion_ig} </td>`;
      tablehtmlAgro += `<td> ${agro_puntuacion_mt} </td>`;
      tablehtmlAgro += "</tr>";
    });

    let tablehtmlGec = "";
    data.forEach(function ({
      nombre,
      gec_puntuacion_at
    }) {
     
      tablehtmlGec += "<tr>";
      tablehtmlGec += `<td> ${nombre} </td>`;
      tablehtmlGec += `<td> ${gec_puntuacion_at} </td>`;
      tablehtmlGec += "</tr>";
    });

    let tablehtmlIg = "";
    data.forEach(function ({
      nombre,
      ext_puntuacion_lg
    }) {
     
      tablehtmlIg += "<tr>";
      tablehtmlIg += `<td> ${nombre} </td>`;
      tablehtmlIg += `<td> ${ext_puntuacion_lg} </td>`;
      tablehtmlIg += "</tr>";
    });
    
    table.innerHTML = tablehtml;
    tableAgro.innerHTML = tablehtmlAgro;
    tableGec.innerHTML = tablehtmlGec;
    tableIg.innerHTML = tablehtmlIg;

  }
});
