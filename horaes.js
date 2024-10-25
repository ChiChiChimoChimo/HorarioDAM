function marcarClaseActual() {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const horarios = [
        { inicio: "15:30", fin: "16:30" },
        { inicio: "16:30", fin: "17:30" },
        { inicio: "17:30", fin: "18:30" },
        { inicio: "18:30", fin: "19:00" }, // Recreo
        { inicio: "19:00", fin: "20:00" },
        { inicio: "20:00", fin: "21:00" },
        { inicio: "21:00", fin: "22:00" }
    ];

    // Obtener día y hora actual
    const ahora = new Date();
    const diaActual = dias[ahora.getDay()];
    const horaActual = ahora.getHours() + ":" + ("0" + ahora.getMinutes()).slice(-2);

    // Buscar el índice del día y horario actual
    const diaIndex = dias.indexOf(diaActual);

    if (diaIndex === -1 || diaIndex === 0 || diaIndex > 5) {
        console.log("Hoy no hay clases.");
        return;
    }

    // Verificar en qué horario cae la hora actual
    let horarioIndex = -1;
    for (let i = 0; i < horarios.length; i++) {
        if (horaActual >= horarios[i].inicio && horaActual < horarios[i].fin) {
            horarioIndex = i;
            break;
        }
    }

    if (horarioIndex === -1) {
        console.log("Actualmente no hay clases.");
        return;
    }

    // Marcar la clase actual
    const tabla = document.querySelector(".tablat");
    if (tabla) {
        const fila = tabla.rows[horarioIndex + 2]; // Ajuste para saltar encabezado y primer fila de horas
        const celda = fila.cells[diaIndex];
        if (celda) {
            celda.style.border = "8px solid red"; // Marcar la celda con borde rojo
        }
    }
}

// Llama a la función al cargar la página y repite cada minuto
window.onload = () => {
    marcarClaseActual();
    setInterval(marcarClaseActual, 60000);
};
