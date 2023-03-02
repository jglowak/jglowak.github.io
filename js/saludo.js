function mostrarMensaje() {

    const fecha = new Date(); 
    const hora = fecha.getHours(); 

    if(hora >= 0 && hora < 12) {
        Buenas = "Buenos Días"; 
        
    } else if (hora >= 12 && hora < 20) {
        Buenas = "Buenas Tardes";
        
    } else if (hora >= 20 && hora < 0) {
        Buenas = "Buenas Noches";
        
    } 

    
    document.getElementById("txtsaludo").innerHTML = Buenas; 

}
