document.addEventListener("DOMContentLoaded", function () {


  fetch("https://api-utn.up.railway.app/getPromedio")
    .then((response) => response.json())
    .then((data) => { loadTable(data["data"]) });

  

  function loadTable(data) {
    const table = document.querySelector("#table-promedio tbody");

    console.log(data);

    if (data.length === 0) {
      table.innerHTML += `
      <tr><td class='no-data' colspan='6'> no data </td></tr>
      `;
      return;
    }

    

    let tablehtml = "";
    

    data.forEach(function ({
      email,
      carrera,
      promedio,
      fecha_formateada,
      
    }) {
      tablehtml += "<tr>";
      tablehtml += `<td> ${email} </td>`;
      tablehtml += `<td> ${carrera} </td>`;
   
      tablehtml += `<td> ${promedio} </td>`;
      tablehtml += `<td> ${fecha_formateada} </td>`;
      
      tablehtml += "</tr>";
    });


    table.innerHTML = tablehtml;

  }
});
