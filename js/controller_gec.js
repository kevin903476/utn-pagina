document.addEventListener("DOMContentLoaded", function () {
    const btnCargar = document.querySelector("#enviar");
    
    const botonAct = document.querySelector("#openModalBtn");
  
    
    if (btnCargar) {
      btnCargar.onclick = function () {
        const numero = document.querySelector("#resultado");
        const nombre = localStorage.getItem("email");
        const resultado = numero.textContent;
    
        fetch("http://localhost:5501/updateGCPA", {
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
              //location.reload();
            }
          });
      };
    }
   
    if ( botonAct) {
      fetch('http://localhost:5501/getUserGec', {
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
          
          
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
  
  });
  