$(function (){

    //Solicitar canciones
    $.ajax({
            url: "http://127.0.0.1:5500/Modulo%205%20Proyecto%20Final/proyecto_frontend_inicio/datos.json"
        }).done(function(respuesta){

            cancionesList = respuesta.canciones

            imprimirCanciones(cancionesList)

            buscador = document.getElementById("busqueda")

            buscador.addEventListener("keyup",function(){
                
                var valor = buscador.value
                    cancionesFiltro = cancionesList.filter(x =>{
                        return x.nombre.includes(valor)
                    })
                    imprimirCanciones(cancionesFiltro)
                })
        })
    })


function imprimirCanciones(canciones) {

    html = ""
    for (let i = 0; i < canciones.length; i++) {

        var nuevafila = "<div class='col-12 col-lg-6 col-xl-4 text-center my-2'>" +
            "<div class='card'>" +
            "<img src='imagenes/icon_" + canciones[i].icono + ".svg' class='card-img-top' width='100' height='100'>" +
            "<div class='card-body bg-light'>" +
            "<h5 class='card-title'>" + canciones[i].nombre + "</h5>" +
            "<audio class='text-center' src='canciones/" + canciones[i].ruta + "' controls></audio>" +
            "</div>" +
            "</div>" +
            "</div>"
        html += nuevafila        
    }

    $("#divCanciones").html(html);
}

