function mostrarReservacion(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtiene los valores ingresados en el formulario
    var nombre = document.getElementById("nombre").value;
    var fechaEntrada = document.getElementById("fecha-entrada").value;
    var fechaSalida = document.getElementById("fecha-salida").value;
  
    // Muestra la información de la reservación
    document.getElementById("reserva-nombre").textContent = nombre;
    document.getElementById("reserva-apellidos").textContent = apellidos;
    document.getElementById("reserva-fecha-entrada").textContent = fechaEntrada;
    document.getElementById("reserva-fecha-salida").textContent = fechaSalida;
  
    // Muestra la sección de información de la reservación
    document.querySelector(".reserva-info").style.display = "block";
  }
  