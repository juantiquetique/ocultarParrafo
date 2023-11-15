// const agrega = document.getElementById("agrega");

// let nuevoNombre = prompt("Ingrese un nombre");

// agrega.textContent = nuevoNombre;

// console.log(agrega);


// const espacio = document.getElementById("espacio")
// const input = document.getElementById("agrega")

// espacio.value =  "";
// let cadaIntento = 1;

// function enLista()
// {
//     let nuevocontenido = Text(espacio.value);
//     if(cadaIntento === 1)
//     input.textContent = "se suma";
//     input.textContent += nuevocontenido + " ";

// }

// cadaIntento ++;
// espacio.value = ""
// espacio.focus();
// espacio.addEventListener("onkeypress", enLista)
// agregam.appendChild(agregam)
// agrega.textContent = nuevocontenido;
// console.log(agrega);

const numIntento = document.getElementById("numIntento");
const intentos = document.getElementById("intentos");

numIntento.value = "";
// let cantidadIntentos  = 1;

function verificarIntento()
{
    let intentoUsuario = (numIntento.value);
    
    // if(cantidadIntentos === 1)
    intentos.textContent;
    
    intentos.textContent += intentoUsuario + " ";
    
    // cantidadIntentos ++;
    numIntento.value = "";
    // numIntento.focus();
}
numIntento.addEventListener("click", verificarIntento);
// numIntento.addEventListener("keypress", function(e){
//     console.log(e);
// });


// const numIntento = document.getElementById("numIntento");
// numIntento.addEventListener("keypress", function (e) {
//     console.log(e.key)
// });


