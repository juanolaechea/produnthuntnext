export default function validarCrearCuenta(valores) {
    

    let errores = {};

    //validar Nombre
    if (!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    if (!valores.email) {
      errores.email = "El Email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = "Email no valido";
    }

    if(!valores.password){
        errores.password = "El Password es obligatorio";
    } else if (valores.password.length < 6) {
        
         errores.password = "El Password es demasiado corto , minimo 6 caracteres ...";
    }

    return errores;
}