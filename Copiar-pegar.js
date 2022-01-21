var botonCopiar = document.querySelector("#btn-copy");


botonCopiar.addEventListener("click", copiarAlPortapapeles, false);

function copiarAlPortapapeles(){
    let texto = document.querySelector(".text-input-salida").value;
    let inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", texto);
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand("copy");
    document.body.removeChild(inputFalso);
}
