const textArea = document.querySelector(".area_de_texto_izquierda");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptacion(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage= "none"
}

function encriptacion(stringEncriptada){
    let llavesDeEncriptacion = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "fat"]];
    //console.table(llavesDeEncriptacion);
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i= 0; i < llavesDeEncriptacion.length; i++){
        if(stringEncriptada.includes(llavesDeEncriptacion[i][0]))
            {
            stringEncriptada = stringEncriptada.replaceAll(llavesDeEncriptacion[i][0],llavesDeEncriptacion[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptacion(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}

function desencriptacion(stringDesncriptada) {
    let llavesDeEncriptacion = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "fat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase();
    
    for(let i=0; i < llavesDeEncriptacion.length; i++){
        if(stringDesncriptada.includes(llavesDeEncriptacion[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(llavesDeEncriptacion[i][1], llavesDeEncriptacion[i][0]);

        }
    }
    return stringDesncriptada;
}

function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado");
        })
        .catch((err) => {
            console.error("Error al copiar el texto: ", err);
        });
}