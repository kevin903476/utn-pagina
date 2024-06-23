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
    var estudiantes = document.querySelector("#estudiantes");
    var graduados = document.querySelector("#graduados");
    var insercion = document.querySelector("#insercion");

    
    if (isOnFocus(estudiantes) && !estudiantesCounter) {
        counter("estudiantes", 0, 105);
        estudiantesCounter = true;
    }
    
    if (isOnFocus(graduados) && !graduadosCounter) {
        counter("graduados", 0, 105);
        graduadosCounter = true;
        
    }
    
    if (isOnFocus(insercion) && !insercionCounter) {
        
        counter("insercion", 0, 90);
        insercionCounter = true;
        
    }
}

// Asociar el evento de desplazamiento a la función handleScroll
window.addEventListener("scroll", handleScroll);
