if (document.querySelector('#ejercicio-logico-iti')) {
    const botonLogico = document.querySelector('#ejercicio-logico-iti');

    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
    } else {
        botonLogico.addEventListener('click', function() {
            window.location.href = 'Test_Logico.html';
        });
    }
}

if (document.querySelector('#ejercicio-mate-iti')) {
    const botonLogico = document.querySelector('#ejercicio-mate-iti');

    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'TestMatematico.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-idioma-iti')) {
    const botonLogico = document.querySelector('#ejercicio-idioma-iti');

    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'Test_Idioma.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-progra-iti')) {
    const botonLogico = document.querySelector('#ejercicio-progra-iti');

    
    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'Test_Programacion.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-agro-agro')) {
    const botonLogico = document.querySelector('#ejercicio-agro-agro');

   
    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'EjercicioAgro.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-ci-agro')) {
    const botonLogico = document.querySelector('#ejercicio-ci-agro');

  
    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });

    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'EjercicioCiencias.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-en-agro')) {
    const botonLogico = document.querySelector('#ejercicio-en-agro');


    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });

    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'EjercicioEnglish.html';
        });
    
    }
}

if (document.querySelector('#ejercicio-mt-agro')) {
    const botonLogico = document.querySelector('#ejercicio-mt-agro');

    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'EjercicioMatematico.html';
        });
    
    }
}
if (document.querySelector('#ejercicio-ac-gec')) {
    const botonLogico = document.querySelector('#ejercicio-ac-gec');

 
    if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
        botonLogico.addEventListener('click', function() {
            Swal.fire({
                icon: 'warning',
                title: 'Inicia sesión',
                text: 'Debes iniciar sesión antes de hacer un ejercicio',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'login.html';
            });
        });
        
    } else {
        botonLogico.addEventListener('click', function() {
            
            window.location.href = 'TestActitudinal-GEC.html';
        });
    
    }
}


if (document.querySelector('#ejercicio-lg-ile')) {
    const botonIle = document.querySelector('#ejercicio-lg-ile');

    if (document.querySelector('#ejercicio-lg-ile')) {
        const botonIle = document.querySelector('#ejercicio-lg-ile');
    
        if (localStorage.getItem("user") == "none" || localStorage.getItem("user") == null) {
            
            botonIle.addEventListener('click', function() {
                Swal.fire({
                    icon: 'warning',
                    title: 'Inicia sesión',
                    text: 'Debes iniciar sesión antes de hacer un ejercicio',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = 'login.html';
                });
            });    
        
    } else {
        botonIle.addEventListener('click', function() {
            
            window.location.href = 'Test_LenguasExt.html';
        });
    
    }
}
}