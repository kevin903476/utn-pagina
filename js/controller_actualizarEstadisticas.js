document.addEventListener("DOMContentLoaded", function () {
    const btnActualizar= document.querySelector('#btn-actualizar');


  
    
    if (btnActualizar) {
        btnActualizar.onclick = function () {
          const carrera = document.querySelector("#carrera").value;
          const estudiantes = document.querySelector("#estudiantes").value;
          const graduados = document.querySelector("#graduados").value;
          const insercion = document.querySelector("#insercion").value;
   
          const resEstudiantes = estudiantes.textContent;
          const resGraduados = graduados.textContent;
          const resInsercion = insercion.textContent;
     
      
          fetch("https://api-utn.up.railway.app/updateEstadisticas", {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
                carrera: carrera,
                estudiantes:estudiantes,
                graduados:graduados,
                insercion:insercion,   
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.sucess) {
                btnActualizar.classList.add('presionado')
                btnActualizar.classList.add('no-hover')
                btnActualizar.innerHTML = 'actualizado'
                //location.reload();
              }
            });
        };
      }


})