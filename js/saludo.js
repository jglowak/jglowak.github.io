function mostrarMensaje() {

    const fecha = new Date(); 
    const hora = fecha.getHours(); 

    if(hora >= 0 && hora < 12) {
        texto = "Buenos Días"; 
        
    } else if (hora >= 12 && hora < 18) {
        texto = "Buenas Tardes";
        
    } else if (hora >= 18 && hora < 24) {
        texto = "Buenas Noches";
        
    } 

    
    document.getElementById("txtsaludo").innerHTML = texto; 

}
