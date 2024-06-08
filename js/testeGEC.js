function calcularPuntuacion() {
    const preguntas = document.querySelectorAll('input[type="radio"]:checked');
    let totalPuntos = 0;
    
    preguntas.forEach(pregunta => {
        totalPuntos += parseInt(pregunta.value);
    });

    let interpretacion = "";
    
    if (totalPuntos >= 45 && totalPuntos <= 54) {
        interpretacion = "Tienes una gran aptitud para estudiar Bachillerato en Gestión Ecoturística. Posees las características, habilidades, intereses y experiencia necesarias para tener éxito en esta carrera. Tienes una clara comprensión de lo que implica el ecoturismo y estás motivado para trabajar en un campo que tenga un impacto positivo en el mundo.";
    } else if (totalPuntos >= 36 && totalPuntos <=44) {
        interpretacion = "Tienes algunas aptitudes para estudiar Bachillerato en Gestión Ecoturística. Posees algunas de las características, habilidades e intereses necesarios para tener éxito en esta carrera. Sin embargo, es posible que necesites desarrollar algunas habilidades adicionales o adquirir más experiencia antes de estar listo para comenzar tus estudios.";
    } else if(totalPuntos>=1 && totalPuntos <=35){
        interpretacion = "Es posible que estudiar Bachillerato en Gestión Ecoturística no sea la mejor opción para ti. No tienes algunas de las características, habilidades o intereses más importantes para tener éxito en esta carrera. Es importante que explores otras opciones de carrera que se ajusten mejor a tus intereses y habilidades.";
    }

    
    

    
    document.getElementById('mensaje').innerText = interpretacion;

    
    document.getElementById('miModal').style.display = "block";
    document.getElementById('resultado').innerText = `Puntuación total: ${totalPuntos} puntos`;

}


function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}


window.onclick = function(event) {
    if (event.target == document.getElementById('miModal')) {
        cerrarModal();
    }
}





var spanCerrarModal = document.getElementsByClassName("cerrarModal")[0];
if(spanCerrarModal){
    spanCerrarModal.onclick = function() {
        document.getElementById("miModal").style.display = "none";
    }
}
