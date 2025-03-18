// Validación del formulario de registro
document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const email = document.getElementById('email').value;

    // Validar que todos los campos estén llenos
    if (nombre && apellido && fechaNacimiento && email) {
        alert('Registro exitoso!');
        // Aquí puedes agregar lógica para enviar los datos a un servidor
    } else {
        alert('Por favor, complete todos los campos.');
    }
});