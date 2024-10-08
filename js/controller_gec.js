document.addEventListener("DOMContentLoaded", function () {
    const btnCargar = document.querySelector("#enviar");
    
    const botonAct = document.querySelector("#openModalBtn");
  
    
    if (btnCargar) {
      btnCargar.onclick = function () {
        const numero = document.querySelector("#resultado");
        const nombre = localStorage.getItem("email");
        const resultado = numero.textContent;
    
        fetch("https://api-utn.up.railway.app/updateGCPA", {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            gec_puntuacion_at: resultado,
            email: nombre,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.sucess) {
              btnCargar.classList.add('presionado')
              btnCargar.classList.add('no-hover')
              btnCargar.innerHTML = 'enviado'
              
            }
          });
      };
    }
   
    if ( botonAct) {
      fetch('https://api-utn.up.railway.app/getUserGec', {
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
          
          if (data.data[0].puntuacion_act > -1) {
              botonAct.textContent = 'Deshabilitado'
              botonAct.classList.add('disabled');
          }
          if (data.data[0].puntuacion_act > -1 ) {
            document.querySelector("#caja-promedio").style.display = "block";
          }else{
            document.querySelector("#caja-promedio").style.display = "none";
          }
          
          
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
  
  });
  