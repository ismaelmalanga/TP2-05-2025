const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const altura = document.getElementById("altura")
const correo = document.getElementById("correo")
const mensaje = document.getElementById("mensaje")

function validar () {
    let errores = "";

    if (nombre.value === "" || nombre.value.length > 50) {
        errores = "nombre invalido.";
    } else if (apellido.value === "" || apellido.value.length > 50) {
        errores = "apellido invalido.";
    } else if (edad.value < 0) {
        errores = "la edad no tiene que ser negativa.";
    } else if (edad.value < 18) {
        errores = "debe ser mayor de edad.";
    } else if (altura.value < 0 || altura.value > 230) {
        errores = "altura invalida.";
    } else if (correo.value === "" || !correo.value.includes("@")) {
        errores = "correo invalido.";
    }

    if (errores === "") {
        mensaje.textContent = "los datos son validos, formulario enviado";
        mensaje.className = "valido";
    } else {
        mensaje.textContent = errores;
        mensaje.className = "error";
    }
}
