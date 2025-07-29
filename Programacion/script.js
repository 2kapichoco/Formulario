    

    // Capturar datos del formulario sin recargar
    document.getElementById("registroForm").addEventListener("submit", e => {
      e.preventDefault(); // evita recarga
      const datos = new FormData(e.target);
      alert(
        `Datos enviados:\n` +
        `Nombre: ${datos.get("nombre")}\n` +
        `Correo: ${datos.get("email")}\n` +
        `Edad: ${datos.get("edad")}\n` +
        `Teléfono: ${datos.get("telefono")}`
      );
    });