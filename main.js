// Función para agregar el valor del input al background del div

// function mostrar() {
//     let color = document.getElementById("valor").value;
//     // console.log(color);
//     let aplicar = document.querySelector("div.fondo");
//     aplicar.style.background = color;
// }

function valores() {
    let grado = document.getElementById("deg").value;
    let primario = document.getElementById("primero").value;
    let secundario = document.getElementById("segundo").value;
    let valor = ("linear-gradient("+grado+"deg, " + primario+", " + secundario+");");
    
    console.log(valor);

    let aplicar = document.querySelector("div.fondo");
    aplicar.style.background = valor;
}

// Función para copiar el texto del input

// function copyText(){
//     let textoCopiado = document.getElementById("tex");
//     textoCopiado.ariaSelected();
//     textoCopiado.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(textoCopiado.value);
//     alert("Texto Copiado!");
// }