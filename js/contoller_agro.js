document.addEventListener("DOMContentLoaded", function () {
    const btnCargar_riego = document.querySelector("#enviar-riego");
    const btnCargar_ciencias = document.querySelector("#enviar-ciencias");
    const btnCargar_ig = document.querySelector("#enviar-ig");
    const btnCargar_mt = document.querySelector("#enviar-mt");

    const botonAgro = document.querySelector("#openModalBtn");
    const botonCiencias = document.querySelector("#openModalBtn2");
    const botonIdioma = document.querySelector("#openModalBtn3");
    const botonMate = document.querySelector("#openModalBtn4");
   
  
    if (btnCargar_riego) {
        btnCargar_riego.onclick = function () {
      
        const numero_riego = document.querySelector("#resultado-riego");
        const nombre_riego = localStorage.getItem("email");
        const resultado_riego = numero_riego.textContent;
    
        fetch("http://localhost:5501/updateAPAR", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            agro_puntuacion_ar: resultado_riego,
            email: nombre_riego,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
               
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
        const nombre_ciencias = localStorage.getItem("email");
        const resultado_ciencias = numero_ciencias.textContent;
    
        fetch("http://localhost:5501/updateAPCI", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            agro_puntuacion_ci: resultado_ciencias,
            email: nombre_ciencias,
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
        const nombre = localStorage.getItem("email");
        const resultado = numero.textContent;
      
    
        fetch("http://localhost:5501/updateAPIG", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            agro_puntuacion_ig: resultado,
            email: nombre,
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
   if (btnCargar_mt) {
    btnCargar_mt.onclick = function () {
        const numero_mt = document.querySelector("#resultado-mt");
        const nombre_mt = localStorage.getItem("email");
        const resultado_mt = numero_mt.textContent;
      
    
        fetch("http://localhost:5501/updateAPMT", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            agro_puntuacion_mt: resultado_mt,
            email: nombre_mt,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
              btnCargar_mt.classList.add('presionado')
              btnCargar_mt.classList.add('no-hover')
              btnCargar_mt.innerHTML = 'enviado'
              //location.reload();
            }
          });
      };
    
    }


    if (botonAgro && botonMate && botonIdioma && botonCiencias) {
      fetch('http://localhost:5501/getUserAgro', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: localStorage.getItem("email")
          })
      })
      .then(response => response.json())
      .then(data => {
          console.log(data) 
          if (data.data[0].puntuacion_agro > -1) {
            botonAgro.textContent = 'Deshabilitado'
            botonAgro.classList.add('disabled');
          }
          if (data.data[0].puntuacion_mate > -1) {

             botonMate.textContent = 'Deshabilitado'
             botonMate.classList.add('disabled');
          }
          if (data.data[0].puntuacion_ingles > -1) {
             botonIdioma.textContent = 'Deshabilitado'
             botonIdioma.classList.add('disabled');
          }
          if (data.data[0].puntuacion_ciencias > -1) {
             botonCiencias.textContent = 'Deshabilitado'
             botonCiencias.classList.add('disabled');
             
          }
          
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
   
  });
  