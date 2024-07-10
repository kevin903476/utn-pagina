document.addEventListener("DOMContentLoaded", function () {
  const btnCargar_im = document.querySelector("#enviar-im");
  const btnCargar = document.querySelector("#enviar");
  const btnCargar_mt = document.querySelector("#enviar-mt");
  const btnCargar_progra = document.querySelector("#enviar-progra");

  const botonLogico = document.querySelector("#openModalBtn");
  const botonMate = document.querySelector("#openModalBtn2");
  const botonIdioma = document.querySelector("#openModalBtn3");
  const botonProgra = document.querySelector("#openModalBtn4");


  if (btnCargar_mt) {
    btnCargar_mt.onclick = function () {
    
      const numero_mate = document.querySelector("#resultado-mate");
      const nombre_mate = localStorage.getItem("email");
      const resultado_mate = numero_mate.textContent;
  
      fetch("http://localhost:5501/updatePMT", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_matematico: resultado_mate,
          email: nombre_mate,
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
  
  if (btnCargar_im) {
    btnCargar_im.onclick = function () {
      const numero_idioma = document.querySelector("#resultado-idioma");
      const nombre_idioma = localStorage.getItem("email");
      const resultado_idioma = numero_idioma.textContent;
  
      fetch("http://localhost:5501/updatePIM", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_idioma: resultado_idioma,
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
  if (btnCargar) {
    btnCargar.onclick = function () {
      const numero = document.querySelector("#resultado");
      const nombre = localStorage.getItem("email");
      const resultado = numero.textContent;
  
      fetch("http://localhost:5501/updatePLG", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_logico: resultado,
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
          }else{
            alert("error")
          }
        });
    };
  
  }
  if (btnCargar_progra) {
    btnCargar_progra.onclick = function () {
      const numero = document.querySelector("#resultado-progra");
      const nombre = localStorage.getItem("email");
      const resultado = numero.textContent;
  
      fetch("http://localhost:5501/updatePPG", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_progra: resultado,
          email: nombre,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.sucess) {
            btnCargar_progra.classList.add('presionado')
            btnCargar_progra.classList.add('no-hover')
            btnCargar_progra.innerHTML = 'enviado'
            //location.reload();
          }else{
            alert("error")
          }
        });
    };
  
  }


  if (botonLogico && botonMate && botonIdioma && botonProgra) {
      fetch('http://localhost:5501/getUserIti', {
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
          if (data.data[0].puntuacion_logico > -1) {
            botonLogico.textContent = 'Deshabilitado'
            botonLogico.classList.add('disabled');
          }
          if (data.data[0].puntuacion_matematico > -1) {

             botonMate.textContent = 'Deshabilitado'
             botonMate.classList.add('disabled');
          }
          if (data.data[0].puntuacion_idioma > -1) {
             botonIdioma.textContent = 'Deshabilitado'
             botonIdioma.classList.add('disabled');
          }
          if (data.data[0].puntuacion_progra > -1) {
             botonProgra.textContent = 'Deshabilitado'
             botonProgra.classList.add('disabled');
             
          }
          
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }
});
