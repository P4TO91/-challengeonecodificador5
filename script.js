const textArea=document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");
const placeholder=document.querySelector(".placeholder");
const subtexto=document.querySelector(".subtexto");
const copiar=document.querySelector(".copiar");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    
    if (textoEncriptado !== null) {
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        placeholder.style.display = "none";
        subtexto.style.display = "none";
        copiar.style.display = "block";
    } else {
        // Mostrar un mensaje de error
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
    }
}

function encriptar(StringEncriptado) {
    // Validar el contenido
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    if (!regex.test(StringEncriptado)) {
        return null; // Contenido no válido, devuelve null
    }

    // El resto de tu función de encriptar
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase();

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (StringEncriptado.includes(matrizcodigo[i][0])) {
            StringEncriptado = StringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }
    return StringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado= desencriptar(textArea.value);
    mensaje.value= textoDesencriptado;
    textArea.value="";
    mensaje.style.backgroundImage= "none";
}

function desencriptar(StringDesencriptado){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringDesencriptado=StringDesencriptado.toLowerCase();

    for(let i=0;i<matrizcodigo.length; i++){
        if(StringDesencriptado.includes(matrizcodigo[i][1])){
            StringDesencriptado=StringDesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);

        }

    }
    return StringDesencriptado;

}

function btncopiar() {
    const textArea = document.querySelector(".mensaje");
    textArea.select(); // Select the text inside the textarea
    document.execCommand('copy'); // Copy the selected text to the clipboard
}

