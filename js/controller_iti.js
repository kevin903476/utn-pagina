document.addEventListener("DOMContentLoaded", function () {
  const btnCargar_im = document.querySelector("#cargar-im");
  const btnCargar = document.querySelector("#cargar");
  const btnCargar_mt = document.querySelector("#cargar-mt");
  fetch("http://localhost:5501/getAll")
    .then((response) => response.json())
    .then((data) => loadTable(data["data"]));

  if (btnCargar_mt) {
    btnCargar_mt.onclick = function () {
    
      const numero_mate = document.querySelector("#resultado-mate");
      const nombre_mate = document.querySelector("#nombre-insertar-mt").value;
      const resultado_mate = numero_mate.textContent;
  
      fetch("http://localhost:5501/updatePMT", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_matematico: resultado_mate,
          nombre: nombre_mate,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.sucess) {
            location.reload();
          }
        });
    };
  }
  
  if (btnCargar_im) {
    btnCargar_im.onclick = function () {
      const numero_idioma = document.querySelector("#resultado-idioma");
      const nombre_idioma = document.querySelector("#nombre-insertar-im").value;
      const resultado_idioma = numero_idioma.textContent;
  
      fetch("http://localhost:5501/updatePIM", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_idioma: resultado_idioma,
          nombre: nombre_idioma,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.sucess) {
            location.reload();
          }
        });
    };
  }
  if (btnCargar) {
    btnCargar.onclick = function () {
      const numero = document.querySelector("#resultado");
      const nombre = document.querySelector("#nombre-insertar").value;
      const resultado = numero.textContent;
  
      fetch("http://localhost:5501/updatePLG", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_logico: resultado,
          nombre: nombre,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.sucess) {
            location.reload();
          }
        });
    };
  
  }
  
  function loadTable(data) {
    const newDiv = document.createElement("div");
    const contenido = document.querySelector("#contenido");
    const table = document.querySelector("table tbody");

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
      /* tablehtml += `
    <p> nombre ${nombre}</p>
    <p> puntuacion_logico ${puntuacion_logico}</p>
    <p> puntuacion_matematico ${puntuacion_matematico}</p>
    <p> puntuacion_idioma ${puntuacion_idioma}</p>
    <br>
    `; */
      tablehtml += "<tr>";
      tablehtml += `<td> ${nombre} </td>`;
      tablehtml += `<td> ${puntuacion_logico} </td>`;
      tablehtml += `<td> ${puntuacion_matematico} </td>`;
      tablehtml += `<td> ${puntuacion_idioma} </td>`;
      tablehtml += "</tr>";
    });
    /* newDiv.innerHTML = html;
  contenido.appendChild(newDiv); */
    table.innerHTML = tablehtml;
  }
});
