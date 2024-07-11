document.addEventListener("DOMContentLoaded", function () {

  const btnInsertar = document.querySelector('#boton-insertar');

  fetch("https://api-utn.up.railway.app/getAll")
    .then((response) => response.json())
    .then((data) => { loadTable(data["data"]) });

  function insertUser(nombre, correo) {
    fetch('https://api-utn.up.railway.app/insert', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre,
        correo: correo
      })
    })
      .then(response => response.json())
      .then(data => {
        location.reload();
      })
  }

  btnInsertar.onclick = function () {
    const nombre = document.querySelector('#nombre-insertar');
    const correo = document.querySelector('#correo-insertar');
    insertUser(nombre.value, correo.value,fecha.value)
  }

  function loadTable(data) {
    const table = document.querySelector("#tableiti tbody");
    const tableAgro = document.querySelector("#tableagro tbody");
    const tableGec = document.querySelector("#tablegec tbody");
    const tableIg = document.querySelector("#tableig tbody");

    console.log(data);

    if (data.length === 0) {
      table.innerHTML += `
      <tr><td class='no-data' colspan='6'> no data </td></tr>
      `;
      return;
    }

    

    let tablehtml = "";
    let tablehtmlAgro = "";
    let tablehtmlGec = "";
    let tablehtmlIg = "";

    data.forEach(function ({
      nombre,
      email,
      carrera,
      puntuacion_logico,
      puntuacion_matematico,
      puntuacion_idioma,
      Fecha
    }) {
      let promedio = (puntuacion_logico + puntuacion_matematico + puntuacion_idioma) / 3;
      tablehtml += "<tr>";
      tablehtml += `<td> ${nombre} </td>`;
      tablehtml += `<td> ${email} </td>`;
   
      tablehtml += `<td> ${promedio.toFixed(2)} </td>`;
      tablehtml += `<td> ${new Date(Fecha).toLocaleDateString()} </td>`;
      
      tablehtml += "</tr>";
    });

    data.forEach(function ({
      nombre,
      email,
      carrera,
      agro_puntuacion_ar,
      agro_puntuacion_ci,
      agro_puntuacion_ig,
      agro_puntuacion_mt,
      Fecha
    }) {
      let promedio = (agro_puntuacion_ar + agro_puntuacion_ci + agro_puntuacion_ig + agro_puntuacion_mt) / 4;
      tablehtmlAgro += "<tr>";
      tablehtmlAgro += `<td> ${nombre} </td>`;
      tablehtmlAgro += `<td> ${email} </td>`;
  
      tablehtmlAgro += `<td> ${promedio.toFixed(2)} </td>`;
      tablehtmlAgro += `<td> ${new Date(Fecha).toLocaleDateString()} </td>`;
      tablehtmlAgro += "</tr>";
    })

    data.forEach(function ({
      nombre,
      email,
      carrera,
      gec_puntuacion_at,
      Fecha
    }) {
      let promedio = gec_puntuacion_at;
      tablehtmlGec += "<tr>";
      tablehtmlGec += `<td> ${nombre} </td>`;
      tablehtmlGec += `<td> ${email} </td>`;
    
      tablehtmlGec += `<td> ${promedio.toFixed(2)} </td>`;
      tablehtmlGec += `<td> ${new Date(Fecha).toLocaleDateString()} </td>`;
      tablehtmlGec += "</tr>";
    });

    data.forEach(function ({
      nombre,
      email,
      carrera,
      ext_puntuacion_lg,
      Fecha
    }) {
      let promedio = ext_puntuacion_lg;
      tablehtmlIg += "<tr>";
      tablehtmlIg += `<td> ${nombre} </td>`;
      tablehtmlIg += `<td> ${email} </td>`;
  
      tablehtmlIg += `<td> ${promedio.toFixed(2)} </td>`;
      tablehtmlIg += `<td> ${new Date(Fecha).toLocaleDateString()} </td>`;
      tablehtmlIg += "</tr>";
    });

    table.innerHTML = tablehtml;
    tableAgro.innerHTML = tablehtmlAgro;
    tableGec.innerHTML = tablehtmlGec;
    tableIg.innerHTML = tablehtmlIg;
  }
});
