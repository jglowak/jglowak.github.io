function mostrarMensaje() {

    const fecha = new Date(); 
    const hora = fecha.getHours(); 

    if(hora >= 5 && hora < 12) {
        texto = "Buenos Días"; 
        
    } else if (hora >= 12 && hora < 20) {
        texto = "Buenas Tardes";
        
    } else if (hora >= 20 && hora < 5) {
        texto = "Buenas Noches";
        
    } 

    
    document.getElementById("txtsaludo").innerHTML = texto; 

}
