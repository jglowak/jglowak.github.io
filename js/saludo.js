// Obtener la hora actual
var hora = new Date().getHours();

// Obtener el elemento del DOM con id="saludo"
var saludoElement = document.getElementById("saludo");

// Verificar la hora actual y cambiar el texto según corresponda
if (hora >= 5 && hora < 12) {
  saludoElement.textContent = "Buenos días";
} else if (hora >= 12 && hora < 19) {
  saludoElement.textContent = "Buenas tardes";
} else {
  saludoElement.textContent = "Buenas noches";
}


document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
