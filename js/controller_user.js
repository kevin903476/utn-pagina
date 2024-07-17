function show(username) {
    let loginLink = document.querySelector("#login-link");
    let registerLink = document.querySelector("#register-link");
    let nameUser = document.querySelector("#name");
    let logueado = document.querySelector("#logueado");
    let logoutButton = document.querySelector("#logout-button");
    let titulo = document.querySelector("#titulo-inicio");
  
    if (nameUser && logoutButton) {
        nameUser.textContent = username;
        logoutButton.style.display = "block";
        nameUser.style.display = "block";
        logueado.style.display = "block";
    }

    if (loginLink) loginLink.style.display = "none";
    if (registerLink) registerLink.style.display = "none";
    if (titulo) titulo.style.display = "none";
    localStorage.setItem("show", "true");
}




function out() {
    let loginLink = document.querySelector("#login-link");
    let registerLink = document.querySelector("#register-link");
    let nameUser = document.querySelector("#name");
    let logueado = document.querySelector("#logueado");
    let logoutButton = document.querySelector("#logout-button");
    let titulo = document.querySelector("#titulo-inicio");
  
    if (logoutButton) logoutButton.style.display = "none";
    if (nameUser) nameUser.style.display = "none";
    if (logueado) logueado.style.display = "none";
    if (loginLink) loginLink.style.display = "block";
    if (registerLink) registerLink.style.display = "block";
    if (titulo) titulo.style.display = "block";
    localStorage.setItem("user", "none");
    localStorage.setItem("email", "none");
    localStorage.setItem("rol", "0");

    window.location.reload();
}
let admin = document.querySelector("#caja-admin");
document.addEventListener('DOMContentLoaded', function() {

    localStorage.setItem("user", "none");
    localStorage.setItem("email", "none");
    localStorage.setItem("rol", "0");
    
    fetch('https://api-utn.up.railway.app/obtenerUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: localStorage.getItem("email")
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data) 
        localStorage.setItem("user", data.data[0].nombre);
        localStorage.setItem("rol", data.data[0].rol);
        console.log('Success:', data);

        console.log(localStorage.getItem("user"))
        if (localStorage.getItem("user") !== "none") {
            show(localStorage.getItem("user"))
        } 
        console.log(localStorage.getItem("rol"))
        if (localStorage.getItem("rol")==="1") {
            admin.style.display = "block";
        } 
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
        

});

if (document.getElementById('userForm')) {
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenir el envío del formulario por defecto
    
        const user = document.querySelector("#user").value;
        const correo = document.querySelector("#email").value;
        const pass = document.querySelector("#pass").value;
    
        const formData = new FormData(this);
    
        // Convertir FormData a un objeto para enviar con fetch
        const data = Object.fromEntries(formData.entries());

        // Comprobar si el correo ya existe en la base de datos
        fetch('https://api-utn.up.railway.app/obtenerUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: correo 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {  
                alert('El email ya existe, ingresa otro');
                window.location.href = 'Registro.html';
            } else {
                
                fetch('https://api-utn.up.railway.app/insertUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: user,
                        email: correo,
                        contra: pass,
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success', data);
                    
                    window.location.href = 'login.html';
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
}

 if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de manera convencional
        
        const user = document.querySelector("#user").value;
        const pass = document.querySelector("#pass").value;
        
        // Enviar los datos del formulario usando fetch
        fetch('https://api-utn.up.railway.app/validarUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user,
                contra: pass
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.data === true) {
                localStorage.setItem("email", user);
        
                
               /*  console.log(data.data[0]); */
               
                this.submit();
            } else {
                // Mostrar alerta si el inicio de sesión falló
                
                /* alert("Usuario o contraseña incorrectos. Por favor, intenta nuevamente."); */
                Swal.fire({
                    icon: 'warning',
                    title: 'Error',
                    text: 'El email o la contraseña son incorrectos',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = 'login.html';
                });
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error al intentar iniciar sesión. Por favor, intenta nuevamente.");
        });

       
    });
}
