function cargarDatos() {
    var peticion = new XMLHttpRequest();

    peticion.open("GET", "http://127.0.0.1:5500/Modulo%203/Unidad%204/Taller%202/datos.json")

    peticion.onload = function () {
        if (peticion.status == 200) {
            var datos = JSON.parse(peticion.response)
            document.getElementById("contenido").innerHTML = "Hola: " + datos.nombre;
        }
    }
    peticion.send();

}