
const terminar = document.getElementById("terminar");
let correctas = [3, 1, 3, 2, 2, 1, 3];

let opcion_elegida = [];


function respuesta(num_pregunta, seleccionada) {
  opcion_elegida[num_pregunta] = seleccionada.value;

  id = "p" + num_pregunta;

  labels = document.getElementById(id).childNodes;

  labels[3].style.backgroundColor = "White";
  labels[5].style.backgroundColor = "White";
  labels[7].style.backgroundColor = "White";

  seleccionada.parentNode.style.backgroundColor = "cec0fc";
}

function corregir() {
  
  cantidad_correctas = 0;
  doTestLogico = true;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
    }
  }

    let mensaje = "";
  if (cantidad_correctas >= 1 && cantidad_correctas <= 3) {
    mensaje =
      "Esta carrera cuenta con varias materias de programacion, piénsalo bien";
  } else if (cantidad_correctas >= 4 && cantidad_correctas <= 5) {
    mensaje = "Tienes buena lógica, pero puedes mejorar";
  } else if (cantidad_correctas >= 6 && cantidad_correctas <= 7) {
    mensaje = "Tienes una excelente lógica, excelente trabajo";
  } else if (cantidad_correctas == 0) {
    mensaje = "Hay que seguir estudiando";
  }

  document.getElementById("resultado").innerHTML = cantidad_correctas;
  /* document.getElementById("mensaje").innerHTML = mensaje;
  mostrarRecomendaciones(); */

  var preguntas = document.getElementsByClassName("pregunta");
  for (var i = 0; i < preguntas.length; i++) {
    preguntas[i].disabled = true;
  }



  var modal = document.getElementById("miModal");

  var spanCerrarModal = document.getElementsByClassName("cerrarModal")[0];

  
    modal.style.display = "block";
  

  spanCerrarModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Desactiva el botón de corregir
 
  terminar.classList.add('presionado')
  terminar.classList.add('no-hover')
  terminar.disabled = true
  
  
}


terminar.onclick = function(){
  corregir();
 
}

