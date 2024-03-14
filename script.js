/*
alert("Hola esto es magia");

let nombre = "Aldo";

console.log(nombre);


let contenidoTitulo = "Nombre";

    function modifyAboutLink() {
      // Obtener referencia al enlace "Acerca de mí"
        var aboutLink = document.getElementById("about-link");

      // Verificar si aboutLink no es nulo antes de acceder a su propiedad
        if (aboutLink !== null) {
        // Verificar si el texto actual del enlace es "Acerca de mi"
        if (aboutLink.textContent === "Acerca de mi") {
            // Modificar el texto del enlace si se cumple la condición
            aboutLink.textContent = contenidoTitulo;
            }else{
                aboutLink.textContent = "noPE";
            }
        }
    }

    // Llamar a la función después de que el DOM se haya cargado completamente
    document.addEventListener("DOMContentLoaded", modifyAboutLink);
   

let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".container .Acerca-de-mi");
titulo.innerHTML = contenidoTitulo;
console.log(titulo);

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre"){
    titulo.innerHTML = "Otro"
} */


let cambio1 = "xdxdxd";
let cambio2 = "ffffffff";
let cambio3 = "azccanta";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(cambio1, cambio2, cambio3){
    let contenido =` ${cambio1}, este parrafo es de relleno, y como tal debe tener muchas palabras
    que ambos sabemos que no vas a leer , pero de igual manera
    se debe ver como un texto muy largo, ${cambio2} ${cambio3}`;

    return contenido;
};

parrafo.innerText = cambiarTexto(cambio1, cambio2, cambio3);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};
