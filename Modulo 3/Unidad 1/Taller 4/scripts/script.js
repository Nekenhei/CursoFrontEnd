var donaciones = [5,15,22,25,30,52,5,1,0];


function minimo(donaciones) {
    var donaLast = donaciones[0]
    for (const donacion of donaciones) {
        if (donacion < donaLast) {
            donaLast = donacion
        }
    } 
    return donaLast   
}

function maximo(donaciones) {
    var donaLast = donaciones[0]
    for (const donacion of donaciones) {
        if (donacion > donaLast) {
            donaLast = donacion
        }
    } 
    return donaLast
}

function promedio(min, max, donaciones) {

    var elementos = donaciones.length - 2
    var suma = 0

    for (const donacion of donaciones) {
        suma += donacion
    } 


    return (suma - min - max)/elementos
}



var min = minimo(donaciones);
var max = maximo(donaciones);

console.log(min);
console.log(max);
console.log(promedio(min, max, donaciones)); // devuelve 0 52 14.714285714285714