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
