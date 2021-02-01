function encabezadoEvento(nombreEvento, lugar) {
    var texto = `Evento: ${nombreEvento}. Lugar: ${lugar}`
    return texto
}

console.log(encabezadoEvento("lectura bla bla bla","Casa"))

function limpiarNombreParticipante(texto1,texto2) {
    var texto2procesado = (texto2.toUpperCase()).trim()
    var texto1procesado = texto1.trim()
    return `${texto2procesado}, ${texto1procesado}`


}

console.log(limpiarNombreParticipante("   hola","  mundo   "))