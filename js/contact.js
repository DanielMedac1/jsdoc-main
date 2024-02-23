/**
 * Función para manejar el envío del formulario de contacto.
 * @param {Event} e - Objeto de evento asociado al envío del formulario.
 */
function handleSubmit(e) {
    e.preventDefault(); // Previene la recarga de la página

    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Verifica si el nombre y el mensaje no están vacíos
    if (name.trim() !== '' && message.trim() !== '') {
        alert(`¡Gracias por tu mensaje, ${name}!`);
        document.getElementById('contactForm').reset(); // Resetea el formulario después del envío
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

/**
 * Función para inicializar el formulario de contacto.
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleSubmit);
}

// Espera a que el DOM esté completamente cargado antes de ejecutar la inicialización del formulario.
document.addEventListener('DOMContentLoaded', initializeContactForm);
