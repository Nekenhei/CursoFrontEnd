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




var arreglo1 = [1,2,3,4,5]
var arreglo2 = [1,2,4,8]

doble1 = arreglo1.map(x =>{
    return x*2
})

doble2 = arreglo2.map(x =>{
    return x*2
})

console.log(doble1)
console.log(doble2)

impar1 = arreglo1.filter(x =>{
    return x%2==1
})

impar2 = arreglo2.filter(x =>{
    return x%2==1
})

console.log(impar1);
console.log(impar2);