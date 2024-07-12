

// Función para animar el conteo de números
function counter(id, start, end) {
    let current = start;
    // Incremento positivo o negativo dependiendo de si end es mayor o menor que start
    let increment = end > start ? 1 : -1;
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, 10);
}

// Función para verificar si el elemento está en la ventana visible
function isOnFocus(el) {
    // Obtener el tamaño y posición del elemento relativo a la ventana del navegador
    var rect = el.getBoundingClientRect();
    // Verificar si el elemento está completamente dentro de la ventana visible
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para manejar el evento de desplazamiento
 var estudiantesCounter = false;
var graduadosCounter = false;
var insercionCounter = false;
function handleScroll() {
    var estudiantesITI = document.querySelector("#estudiantes");
    var graduadosITI = document.querySelector("#graduados");
    var insercionITI = document.querySelector("#insercion");

    fetch("https://api-utn.up.railway.app/estadisticas-ig")
    .then((response) => response.json())
    .then((data) => {
        
        
        const estadisticas = data.data[0];
        //console.log(estadisticas)
        if (isOnFocus(estudiantesITI) && !estudiantesCounter) {
            counter("estudiantes", 0, estadisticas.estudiantes);
            estudiantesCounter = true;
        }
        
        if (isOnFocus(graduadosITI) && !graduadosCounter) {
            counter("graduados", 0, estadisticas.graduados);
            graduadosCounter = true;
            
        }
        
        if (isOnFocus(insercionITI) && !insercionCounter) {
            
            counter("insercion", 0, estadisticas.insercion);
            insercionCounter = true;
            
        }

    });
    
} 

// Asociar el evento de desplazamiento a la función handleScroll
window.addEventListener("scroll", handleScroll);
