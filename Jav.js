const ticket = 200;

let descuentoEstudiante, descuentoTrainee, descuentoJunior;

descuentoEstudiante = 0.80;
descuentoTrainee = 0.50;
descuentoJunior = 0.15;

let formulario, nombre, apellido, correo, cantidad, categoria, total_p, btnBorrar, btnResumen;

// Elementos a calcular
formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
total_p = document.querySelector('#totalAPagar');
btnResumen = document.querySelector('#resumen');
btnBorrar = document.querySelector('#borrar');


function calcularPago() {

    let total = cantidad.value * ticket;
    // Condicionar por descuento

    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descuentoEstudiante);
            break;
        case "trainee":
            total = total - (total * descuentoTrainee);
            break;
        case "junior":
            total = total - (total * descuentoJunior);
            break;
    }

    total_p.innerHTML = `Total a Pagar: $ ${total}`;
}


btnResumen.addEventListener('click', (event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();
})


btnBorrar.addEventListener('click', () => formulario.reset());


// Comprobar ingresoso

function comprobacion() {
    nombre = document.querySelector('input[placeholder = "Nombre"]');
    apellido = document.querySelector('input[placeholder = "Apellido"]');
    correo = document.querySelector('input[placeholder = "Correo"]');
    cantidad = document.querySelector('input[placeholder = "Cantidad"]');

    if (nombre.value == '' && apellido.value == '' && correo.value == '' && cantidad.value == "") {
        alert('COMPLETA LOS DATOS');
        return;
    }
    else if (nombre.value == '') {
        alert('Ingresa tu Nombre');
        return;
    }
    else if (apellido.value == '') {
        alert('Ingresa tu Apellido');
        return;
    }
    else if (correo.value == '') {
        alert('Ingresa tu Correo');
        return;
    }
    else if (cantidad.value == '' || cantidad.value < 1) {
        alert('Ingresa una cantidad');
        return;
    }

}
