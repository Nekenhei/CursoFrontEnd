$(function () {

  $.ajax({
    url: "http://127.0.0.1:5500/Modulo%203/Unidad%204/Taller%204/info.json"
  }).done(function(respuesta){

    eventosList = respuesta.eventos
    var id = location.search.match(/id=(\d)*/)[1]

    evento = eventosList.find(function(busqueda){
      return busqueda.id == id
    })
 
  var html = `<h2>${evento.nombre}</h2>
              <p>${evento.fecha}</p>
              <p>Descripción: ${evento.descripcion}</p>
              <p>Lugar: ${evento.lugar}</p>
              <p># invitados: ${evento.invitados}</p>
              <p>Precio: ${evento.precio}</p>` 

  document.getElementById("evento").innerHTML = html

})

})
