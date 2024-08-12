document.addEventListener('DOMContentLoaded', () => {
    const validateBtn = document.getElementById('validate-btn');
    const updateRoleBtn = document.getElementById('update-role-btn');
    const emailInput = document.querySelector('#email');
    const userInfoDiv = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const roleSelect = document.getElementById('role');
    const messageDiv = document.getElementById('message');
  
    validateBtn.addEventListener('click', () => {
      
      fetch('https://api-utn.up.railway.app/obtenerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email : emailInput.value
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          messageDiv.textContent = data.error;
          messageDiv.style.color = 'red';
        } else {
          userName.textContent = `Usuario: ${data.data[0].nombre}`;
          roleSelect.value = data.role;
          userInfoDiv.style.display = 'block';
          messageDiv.textContent = '';
        } 
      })
      .catch((error) => {
        console.error('Error:', error);
        messageDiv.textContent = 'Error al validar el usuario';
        messageDiv.style.color = 'red';
      });
    });
  
updateRoleBtn.addEventListener('click', () => {
     
  
      fetch("https://api-utn.up.railway.app/update-role", {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             email : emailInput.value,
             rol : roleSelect.value
        })
      })
      .then(response => response.json())
      .then(data => {
        alert("cambiado")

      })
      .catch((error) => {
        alert("error")
        console.error('Error:', error);
        messageDiv.textContent = 'Error al actualizar el role';
        messageDiv.style.color = 'red';
      });
    }); 
  });
  