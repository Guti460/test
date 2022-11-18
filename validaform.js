function valida_envia() {
    if (document.contacto.nombre.value.length == 0) {
        alert("Debe ingresar su nombre")
            document.contacto.nombre.focus()
            return 0;
            }

            edad = document.contacto.edad.value
            edad = validarEntero(edad)
            document.contacto.edad.value = edad
            if (edad == "") {
                alert("Ingrese su edad en números.")
                document.contacto.edad.focus()
                return 0;
            } else {
                if (edad < 18) {
                    alert("Debe ser mayor de 18 años.")
                    document.contacto.edad.focus()
                    return 0;
                }
            }

            if (document.contacto.interes.selectedIndex == 0) {
                alert("Seleccione el motivo de su contacto.")
                document.contacto.interes.focus()
                return 0;
            }

            alert("Muchas gracias por enviar el formulario");
            document.contacto.submit();
        }
        
        function validarEntero(valor) {
            valor = parseInt(valor)
            if (isNaN(valor)) {

                return ""
            } else {

                return valor
    }
}
