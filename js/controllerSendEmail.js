document.addEventListener("DOMContentLoaded", function () {
  //var selectedOption = 0;
  if (document.getElementById("send-email-btn")) {
    fetch("https://api-utn.up.railway.app/getUserEncuestaITI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.data.length == 0) {
          console.log("no hay");
          mostrarFormulario();
        } else {
          const botonCajaCuestionario =
            document.getElementById("send-email-btn");

          botonCajaCuestionario.addEventListener("click", function () {
            enviarMailITI();
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function mostrarFormulario() {
    const carrera = "Ingeniería en Tecnologías de Información";
    document.getElementById("carreraCuestionario").textContent = carrera;

    const botonCajaCuestionario = document.getElementById("send-email-btn");
    const botonCuestionario = document.getElementById("botonCuestionario");

    botonCajaCuestionario.addEventListener("click", function () {
      document.querySelector(".modalCuestionario").classList.add('active');
    });
    var selectedOption;
    botonCuestionario.addEventListener("click", function () {
      const form = document.getElementById("cuestionario");
      selectedOption = form.importancia.value;

      if (selectedOption) {
        insertarFormulario(selectedOption);
        enviarMailITI();
        
        document.querySelector(".modalCuestionario").classList.remove('active');
      } else {
        Swal.fire({
          icon: "error",
          title: "Selecciona una Respuesta",
          text: "Por favor, selecciona una opción antes de enviar.",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
    //return selectedOption
  }

  function enviarMailITI() {
    fetch("https://api-utn.up.railway.app/send-email-iti", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Enviado",
          text: "¡Hemos enviado un correo! Por favor, revisa tu bandeja de entrada.",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ha ocurrido algo",
          confirmButtonText: "Aceptar",
        });
      });
  }

  function insertarFormulario(respuesta) {
    var respuestaForm = respuestaFormulario(respuesta);

    fetch("https://api-utn.up.railway.app/insertEncuestaITI", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        respuesta: respuestaForm,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          window.location.reload();
        }, 2000); 
        if (data.data) {
          console.log("Encuesta insertada correctamente");
          
        } else {
          console.error("Error al insertar la encuesta:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error en la petición:", error);
      });
  }

  function respuestaFormulario(selectedOption) {
    var respuesta = "";
    switch (parseInt(selectedOption)) {
      case 1:
        respuesta = "Muy importante";
        break;
      case 2:
        respuesta = "Importante";
        break;
      case 3:
        respuesta = "Moderadamente importante";
        break;
      case 4:
        respuesta = "Poco importante";
        break;
      case 5:
        respuesta = "Sin importancia";
        break;
      default:
        respuesta = "Opción no válida";
        break;
    }
    return respuesta;
  }
  if (document.getElementById("send-email-btn-agro")) {
    const sendEmailBtn = document.getElementById("send-email-btn-agro");

    sendEmailBtn.addEventListener("click", function () {
      fetch("https://api-utn.up.railway.app/send-email-agro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Enviado",
            text: "¡Hemos enviado un correo! Por favor, revisa tu bandeja de entrada.",
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((error) => {
          console.log(data);
          Swal.fire({
            icon: "error",
            title: "error",
            text: "Ha ocurrido algo",
            confirmButtonText: "Aceptar",
          }).then(() => {
            console.log("enviado");
          });
        });
    });
  }
  if (document.getElementById("send-email-btn-ig")) {
    const sendEmailBtn = document.getElementById("send-email-btn-ig");

    sendEmailBtn.addEventListener("click", function () {
      fetch("https://api-utn.up.railway.app/send-email-ig", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Enviado",
            text: "¡Hemos enviado un correo! Por favor, revisa tu bandeja de entrada.",
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((error) => {
          console.log(data);
          Swal.fire({
            icon: "error",
            title: "error",
            text: "Ha ocurrido algo",
            confirmButtonText: "Aceptar",
          }).then(() => {
            console.log("enviado");
          });
        });
    });
  }
  if (document.getElementById("send-email-btn-gec")) {
    const sendEmailBtn = document.getElementById("send-email-btn-gec");

    sendEmailBtn.addEventListener("click", function () {
      fetch("https://api-utn.up.railway.app/send-email-gec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Enviado",
            text: "¡Hemos enviado un correo! Por favor, revisa tu bandeja de entrada.",
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((error) => {
          console.log(data);
          Swal.fire({
            icon: "error",
            title: "error",
            text: "Ha ocurrido algo",
            confirmButtonText: "Aceptar",
          }).then(() => {
            console.log("enviado");
          });
        });
    });
  }
});
