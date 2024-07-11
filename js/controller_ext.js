document.addEventListener("DOMContentLoaded", function () {
    const btnCargar_im = document.querySelector("#enviar-ig");
    const botonIdioma = document.querySelector("#openModalBtn");
    
  
  
    
    if (btnCargar_im) {
      btnCargar_im.onclick = function () {
        const numero_idioma = document.querySelector("#resultado-idioma");
        const nombre_idioma = localStorage.getItem("email");
        const resultado_idioma = numero_idioma.textContent;
    
        fetch("https://api-utn.up.railway.app/updateEXPI", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ext_puntuacion_lg: resultado_idioma,
            email: nombre_idioma,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
              btnCargar_im.classList.add('presionado')
              btnCargar_im.classList.add('no-hover')
              btnCargar_im.innerHTML = 'enviado'
              //location.reload();
            }
          });
      };
    }
    
    if ( botonIdioma) {
      fetch('https://api-utn.up.railway.app/getUserExt', {
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
          
          if (data.data[0].puntuacion_idioma > -1) {
             botonIdioma.textContent = 'Deshabilitado'
             botonIdioma.classList.add('disabled');
          }
          
          
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
  
  });
  