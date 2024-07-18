document.addEventListener("DOMContentLoaded", function () {
  const sendEmailBtn = document.getElementById('send-email-btn');

  sendEmailBtn.addEventListener('click', function () {
    
    fetch('https://api-utn.up.railway.app/send-email', {
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
      const messageDiv = document.getElementById('message');
      if (data.error) {
        messageDiv.textContent = 'Error al enviar los resultados';
        messageDiv.style.color = 'red';
      } else {
        messageDiv.textContent = 'Resultados enviados exitosamente';
        messageDiv.style.color = 'green';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      const messageDiv = document.getElementById('message');
      messageDiv.textContent = 'Error al enviar los resultados';
      messageDiv.style.color = 'red';
    });
  });
});