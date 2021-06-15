$(function (){

    //Solicitar Top3 canciones
    $.ajax({
            url: "datos.json"
        }).done(function(respuesta){

            cancionesList = respuesta.canciones

            cancionesList = cancionesList.sort(function(x,y){
                if(x.reproducciones < y.reproducciones){
                    return 1
                }else{
                    return -1
                }
            })

            var html = ""
            var table = document.getElementById("table")
            


            for (let i = 1; i <= 3; i++) {
                
                var nuevafila= "<tr><th>" + i + "</th>" +
                "<td>" + cancionesList[i-1].nombre + "</td>" +
                "<td> <audio src='canciones/"+cancionesList[i-1].ruta+"' controls></audio></td>"

                $("#tablaCanciones").append(nuevafila)

                
            }
        })

    


})