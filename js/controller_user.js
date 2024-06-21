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
                nombre: user,
                contra: pass
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.data === true) {
                
                
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
