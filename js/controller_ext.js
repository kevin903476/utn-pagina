document.addEventListener("DOMContentLoaded", function () {
    const btnCargar_im = document.querySelector("#enviar-im");
    
  
  
    
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
              btnCargar_im.classList.add('presionado')
              btnCargar_im.classList.add('no-hover')
              btnCargar_im.innerHTML = 'enviado'
              //location.reload();
            }
          });
      };
    }
   
  
  });
  