const terminar = document.getElementById("terminar");

let correctas = [3,4,4,3,2,3,1,2];

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


  document.getElementById("resultado-mt").innerHTML = cantidad_correctas;
/*   document.getElementById("mensaje").innerHTML = mensaje;
  mostrarRecomendaciones(); */

  var preguntas = document.getElementsByClassName("pregunta");
  for (var i = 0; i < preguntas.length; i++) {
    preguntas[i].disabled = true;
  }


  //var btnAbrirModal = document.getElementById("abrirModal");

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

  function mostrarRecomendaciones() {
    var mensaje = document.getElementById("mensaje").textContent;
    document.getElementsByClassName("modal-cuerpo")[0].innerHTML = mensaje;
  }

  terminar.classList.add('presionado')
  terminar.classList.add('no-hover')
  terminar.disabled = true
}

terminar.onclick = function(){
  corregir();
 
}
document.getElementById('enviar-mt').addEventListener('click', function () {
  const sections = document.querySelectorAll('section');
  let score = 0;

  sections.forEach((section, index) => {
      const labels = section.querySelectorAll('label');
      const correctIndex = correctas[index] - 1; 
      let selectedInput = null;

      labels.forEach((label, labelIndex) => {
          const input = label.querySelector('input');
          
          if (input.checked) {
              selectedInput = input;
          }

          // Reiniciar estilos
          label.style.backgroundColor = '';
          label.style.color = '';

          // Marcar la respuesta correcta
          if (labelIndex === correctIndex) {
              label.style.backgroundColor = 'green';
              label.style.color = 'white';
          } else if (input.checked && labelIndex !== correctIndex) {
              label.style.backgroundColor = 'red';
              label.style.color = 'white';
          }
          //Desactiva los input
          input.disabled = true; 
      });

      // Incrementar puntaje si la respuesta seleccionada es la correcta
      if (selectedInput && labels[correctIndex].querySelector('input').checked) {
          score++;
      }

      // Mostrar respuesta correcta en el div
      const correctAnswerElement = section.querySelector('.correct-answer');
      correctAnswerElement.textContent = `Respuesta correcta: ${labels[correctIndex].innerText}`;
  });

  document.getElementById('resultado-mate').textContent = score;
});