
document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5501/getAll')
    .then(response => response.json())
    .then(data => loadTable(data['data']))
});

const btnCargar = document.querySelector('#cargar')

btnCargar.onclick = function(){
  const numero = document.querySelector('#resultado');
  const resultado = numero.textContent;

  fetch('http://localhost:5501/update', {
    
    method: 'PATCH',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      puntuacion_logico : resultado,
      nombre : 'Kevin'
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.sucess) {
      location.reload();
    }
  })

}

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

function loadTable(data){
  const newDiv = document.createElement("div");
  const contenido = document.querySelector("#contenido");

  console.log(data)

  if (data.length === 0) {
    html += `
    <p> no hay datos</p>
    `;
    newDiv.innerHTML = html;
    contenido.appendChild(newDiv);
  }
  let html = "";
  data.forEach(function({nombre, puntuacion_logico, puntuacion_matematico, puntuacion_idioma}){
    html += `
    <p> nombre ${nombre}</p>
    <p> puntuacion_logico ${puntuacion_logico}</p>
    <p> puntuacion_matematico ${puntuacion_matematico}</p>
    <p> puntuacion_idioma ${puntuacion_idioma}</p>
    `;
    
  })
  newDiv.innerHTML = html;
  contenido.appendChild(newDiv);


  

}