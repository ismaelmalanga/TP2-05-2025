const inputPeso = document.getElementById("peso")
const inputAltura = document.getElementById("altura")

function calcularIMC(){
    const peso = +inputPeso.value
    const altura = +inputAltura.value

    if (peso != "" && altura != "" && peso > 0 && altura > 0){
        const imc = peso / (altura * altura)
        alert("Tu IMC es: " + imc)
    } else{
        alert("Ingresa valores validos")
    }
}
