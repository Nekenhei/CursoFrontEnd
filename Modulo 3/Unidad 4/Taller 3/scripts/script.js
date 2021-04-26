function cargarDatos() {
    $.ajax({
        url: "http://127.0.0.1:5500/Modulo%203/Unidad%204/Taller%203/datos.json"
    }).done(function(respuesta){
        $("#contenido").html("Hola: " + respuesta.nombre )
        $("#contenido").slideDown("slow");
        });    
}

$(function(){

    $("#contenido").hide();

    $("button.cargar").click(function(){
        cargarDatos();
    })
})