const fs = require("fs");
const conexion = require("./conexion");
import {btnCargar} from "./controller_iti"


function crearJson(rows) {
  // Guardar el JSON en un archivo
  const jsonResults = JSON.stringify(rows, null, 2);
  fs.writeFile("data/carrera_iti.json", jsonResults, (err) => {
    if (err) {
      console.error("Error escribiendo el archivo JSON:", err);
      return;
    }
    console.log("Archivo JSON guardado correctamente");
  });
}

export class Carrera_iti {
  select() {
    conexion.query("SELECT * FROM carrera_iti", (err, rows) => {
      if (err) {
        throw err;
      } else {
        console.log("los datos de la tabla son estos");
        console.log(rows);
        crearJson(rows)
        console.log("entroe en la calse")
      }
      conexion.end();
    });
  }
  updateTestLogico(recomendacion, nombre) {
    conexion.query(
      `UPDATE carrera_iti SET recomendacion_logico = '${recomendacion}' WHERE nombre = '${nombre}'`,
      (err, rows) => {
        if (err) {
          throw err;
        } else {
          console.log("actualizado correctamente");
          console.log(rows);
        }
        conexion.end();
      }
    );
  }

  delete_register(nombre) {
    conexion.query(
      `DELETE FROM carrera_iti WHERE nombre = ${nombre}`,
      (err, rows) => {
        if (err) {
          throw err;
        } else {
          console.log("eliminado correctamente");
          console.log(rows);
        }
        conexion.end();
      }
    );
  }

  insert(nombre) {
    conexion.query(
      `INSERT INTO carrera_iti (nombre, test_logico, test_matematico, test_idioma) 
                        VALUES ('${nombre}',0,0,0)`,
      (err, rows) => {
        if (err) {
          throw err;
        } else {
          console.log("insertado correctamente");
          console.log(rows);
        }
        conexion.end();
      }
    );
  }

  doTestLogico(nombre) {
    conexion.query(
      `UPDATE carrera_iti SET test_logico = 1 WHERE nombre = ${nombre}`,
      (err, rows) => {
        if (err) {
          throw err;
        } else {
          console.log("actualizado correctamente");
          console.log(rows);
          test_logico = true;
        }
        conexion.end();
      }
    );
  }

  validateDoTesLogico() {
    alert("funca");
  }
}

btnCargar.addEventListener("click", () => {
    
    alert("ss")
});

/* const carrera_iti = new Carrera_iti();



carrera_iti.select(); */



/*
document.getElementById("resultados").addEventListener("click", function() {
    const carrera_iti = new Carrera_iti();
    carrera_iti.validateDoTesLogico();
    console.log("apapapapaap")
});
 */

// public/tabla.js
// Realiza una solicitud GET al servidor para obtener los datos de los empleados
/* document.addEventListener("DOMContentLoaded", function() {
    const dataContainer = document.getElementById("data-container");
    const loadDataBtn = document.getElementById("load-data-btn"); */
/* // Obtener el formulario y el contenedor de datos
    const form = document.getElementById("crud-form");
    

    // Cargar datos iniciales al cargar la página
    loadData();

    // Manejar el envío del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Realizar una solicitud POST al servidor para agregar un nuevo registro
        fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email })
        })
        .then(response => response.json())
        .then(data => {
            // Limpiar el formulario y cargar los datos actualizados
            form.reset();
            loadData();
        })
        .catch(error => console.error("Error:", error));
    }); */

// Función para cargar los datos desde el servidor y mostrarlos en la página
/* loadDataBtn.addEventListener("click", function() {
        loadData();
    });
    function loadData() {
        fetch("/api/read")
        .then(response => response.json())
        .then(data => { */
// Limpiar el contenedor de datos
/*             dataContainer.innerHTML = "";
 */
// Mostrar los datos en el contenedor
/*       data.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.innerHTML = `<strong>${item.nombre}</strong>`;
                dataContainer.appendChild(itemElement);
            });
        })
        .catch(error => console.error("Error:", error));
    }
});
 */
