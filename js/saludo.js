function mostrarMensaje() {

    const fecha = new Date(); 
    const hora = fecha.getHours(); 

    if(hora >= 0 && hora < 12) {
        Buenas = "Buenos Días"; 
        
    } else if (hora >= 12 && hora < 19) {
        Buenas = "Buenas Tardes";
        
    } else if (hora >= 19 && hora < 24) {
        Buenas = "Buenas Noches";
        
    } 

    
    document.getElementById("txtsaludo").innerHTML = Buenas; 

}
