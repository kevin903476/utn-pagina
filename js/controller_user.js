function show(username) {
    let loginLink = document.querySelector("#login-link");
    let registerLink = document.querySelector("#register-link");
    let nameUser = document.querySelector("#name");
    let logueado = document.querySelector("#logueado");
    let logoutButton = document.querySelector("#logout-button");
    let titulo = document.querySelector("#titulo-inicio");

    if (nameUser && logoutButton) {
        nameUser.textContent = "¡Hola "+username+"! 👋";
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
document.addEventListener('DOMContentLoaded', function () {

    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("rol"));

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
            console.log(data);

            
                const userData = data.data[0];
                
                    localStorage.setItem("user", userData.nombre);
                    localStorage.setItem("rol", userData.rol);
                
            

            console.log('Success:', data);

            console.log(localStorage.getItem("user"));
            if (localStorage.getItem("user") !== "none") {
                show(localStorage.getItem("user"));
            }
            console.log(localStorage.getItem("rol"));
            if (localStorage.getItem("rol") === "1") {
                admin.style.display = "block";
            }

        })
        .catch((error) => {
            console.error('Error:', error);
        });


});

if (document.getElementById('userForm')) {
    document.getElementById('userForm').addEventListener('submit', function (event) {
        event.preventDefault();  

        const user = document.querySelector("#user").value;
        const correo = document.querySelector("#email").value;
        const pass = document.querySelector("#pass").value;
        const confirmpass=document.querySelector("#pass-confirm").value;
        const formData = new FormData(this);

        
        const data = Object.fromEntries(formData.entries());

       
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
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'El email ya existe ingresa otro',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        window.location.href = 'Registro.html';
                    });
                } else if(pass!==confirmpass){
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Las contraseñas no coinciden',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        window.location.href = 'Registro.html';
                    });
                }else {
                    sessionStorage.setItem('usuarioTemporal', user);
                    sessionStorage.setItem('correoTemporal', correo);
                    sessionStorage.setItem('contraTemporal', pass);
                    window.location.href = 'confirmarCorreo.html';
                    
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
}

if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const user = document.querySelector("#user").value;
        const pass = document.querySelector("#pass").value;

        
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


                    

                    this.submit();
                } else {

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
                Swal.fire({
                    icon: 'warning',
                    title: 'Error',
                    text: 'Error al tratar de iniciar sesion, intentalo más tarde.',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = 'login.html';
                });
            });


    });
}
