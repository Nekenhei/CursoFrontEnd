function totalMinutos(horas,minutos) {
    var horasAMinutos = horas * 60
    return horasAMinutos + minutos
}

console.log(totalMinutos(5,25))
console.log(totalMinutos(1,5))
console.log(totalMinutos(0,15))

function cantidadRecolectadaSimple(costo,participantes) {
    return costo * participantes
}

console.log(cantidadRecolectadaSimple(10, 5))
console.log(cantidadRecolectadaSimple(1, 5))

function cantidadRecolectada(costoEstudiante, costoAdulto, cantidadEstudiantes, cantidadAdultos) {
    var totalEstudiantes = cantidadRecolectadaSimple(costoEstudiante,cantidadEstudiantes)
    var totalAdulto = cantidadRecolectadaSimple(costoAdulto,cantidadAdultos)
    return totalAdulto + totalEstudiantes 
}

console.log(cantidadRecolectada(1, 5, 20, 4))
console.log(cantidadRecolectada(0, 5, 20, 3))


