
const $botonEnviarCarta = document.querySelector("#enviar-carta")
const $form = document.querySelector("#carta-a-santa")

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form["descripcion-regalo"].value

$botonEnviarCarta.onclick = function() {
    validarNombre(nombre)
    return false;
}

function validarNombre(nombre){
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter"
    }

    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres"
    }

    return "";
}


// TAREA: Crear de la misma forma, validar ciudad, validar descripcionRegalo

//Escribir pruebas para las funciones de las tareas 5 y 6

function validarCiudad(ciudad){
    if(ciudad === "") {
        return "Seleccionar una ciudad"
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo <= 15) {
        return "Este campo debe tener al menos 15 caracteres"
    }
    return "";
}
