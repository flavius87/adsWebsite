document.addEventListener('DOMContentLoaded', function () {
  // Obtener lista de todos los elementos afectados
  const sections = document.querySelectorAll('.fade'); 

  function handleScroll(element) {
      const windowHeight = window.innerHeight;

      // Calculamos la posición del elemento en relación con la ventana
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < windowHeight * 0.95) {
          // Si el elemento está cerca de la parte superior de la ventana, añadimos la clase fadeIn
          element.classList.remove('fadeOut');
          element.classList.add('fadeIn');
      } else {
          // Si el elemento no está cerca de la parte superior de la ventana, añadimos la clase fadeOut
          element.classList.remove('fadeIn');
          element.classList.add('fadeOut');
      }
  }

  // Evento de desplazamiento
  sections.forEach(section => {
      window.addEventListener('scroll', function () {
          handleScroll(section);
      });

      handleScroll(section);
  });
});
