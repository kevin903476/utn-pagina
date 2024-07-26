document.addEventListener("DOMContentLoaded", function () {
  let code = generarCodigo();
  const input = document.getElementById("codigo");
  const boton = document.getElementById("input-submit");
  Swal.fire({
    icon: "success",
    title: "Correo Enviado",
    text: "Tu código de verificación ha sido enviado. Revisa tu correo electrónico para continuar.",
    confirmButtonText: "Aceptar",
  }).then(() => {
    console.log("enviado");
  });
  fetch("https://api-utn.up.railway.app/send-email-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: sessionStorage.getItem('correoTemporal'),
      codigo: code,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      boton.addEventListener("click", function () {
        if (parseInt(input.value, 10) === code) {
          fetch("https://api-utn.up.railway.app/insertUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nombre: sessionStorage.getItem('usuarioTemporal'),
              email: sessionStorage.getItem('correoTemporal'),
              contra: sessionStorage.getItem('contraTemporal'),
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success", data);
              sessionStorage.clear();
              window.location.href = "login.html";
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          Swal.fire({
            icon: "error",
            title: "error",
            text: "El código es incorrecto",
            confirmButtonText: "Aceptar",
          }).then(() => {
            console.log("incorrecto");
          });
        }
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

function generarCodigo() {
  return Math.floor(100000 + Math.random() * 900000);
}
