function randomN() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            const number = parseInt(Math.random() * 10);
            if (number % 2 == 0) {
                resolve(number)
            }
            else {
                reject("Rechazado")
            }
        },
     1000)
    });
    return promise
}


async function procesar() {
    try {
        var resultado = await randomN()
        console.log("Resultado: ",resultado) 
    } catch (error) {
        console.log('Error :>> ', error);
    }finally{
        console.log("proceso terminado");
    }
    
}

procesar()
procesar()
procesar()
procesar()
procesar()
procesar()