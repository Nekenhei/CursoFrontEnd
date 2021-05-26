
function verificarLogin(formulario) {
    
    expresionRegularCorreo = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')
    expresionRegularContrasena = new RegExp('[A-Za-z0-9]{8}')


    if (!expresionRegularCorreo.test(formulario.correo.value)) {
        alert("Correo invalido")
        return false        
    }
    
    if (!expresionRegularContrasena.test(formulario.contrasena.value)) {
        alert("La contraseña debe contener al menos 8 caracteres")
        return false  
    }

    if (formulario.contrasena.value != formulario.confirma.value) {
        alert("Las contraseñas no coinciden")
        return false
    }

    if (formulario.genero.value="") {
        alert("Escoja un género musical")
        return false
        
    }
    if (formulario.edad.value == "") {
        alert("Escoja una edad")
        return false
    }

    if (!formulario.terminos.checked) {
        alert("Acepte los terminos y condiciones")
        return false
    }
    
    return true
}



