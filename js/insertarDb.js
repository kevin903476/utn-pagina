

const btnInsertar = document.querySelector('#boton-insertar')

function insertUser(nombre){
  fetch('http://localhost:5501/insert', {
    
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      nombre : nombre
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.sucess) {
      location.reload();
    }
  })

} 

btnInsertar.onclick = function(){
    const nombre = document.querySelector('#nombre-insertar');
    insertUser(nombre.value)
    console.log(ingresado)
    
  }

