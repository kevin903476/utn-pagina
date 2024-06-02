function corregir() {
    const nivel = document.getElementById('nivel')
    cantidad_correctas = nivel.value;
    

    let mensaje = "";
    if (cantidad_correctas >= 1 && cantidad_correctas <= 3) {
        mensaje = "En esta carrera la lógica es de lo más importante, piénsalo bien";
    } else if (cantidad_correctas >= 4 && cantidad_correctas <= 5) {
        mensaje = "Tienes buena lógica, pero puedes mejorar";
    } else if (cantidad_correctas >= 6 && cantidad_correctas <= 10) {
        mensaje = "Tienes una excelente lógica, excelente trabajo";
    }
    else if (cantidad_correctas == 0) {
      mensaje = "Hay que seguir estudiando";
  }

    
    document.getElementById("mensaje").innerHTML = mensaje;
    mostrarRecomendaciones();

    var preguntas = document.getElementsByClassName("pregunta");
    for (var i = 0; i < preguntas.length; i++) {
        preguntas[i].disabled = true;
    }

    // Desactiva el botón de corregir
    document.getElementById("resultados").disabled = true;

    var btnAbrirModal = document.getElementById("abrirModal");

    var modal = document.getElementById("miModal");

    var spanCerrarModal = document.getElementsByClassName("cerrarModal")[0];


    btnAbrirModal.onclick = function() {
    modal.style.display = "block";
    }

    spanCerrarModal.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

    function mostrarRecomendaciones() {
    var mensaje = document.getElementById("mensaje").textContent;
    document.getElementsByClassName("modal-cuerpo")[0].innerHTML = mensaje;
    }

}