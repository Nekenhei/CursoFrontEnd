function limpiarNombreParticipante(texto) {
    var textoProcesado = (texto.toUpperCase()).trim()
    return textoProcesado
}



function saludo(nombre,apellido,genero,evento,minutosQueFaltan,) {

    var error = false
    var dia = ""
    //limpio texto
    var nombreTxt = limpiarNombreParticipante(nombre)
    var apellidoTxt = limpiarNombreParticipante(apellido)
    
    //Valida genero
    if (genero == "FEMENINO") {
        var generoTxt = "a"
    }
    else if(genero == "MASCULINO"){
        var generoTxt = "o"
    }
    else
    {
        error = true    
    }
    
    //cuando evento    
    if (minutosQueFaltan < 60*24){
        dia = "hoy";
    }
    else if (minutosQueFaltan < 60*24*2){
        dia = "mañana";
    }
    else if(minutosQueFaltan > 60*24*2){
        dia = "pronto";
    }else{
        error = true
    }

    //imprime texto
    if (!error) {
        var texto = `Benvenid${generoTxt} ${nombreTxt} ${apellidoTxt}, recuerda ${dia} el evento (${evento})`
        return texto
    }else{
        console.log("Datos incompletos")
    }
    console.log(cuandoTxt)

}

console.log(saludo("    LUIS", "perez", "MASCULINO", "Película", 600))
console.log(saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500))
console.log(saludo("  PEDRO ", "Gil", "MASCULINO", "Juego de Baloncesto", 5000))    
