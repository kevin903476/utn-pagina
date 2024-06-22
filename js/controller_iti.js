document.addEventListener("DOMContentLoaded", function () {
  const btnCargar_im = document.querySelector("#enviar-im");
  const btnCargar = document.querySelector("#enviar");
  const btnCargar_mt = document.querySelector("#enviar-mt");


  if (btnCargar_mt) {
    btnCargar_mt.onclick = function () {
    
      const numero_mate = document.querySelector("#resultado-mate");
      const nombre_mate = localStorage.getItem("user");
      const resultado_mate = numero_mate.textContent;
  
      fetch("http://localhost:5501/updatePMT", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_matematico: resultado_mate,
          nombre: nombre_mate,
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
      const nombre_idioma = localStorage.getItem("user");
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
  if (btnCargar) {
    btnCargar.onclick = function () {
      const numero = document.querySelector("#resultado");
      const nombre = localStorage.getItem("user");
      const resultado = numero.textContent;
    
  
      fetch("http://localhost:5501/updatePLG", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          puntuacion_logico: resultado,
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
          }else{
            alert("error")
          }
        });
    };
  
  }

});
