const text = document.getElementById("text");
function mostrar()
{
    document.getElementById("text").style.display="block";
    let cambio =document.getElementById("ocultar")
    if(cambio.textContent == "Ocultar"){
        cambio.textContent = "Mostrar"
        cambio.style.backgroundColor = "Blue"
        cambio.style.color = "white"
    }
    else{
        cambio.textContent = "Ocultar"
        cambio.style.backgroundColor = "gray"
        cambio.style.color = "white"
    }
}

const ocultar = document.getElementById("ocultar");
function oculte ()
{
    document.getElementById("text").style.display="none";
    let cambio =document.getElementById("ocultar")
    if(cambio.textContent == "Ocultar"){
        cambio.textContent = "Mostrar"
        cambio.style.backgroundColor = "Blue"
        cambio.style.color = "white"
    }
    else{
        cambio.textContent = "Ocultar"
        cambio.style.backgroundColor = "gray"
        cambio.style.color = "white"
    }
}

function ambas()
{
    let texto = document.getElementById("text");
    if(texto.style.display == "none")
    {
        mostrar();
    }else{
        oculte();
    }
}

function ponerc()
{
    document.getElementById("ocultar").style.backgroundColor = "orange";
}
function quitarc()
{
    document.getElementById("ocultar").style.background = "";
}

ocultar.addEventListener("click", ambas);
ocultar.addEventListener("mouseover", ponerc);
ocultar.addEventListener("mouseout", quitarc);