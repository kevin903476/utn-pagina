const terminar = document.getElementById("terminar");
let correctas=[1,3,1,3,3,2,1,2,3,3];

let opcion_elegida=[];

let cantidad_correctas=0;

function respuesta(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta] = seleccionada.value;

    id="p" + num_pregunta;

    labels=document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";
    labels[9].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor= "#006691";


}

function corregir(){
    cantidad_correctas = 0;
    for (i=0; i < correctas.length; i++){
        if(correctas[i] == opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    let mensaje = "";
    if (cantidad_correctas >= 1 && cantidad_correctas <= 4) {
        mensaje = "Esta carrera cuenta con 6 niveles de ingles, piénsalo bien";
    } else if (cantidad_correctas >= 5 && cantidad_correctas <= 7) {
        mensaje = "Tienes buen ingles, pero puedes mejorar";
    } else if (cantidad_correctas >= 8 && cantidad_correctas <= 10) {
        mensaje = "Tienes una excelente ingles, excelente trabajo";
    }
    else if (cantidad_correctas == 0) {
      mensaje = "Hay que seguir estudiando";
  }

    document.getElementById("resultado-idioma").innerHTML = cantidad_correctas;
    /* document.getElementById("mensaje").innerHTML = mensaje;
    mostrarRecomendaciones(); */

    var preguntas = document.getElementsByClassName("pregunta");
    for (var i = 0; i < preguntas.length; i++) {
        preguntas[i].disabled = true;
    }

  
//var btnAbrirModal = document.getElementById("abrirModal");

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
