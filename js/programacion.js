const terminar = document.getElementById("terminar");
function corregir() {
    const nivel = document.getElementById('nivel')

    if (nivel.value.trim() === '') {
        console.log("ingresa resultado")
    } else {
        document.getElementById("resultado-progra").innerHTML = nivel.value.trim();
        var modal = document.getElementById("miModal");

        var spanCerrarModal = document.getElementsByClassName("cerrarModal")[0];
    
    
    
        modal.style.display = "block";
        
        
        spanCerrarModal.onclick = function() {
        modal.style.display = "none";
        }
        
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
        
        
        terminar.classList.add('presionado')
        terminar.classList.add('no-hover')
        terminar.disabled = true
        }

    
    
}
    
terminar.onclick = function(){
    corregir();
     
}
    