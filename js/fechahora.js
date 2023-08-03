document.getElementById("fechaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los valores ingresados por el usuario
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var anio = parseInt(document.getElementById("anio").value);

    // Obtener la fecha actual
    var fechaActual = new Date();

    // Crear un objeto Date con la fecha ingresada por el usuario
    var fechaIngresada = new Date(anio, mes - 1, dia); // Restar 1 al mes porque en JavaScript los meses van de 0 a 11

    // Comparar la fecha ingresada con la fecha actual
    if (fechaIngresada.getTime() > fechaActual.getTime()) {
        // La fecha ingresada es posterior a la fecha actual
        var tiempoFaltante = fechaIngresada.getTime() - fechaActual.getTime();

        var segundosFaltantes = Math.floor(tiempoFaltante / 1000);
        var minutosFaltantes = Math.floor(segundosFaltantes / 60);
        var horasFaltantes = Math.floor(minutosFaltantes / 60);
        var diasFaltantes = Math.floor(horasFaltantes / 24);

        segundosFaltantes %= 60;
        minutosFaltantes %= 60;
        horasFaltantes %= 24;

        document.getElementById("resultado").textContent = "Faltan " + diasFaltantes + " días, " + horasFaltantes + " horas, " + minutosFaltantes + " minutos y " + segundosFaltantes + " segundos para esa fecha.";
    } else if (fechaIngresada.getTime() < fechaActual.getTime()) {
        // La fecha ingresada es anterior a la fecha actual
        document.getElementById("resultado").textContent = "Ya pasó la fecha ingresada.";
    } else {
        // La fecha ingresada es igual a la fecha actual
        document.getElementById("resultado").textContent = "La fecha ingresada es hoy.";
    }
});