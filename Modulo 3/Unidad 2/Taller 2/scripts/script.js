class Evento{
    constructor(id,nombre,cantidadAsistentes,precioPorParticipante) {
        this.id = id
        this.nombre = nombre
        this.cantidadAsistentes = cantidadAsistentes
        this.precioPorParticipante = precioPorParticipante
    }

        enlace() {
            return `/evento/${this.id}`
        }

        dineroTotalRecaudado(){
            return  this.cantidadAsistentes * this.precioPorParticipante
        }
}

var evento1 = new Evento(1,"e1", 12, 5);        
console.log(evento1.enlace())        
console.log(evento1.dineroTotalRecaudado())