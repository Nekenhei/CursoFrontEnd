
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
    
    return true
}



