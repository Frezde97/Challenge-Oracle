


var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");
var botonEncriptar = document.querySelector("#botonEncriptador");
var botonDesencriptar = document.querySelector("#botonDesencriptador");
var botonCopiar = document.querySelector("#botonCopiar");
var inputMensaje = document.querySelector("#mensaje");


const contenedorErrores = document.querySelector(".contenedor-errores");


function validarMensaje (e) {
    key = e.KeyCode || e.which;

    teclado = String.fromCharCode(key);

    letras = " abcdefghijklmnñopqrstuvwxyz";

    especiales = "8-37-38-46-164";

    teclado_especial = false;

    for (var i in especiales){
        if(key == especiales[i]){
            teclado_especial = true; break;
        }
    }

    if(letras.indexOf(teclado)== -1 && !teclado_especial){
        alert("Solo se permite el uso de letras minusculas");
        return false;
    }
}


function encriptador (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
}


function desencriptador (){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    inputResultado.value = mensaje;
}

function btncopiar () {
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}



botonEncriptar.onclick = encriptador;
botonDesencriptar.onclick = desencriptador;
botonCopiar.onclick = btncopiar;



