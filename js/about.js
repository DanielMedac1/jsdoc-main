/**
 * Función para cambiar la imagen cuando se hace clic en ella.
 * @param {Event} e - Objeto de evento asociado al clic en la imagen.
 * @param {string[]} images - Array de rutas de las imágenes.
 * @param {number} currentIndex - Índice actual de la imagen mostrada.
 */
function changeImageOnClick(e, images, currentIndex) {
    currentIndex = (currentIndex + 1) % images.length;
    e.target.src = images[currentIndex];
}

/**
 * Función para inicializar el carrusel de imágenes.
 * @param {string[]} images - Array de rutas de las imágenes.
 */
function initializeImageCarousel(images) {
    let currentIndex = 0;

    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];
    document.querySelector('.content').appendChild(imageElement);

    imageElement.addEventListener('click', (e) => changeImageOnClick(e, images, currentIndex));
}

// Array de rutas de las imágenes
const images = [
    './images/imagen1.png',
    './images/imagen2.jpg',
    './images/imagen3.png'
];

// Espera a que el DOM esté completamente cargado antes de ejecutar la inicialización del carrusel de imágenes.
document.addEventListener('DOMContentLoaded', () => initializeImageCarousel(images));

