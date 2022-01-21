
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


function encriptar (){
        var texto = document.querySelector("#input-texto").value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;
        

}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar (){
        var texto = document.querySelector("#input-texto").value;
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;


/*function encrypt(input) {
        array = input.split('');
        for (var i = 0; i < array.length; i++) {
            if (array[i] == "a") {
                array.splice(i, 1, "ai");
            } else if (array[i] == "e") {
                array.splice(i, 1, "enter");
            } else if (array[i] == "i") {
                array.splice(i, 1, "imes");
            } else if (array[i] == "o") {
                array.splice(i, 1, "ober");
            } else if (array[i] == "u") {
                array.splice(i, 1, "ufat");
            }
        }
        return array.join("");
    }
    
    function decrypt(input){
        array = input.split('');
        for(var i = 0; i < array.length; i++){
            if(array[i]+array[i+1] == "ai"){
                array.splice(i, 2, "a");
            } else if (array[i]+array[i+1]+array[i+2]+array[i+3]+array[i+4] == "enter"){
                array.splice(i, 5, "e");
            } else if (array[i]+array[i+1]+array[i+2]+array[i+3] == "imes"){
                array.splice(i, 4, "i");
            } else if (array[i]+array[i+1]+array[i+2]+array[i+3] == "ober"){
                array.splice(i, 4, "o");
            } else if (array[i]+array[i+1]+array[i+2]+array[i+3] == "ufat"){
                array.splice(i, 4, "u");
            }
        }   
        return array.join("");
    }
    
*/





