

let textoGuardado = localStorage.getItem("texto");

if (textoGuardado) {

document.getElementById("data").innerHTML = textoGuardado;

} else {


    document.getElementById("data").innerHTML = "No se encontró ningun texto";


}




