// Usa JavaScript para cambiar el texto del botón al hacer clic.

// Selecciona el botón
const button = document.querySelector('button');

// Agrega un evento de clic al botón
button.addEventListener('click', () => {
  // Cambia el texto del botón
  button.textContent = '¡Gracias por hacer clic!';
});

