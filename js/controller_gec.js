document.addEventListener("DOMContentLoaded", function () {
    const btnCargar = document.querySelector("#enviar");
    
  
  
    
    if (btnCargar) {
      btnCargar.onclick = function () {
        const numero = document.querySelector("#resultado");
        const nombre = localStorage.getItem("user");
        const resultado = numero.textContent;
    
        fetch("http://localhost:5501/updateGCPA", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            gec_puntuacion_at: resultado,
            nombre: nombre,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
              btnCargar.classList.add('presionado')
              btnCargar.classList.add('no-hover')
              btnCargar.innerHTML = 'enviado'
              //location.reload();
            }
          });
      };
    }
   
  
  });
  