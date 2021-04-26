var eventosPasados = []

$(function () {

  $.ajax({
    url: "http://127.0.0.1:5500/Modulo%203/Unidad%204/Taller%204/info.json"
  }).done(function(respuesta){

    eventosList = respuesta.eventos
    fechaActual =respuesta.fechaActual

    for (i = 0; i < eventosList.length; i++) {
      if (eventosList[i].fecha < fechaActual) {
        eventosPasados.push(eventosList[i])
      }
    }

    eventosPasados = eventosPasados.sort(function(x,y){
      if (x.fecha < y.fecha) {
        return 1        
      }else{
        return -1
      }
    })



    var html = ""
    for (j = 0; j < eventosPasados.length; j++) {
      html += `<h2>${eventosPasados[j].nombre}</h2>
                <p>${eventosPasados[j].fecha}</p>
                <p>Descripción: ${eventosPasados[j].descripcion}</p>
                <p>Lugar: ${eventosPasados[j].lugar}</p>
                <p># invitados: ${eventosPasados[j].invitados}</p>
                <p>Precio: ${eventosPasados[j].precio}</p>`

      document.getElementById("evento").innerHTML = html
  }
})

})
