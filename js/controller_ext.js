document.addEventListener("DOMContentLoaded", function () {
    const btnCargar_im = document.querySelector("#enviar-idioma");
    
  
  
    
    if (btnCargar_im) {
      btnCargar_im.onclick = function () {
        const numero_idioma = document.querySelector("#resultado-idioma");
        const nombre_idioma = localStorage.getItem("user");
        const resultado_idioma = numero_idioma.textContent;
    
        fetch("http://localhost:5501/updateEXPI", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ext_puntuacion_lg: resultado_idioma,
            nombre: nombre_idioma,
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
   
  
  });
  