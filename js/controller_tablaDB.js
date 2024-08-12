document.addEventListener("DOMContentLoaded", function () {


  fetch("https://api-utn.up.railway.app/getCarreraITI")
    .then((response) => response.json())
    .then((data) => {
      cargarTablaITI(data["data"]);
    });
  fetch("https://api-utn.up.railway.app/getCarreraAGRO")
    .then((response) => response.json())
    .then((data) => {
      cargarTablaAGRO(data["data"]);
    });
  fetch("https://api-utn.up.railway.app/getCarreraGEC")
    .then((response) => response.json())
    .then((data) => {
      cargarTablaGEC(data["data"]);
    });
  fetch("https://api-utn.up.railway.app/getCarreraILE")
    .then((response) => response.json())
    .then((data) => {
      cargarTablaILE(data["data"]);
    });

  function cargarTablaITI(data) {
    const table = document.querySelector("#tableiti tbody");
    if (data.length === 0) {
      table.innerHTML += `
    <tr><td class='no-data' colspan='6'> no data </td></tr>
    `;
      return;
    }
    let tablehtml = "";
    data.forEach(function ({
      email,
      puntuacion_logico,
      puntuacion_progra,
      puntuacion_idioma,
      puntuacion_matematico,
      promedio,
      fecha_formateada,
    }) {
      tablehtml += "<tr>";
      tablehtml += `<td> ${email} </td>`;
      tablehtml += `<td> ${puntuacion_logico} </td>`;
      tablehtml += `<td> ${puntuacion_progra} </td>`;
      tablehtml += `<td> ${puntuacion_idioma} </td>`;
      tablehtml += `<td> ${puntuacion_matematico} </td>`;
      tablehtml += `<td> ${promedio} </td>`;
      tablehtml += `<td> ${fecha_formateada} </td>`;
      tablehtml += "</tr>";
    });
    table.innerHTML = tablehtml;
  }

  function cargarTablaAGRO(data) {
    const table = document.querySelector("#tableagro tbody");

    if (data.length === 0) {
      table.innerHTML += `
        <tr><td class='no-data' colspan='6'> no data </td></tr>
      `;
      return;
    }
    let tablehtml = "";
    data.forEach(function ({
      email,
      puntuacion_agro,
      puntuacion_ciencias,
      puntuacion_ingles,
      puntuacion_mate,
      promedio,
      fecha_formateada,
    }) {
      tablehtml += "<tr>";
      tablehtml += `<td> ${email} </td>`;
      tablehtml += `<td> ${puntuacion_agro} </td>`;
      tablehtml += `<td> ${puntuacion_ciencias} </td>`;
      tablehtml += `<td> ${puntuacion_ingles} </td>`;
      tablehtml += `<td> ${puntuacion_mate} </td>`;
      tablehtml += `<td> ${promedio} </td>`;
      tablehtml += `<td> ${fecha_formateada} </td>`;
      tablehtml += "</tr>";
    });
    table.innerHTML = tablehtml;
  }
  function cargarTablaGEC(data) {
    const table = document.querySelector("#tablegec tbody");

    if (data.length === 0) {
      table.innerHTML += `
        <tr><td class='no-data' colspan='6'> no data </td></tr>
      `;
      return;
    }
    let tablehtml = "";
    data.forEach(function ({
      email,
      puntuacion_act,
      promedio,
      fecha_formateada,
    }) {
      tablehtml += "<tr>";
      tablehtml += `<td> ${email} </td>`;
      tablehtml += `<td> ${puntuacion_act} </td>`;
      tablehtml += `<td> ${promedio} </td>`;
      tablehtml += `<td> ${fecha_formateada} </td>`;
      tablehtml += "</tr>";
    });
    table.innerHTML = tablehtml;
  }
  function cargarTablaILE(data) {
    const table = document.querySelector("#tableig tbody");

    if (data.length === 0) {
      table.innerHTML += `
        <tr><td class='no-data' colspan='6'> no data </td></tr>
      `;
      return;
    }
    let tablehtml = "";
    data.forEach(function ({
      email,
      puntuacion_idioma,
      promedio,
      fecha_formateada,
    }) {
      tablehtml += "<tr>";
      tablehtml += `<td> ${email} </td>`;
      tablehtml += `<td> ${puntuacion_idioma} </td>`;
      tablehtml += `<td> ${promedio} </td>`;
      tablehtml += `<td> ${fecha_formateada} </td>`;
      tablehtml += "</tr>";
    });
    table.innerHTML = tablehtml;
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
      Fecha,
    }) {
      let promedio =
        (puntuacion_logico + puntuacion_matematico + puntuacion_idioma) / 3;
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
      Fecha,
    }) {
      let promedio =
        (agro_puntuacion_ar +
          agro_puntuacion_ci +
          agro_puntuacion_ig +
          agro_puntuacion_mt) /
        4;
      tablehtmlAgro += "<tr>";
      tablehtmlAgro += `<td> ${nombre} </td>`;
      tablehtmlAgro += `<td> ${email} </td>`;

      tablehtmlAgro += `<td> ${promedio.toFixed(2)} </td>`;
      tablehtmlAgro += `<td> ${new Date(Fecha).toLocaleDateString()} </td>`;
      tablehtmlAgro += "</tr>";
    });

    data.forEach(function ({
      nombre,
      email,
      carrera,
      gec_puntuacion_at,
      Fecha,
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
      Fecha,
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
