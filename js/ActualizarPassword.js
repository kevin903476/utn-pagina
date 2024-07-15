
document.addEventListener("DOMContentLoaded", function () {
    const validateEmailForm = document.getElementById('validateEmailForm');
    const changePasswordForm = document.getElementById('changePasswordForm');

    if (validateEmailForm) {
        validateEmailForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar el envío por defecto del formulario
        
            const email = document.getElementById('email').value;

            fetch('https://api-utn.up.railway.app/obtenerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la validación del usuario');
                }
                return response.json();
            })
            .then(data => {
                if (data.data && data.data.length > 0) {
                    // Si el correo existe, redirigir a la página para cambiar contraseña
                    window.location.href = 'cambiarContraseña.html?email=' + encodeURIComponent(email);
                } else {
                    alert('El correo electrónico ingresado no existe');
                    window.location.href = 'Registro.html';
                }
            })
            .catch(error => {
                console.error('Error al verificar el correo:', error);
                alert('Hubo un error al verificar el correo: ' + error.message);
            });
        });
    }

    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = decodeURIComponent(window.location.search.substr(1)).split("=")[1];
            const newPassword = document.querySelector('#pass').value;

            fetch("https://api-utn.up.railway.app/updatePassword", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    newPassword: newPassword
                }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la actualización de la contraseña');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    const btnActualizar = document.getElementById('#btn-actualizar');
                    btnActualizar.classList.add('presionado');
                    btnActualizar.classList.add('no-hover');
                    btnActualizar.innerHTML = 'Contraseña Actualizada';
                    alert('Contraseña cambiada exitosamente');
                    window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
                } else {
                    alert('No se pudo cambiar la contraseña');
                }
            })
            .catch(error => {
                console.error('Error al cambiar la contraseña:', error);
                alert('Hubo un error al cambiar la contraseña: ' + error.message);
            });
        });
    }
});
