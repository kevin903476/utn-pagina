

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
function isPartiallyOnFocus(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        rect.left < windowWidth &&
        rect.right > 0
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

    fetch("https://api-utn.up.railway.app/estadisticas-iti")
    .then((response) => response.json())
    .then((data) => {
        
        
        const estadisticas = data.data[0];
        //console.log(estadisticas)
        if (isPartiallyOnFocus(estudiantesITI) && !estudiantesCounter) {
            counter("estudiantes", 0, estadisticas.estudiantes);
            estudiantesCounter = true;
        }
        
        if (isPartiallyOnFocus(graduadosITI) && !graduadosCounter) {
            counter("graduados", 0, estadisticas.graduados);
            graduadosCounter = true;
            
        }
        
        if (isPartiallyOnFocus(insercionITI) && !insercionCounter) {
            
            counter("insercion", 0, estadisticas.insercion);
            insercionCounter = true;
            
        }

    });
    
} 

// Asociar el evento de desplazamiento a la función handleScroll
window.addEventListener("scroll", handleScroll);
