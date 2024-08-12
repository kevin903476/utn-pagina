
const terminar = document.getElementById("terminar");

let correctas=[1,2,3,1,2,2,3,1,3,3];
let opcion_elegida = [];
let cantidad_correctas = 0;

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
    for (i = 0; i < correctas.length; i++) {
        if (correctas[i] == opcion_elegida[i]) {
            cantidad_correctas++;
        }
    }

    let mensaje = "";
    if (cantidad_correctas >= 1 && cantidad_correctas <= 4) {
        mensaje = "Esta carrera cuenta con 7 niveles de matemáticas, piénsalo bien";
    } else if (cantidad_correctas >= 5 && cantidad_correctas <= 7) {
        mensaje = "Tienes buena lógica, pero puedes mejorar";
    } else if (cantidad_correctas >= 8 && cantidad_correctas <= 10) {
        mensaje = "Tienes una excelente lógica, excelente trabajo";
    }
    else if (cantidad_correctas == 0) {
      mensaje = "Hay que seguir estudiando";
  }

    document.getElementById("resultado-idioma").innerHTML = cantidad_correctas;


    var preguntas = document.getElementsByClassName("pregunta");
    for (var i = 0; i < preguntas.length; i++) {
        preguntas[i].disabled = true;
    }

    
    


var modal = document.getElementById("miModal");

var spanCerrarModal = document.getElementsByClassName("cerrarModal")[0];



  modal.style.display = "block";


spanCerrarModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


terminar.classList.add('presionado')
  terminar.classList.add('no-hover')
  terminar.disabled = true

}

terminar.onclick = function(){
  corregir();
 
}


document.getElementById('enviar-im').addEventListener('click', function () {
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

           
            label.style.backgroundColor = '';
            label.style.color = '';

            
            if (labelIndex === correctIndex) {
                label.style.backgroundColor = 'green';
                label.style.color = 'white';
            } else if (input.checked && labelIndex !== correctIndex) {
                label.style.backgroundColor = 'red';
                label.style.color = 'white';
            }
            
            input.disabled = true; 
        });

        
        if (selectedInput && labels[correctIndex].querySelector('input').checked) {
            score++;
        }

        
        const correctAnswerElement = section.querySelector('.correct-answer');
        correctAnswerElement.textContent = `Respuesta correcta: ${labels[correctIndex].innerText}`;
    });

    document.getElementById('resultado-idioma').textContent = score;
});