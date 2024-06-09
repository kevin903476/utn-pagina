document.addEventListener("DOMContentLoaded", function () {
    const btnCargar_riego = document.querySelector("#enviar-riego");
    const btnCargar_ciencias = document.querySelector("#enviar-ciencias");
    const btnCargar_ig = document.querySelector("#enviar-ig");
   
  
    if (btnCargar_riego) {
        btnCargar_riego.onclick = function () {
      
        const numero_riego = document.querySelector("#resultado-riego");
        const nombre_riego = document.querySelector("#nombre-insertar-riego").value;
        const resultado_riego = numero_riego.textContent;
    
        fetch("http://localhost:5501/updateAPAR", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            agro_puntuacion_ar: resultado_riego,
            nombre: nombre_riego,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
                alert();
              btnCargar_riego.classList.add('presionado')
              btnCargar_riego.classList.add('no-hover')
              btnCargar_riego.innerHTML = 'enviado'
              //location.reload();
            }
          });
      };
    }
  
    if (btnCargar_ciencias) {
      btnCargar_ciencias.onclick = function () {
        const numero_ciencias = document.querySelector("#resultado-ci");
        const nombre_ciencias = document.querySelector("#nombre-insertar-ci").value;
        const resultado_ciencias = numero_ciencias.textContent;
    
        fetch("http://localhost:5501/updateAPCI", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            agro_puntuacion_ci: resultado_ciencias,
            nombre: nombre_ciencias,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
                btnCargar_ciencias.classList.add('presionado')
                btnCargar_ciencias.classList.add('no-hover')
                btnCargar_ciencias.innerHTML = 'enviado'
              //location.reload();
            }
          });
      };
    }
   if (btnCargar_ig) {
    btnCargar_ig.onclick = function () {
        const numero = document.querySelector("#resultado-ig");
        const nombre = document.querySelector("#nombre-insertar-ig").value;
        const resultado = numero.textContent;
      
    
        fetch("http://localhost:5501/updateAPIG", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            agro_puntuacion_ig: resultado,
            nombre: nombre,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
                btnCargar_ig.classList.add('presionado')
                btnCargar_ig.classList.add('no-hover')
                btnCargar_ig.innerHTML = 'enviado'
              //location.reload();
            }
          });
      };
    
    }
   
  });
  