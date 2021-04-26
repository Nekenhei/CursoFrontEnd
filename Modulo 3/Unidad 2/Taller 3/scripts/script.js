function GestionarEstudiante (estudiante,nota1,nota2, Gestion){
    var resGestion = Gestion(nota1, nota2);
    console.log (`Nombre Completo del Estudiante: ${estudiante} ${resGestion}`);
}
function Promedio (nota1,nota2){
    return (nota1+nota2)/2;
}
GestionarEstudiante('Jose Carrillo', 18,20, Promedio);

var arreglo1 = [1,2,3,4,5];
var arreglo2 = [1,2,4,8];
var filtrado

filtrado1 = arreglo1.map(x =>{
    return x*2
})

filtrado2 = arreglo2.map(x =>{
    return x*2
})

console.log(filtrado1);
console.log(filtrado2);

filtrado1 = arreglo1.filter(x =>{
    return x%2 == 1
})

filtrado2 = arreglo2.filter(x =>{
    return x%2 == 1
})

console.log(filtrado1);
console.log(filtrado2);

filtrado1 = arreglo1.map(x =>{
    if (x%2==0) {
        return x/2
    }else{
        return x*2
    }
})

filtrado2 = arreglo2.map(x =>{
    if (x%2==0) {
        return x/2
    }else{
        return x*2
    }
})

console.log(filtrado1);
console.log(filtrado2);