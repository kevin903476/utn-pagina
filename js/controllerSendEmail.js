document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById('send-email-btn')) {
    
    const sendEmailBtn = document.getElementById('send-email-btn');

    sendEmailBtn.addEventListener('click', function () {
      
      fetch('https://api-utn.up.railway.app/send-email-iti', {
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
        Swal.fire({
          icon: 'success',
          title: 'Enviado',
          text: 'Ya puedes reviar tu correo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      })
      .catch(error => {
        console.log(data)
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Ha ocurrido algo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      });
    });
  }
  if (document.getElementById('send-email-btn-agro')) {
    
    const sendEmailBtn = document.getElementById('send-email-btn-agro');

    sendEmailBtn.addEventListener('click', function () {
      
      fetch('https://api-utn.up.railway.app/send-email-agro', {
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
        Swal.fire({
          icon: 'success',
          title: 'Enviado',
          text: 'Ya puedes reviar tu correo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      })
      .catch(error => {
        console.log(data)
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Ha ocurrido algo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      });
    });
  }
  if (document.getElementById('send-email-btn-ig')) {
    
    const sendEmailBtn = document.getElementById('send-email-btn-ig');

    sendEmailBtn.addEventListener('click', function () {
      
      fetch('https://api-utn.up.railway.app/send-email-ig', {
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
        Swal.fire({
          icon: 'success',
          title: 'Enviado',
          text: 'Ya puedes reviar tu correo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      })
      .catch(error => {
        console.log(data)
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Ha ocurrido algo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      });
    });
  }
  if (document.getElementById('send-email-btn-gec')) {
    
    const sendEmailBtn = document.getElementById('send-email-btn-gec');

    sendEmailBtn.addEventListener('click', function () {
      
      fetch('https://api-utn.up.railway.app/send-email-gec', {
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
        Swal.fire({
          icon: 'success',
          title: 'Enviado',
          text: 'Ya puedes reviar tu correo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      })
      .catch(error => {
        console.log(data)
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Ha ocurrido algo',
          confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("enviado")
        });
      });
    });
  }

});