if (document.querySelector('#ejercicio-logico-iti')) {
    const botonLogico = document.querySelector('#ejercicio-logico-iti');

    if (localStorage.getItem("user") == "none") {
        
        botonLogico.addEventListener('click', function() {
            alert('Debes iniciar sesión antes de hacer un ejercicio');
            window.location.href = 'login.html';
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            // Redirige al usuario a la URL especificada
            window.location.href = 'Test_Logico.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-mate-iti')) {
    const botonLogico = document.querySelector('#ejercicio-mate-iti');

    if (localStorage.getItem("user") == "none") {
        
        botonLogico.addEventListener('click', function() {
            alert('Debes iniciar sesión antes de hacer un ejercicio');
            window.location.href = 'login.html';
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            // Redirige al usuario a la URL especificada
            window.location.href = 'TestMatematico.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-idioma-iti')) {
    const botonLogico = document.querySelector('#ejercicio-idioma-iti');

    if (localStorage.getItem("user") == "none") {
        
        botonLogico.addEventListener('click', function() {
            alert('Debes iniciar sesión antes de hacer un ejercicio');
            window.location.href = 'login.html';
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            // Redirige al usuario a la URL especificada
            window.location.href = 'Test_Idioma.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-progra-iti')) {
    const botonLogico = document.querySelector('#ejercicio-progra-iti');

    if (localStorage.getItem("user") == "none") {
        
        botonLogico.addEventListener('click', function() {
            alert('Debes iniciar sesión antes de hacer un ejercicio');
            window.location.href = 'login.html';
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            // Redirige al usuario a la URL especificada
            window.location.href = 'Test_Programacion.html';
        });
    
    }
}