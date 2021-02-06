function stringValido(string, largo) {
    if (string == null || string == undefined) {
        return false
    }

    if (largo && string.trim().lenght < largo) {
        return false
    }

    return true
}

function fechaValida(fecha,minimaFecha){
    if (fecha == null || fecha == undefined){
    return false
    }
    if (minimaFecha && fecha.getTime() < minimaFecha.getTime()){
    return false
    }
    return true
   }

function eventoValido(evento){
    if (evento == null || evento == undefined){
    return false;
    }
    return (
    stringValido(evento.nombre, 3) &&
    stringValido(evento.descripcion, 10) &&
    fechaValida(evento.fecha, new Date(2018,0,1,0,0,0))
    )
   }
   

var evento = {
    nombre: "a",
    descripcion: "a",
    fecha: new Date(2018    ,10,1)
}



console.log(eventoValido(evento))




var judo = {
    nombre: "judo",
    origen: "japon",
    clubes: club
}

var club =[{
    dojo: "Sensei VU",
    ciudad: "Inmaculada"
}]

club.push({
    dojo: "Sensei Sato",
    ciudad: "Tokio"})


console.log(club)

class ElementoInstitucional {
    constructor(id,tipo,version){
        this.id = id
        this.tipo = tipo
        this.version = version
    }

    generaNombre() {
        return `COMP18S_${this.id}_${this.tipo}_${this.version}.midoc`
    }
}

var a1 = new ElementoInstitucional(1,"interactiva","v1")
var a2 = new ElementoInstitucional(2,"ejercicio","v2")
var a3 = new ElementoInstitucional(3,"laboratorio","v1")
console.log(a1.generaNombre());
console.log(a2.generaNombre());
console.log(a3.generaNombre());