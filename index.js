function encriptar() {
    let texto = document.getElementById("texto").value;
    let AreaNoEncriptado = document.getElementById("no-encriptado");
    let AreaSiEncriptado = document.getElementById("si-encrpitado");

    let textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

    if(texto.length != 0) {
        document.getElementById("texto-encriptado").value = textoCifrado;
        AreaNoEncriptado.style.display = "none";
        AreaSiEncriptado.style.display = "block";
    } else{
        AreaNoEncriptado.style.display = "block";
        AreaSiEncriptado.style.display = "none";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let AreaNoEncriptado = document.getElementById("no-encriptado");
    let AreaSiEncriptado = document.getElementById("si-encrpitado");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(texto.length != 0) {
        document.getElementById("texto-encriptado").value = textoCifrado;
        AreaNoEncriptado.style.display = "none";
        AreaSiEncriptado.style.display = "block";
    } else{
        AreaNoEncriptado.style.display = "block";
        AreaSiEncriptado.style.display = "none";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function copiar() {
    let textoCifrado = document.getElementById("texto-encriptado").value;
    navigator.clipboard.writeText(textoCifrado)
        .then(() => {
            swal("¡Texto copiado!", "El texto encriptado ha sido copiado al portapapeles.", "success");
        })
        .catch((err) => {
            console.error('Error al copiar el texto: ', err);
            swal("Oops!", "Ha ocurrido un error al copiar el texto.", "error");
        });
}