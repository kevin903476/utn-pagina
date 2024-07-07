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
    localStorage.setItem("show", "false");
    localStorage.setItem("user", "none");
    localStorage.setItem("rol", "0");
    window.location.reload();
}
let admin = document.querySelector("#caja-admin");
document.addEventListener('DOMContentLoaded', function() {
    
        console.log(localStorage.getItem("user"))
        if (localStorage.getItem("user") !== "none") {
            show(localStorage.getItem("user"))
        } 
        console.log(localStorage.getItem("rol"))
        if (localStorage.getItem("rol")==="1") {
            admin.style.display = "block";
        } 
        /* fetch('http://localhost:5501/obtenerUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: localStorage.getItem("user")
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data) 
            if (data.data[0].rol === 1) {
                admin.style.display = "block";
            }
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        }); */
});

if (document.getElementById('userForm')) {
    

document.getElementById('userForm').addEventListener('submit', function(event) {
  
    const user = document.querySelector("#user").value;
    const correo = document.querySelector("#email").value;
    const pass = document.querySelector("#pass").value;
    // Crear un objeto FormData con los datos del formulario
    const formData = new FormData(this);

    // Convertir FormData a un objeto para enviar con fetch
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:5501/insertUser', {
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
        console.log('Success:', data);
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
        fetch('http://localhost:5501/validarUser', {
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

                fetch('http://localhost:5501/obtenerUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: user
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data) 
                    localStorage.setItem("user", data.data[0].nombre);
                    localStorage.setItem("rol", data.data[0].rol);
                    
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

               /*  console.log(data.data[0]); */
               
                this.submit();
            } else {
                // Mostrar alerta si el inicio de sesión falló
                
                alert("Usuario o contraseña incorrectos. Por favor, intenta nuevamente.");
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error al intentar iniciar sesión. Por favor, intenta nuevamente.");
        });

       
    });
 }
