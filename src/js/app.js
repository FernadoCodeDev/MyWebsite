document.addEventListener('DOMContentLoaded', function() {
  // Inicializamos ambas funciones al cargar la página
  darkMode(); 
  navegacionResponsive(); 
  checkScreenSize();
  eventListeners();
  RemoveAlert();
});

function eventListeners() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.addEventListener('click', navegacionResponsive);

  // Listener para el redimensionamiento de la pantalla
  window.addEventListener('resize', checkScreenSize);
}

function navegacionResponsive() {
  const navegacion = document.querySelector('.navegacion');
  navegacion.classList.toggle('mostrar'); // Aquí cambia el menú de estado
}

function checkScreenSize() {
  const navegacion = document.querySelector('.navegacion');
  
  // Si la pantalla es más grande que 768px, eliminamos la clase 'mostrar'
  if (window.innerWidth >= 768) {
    navegacion.classList.remove('mostrar');
  }
}

const darkMode = () => {
  const preference = window.matchMedia('(dark)');
  
  // Comprobar preferencia inicial del modo oscuro
  if (preference.matches) {
    document.body.classList.add('DarkMode-function');
  } else {
    document.body.classList.remove('DarkMode-function');
  }

  // Detectar cambios en la preferencia de modo oscuro
  preference.addEventListener('change', function() {
    if (preference.matches) {
      document.body.classList.add('DarkMode-function');
    } else {
      document.body.classList.remove('DarkMode-function');
    }
  });

  // Evento para cambiar modo oscuro manualmente
  const botonDarkMode = document.querySelector('.DarkMode');
  botonDarkMode.addEventListener('click', function() {
    document.body.classList.toggle('DarkMode-function');
  });
};


const RemoveAlert = () => {
  setTimeout(function() {
    const mensaje = document.getElementById('alert');
    if (mensaje) {
        mensaje.style.display = 'none'; // Ocultar el mensaje
    }
}, 10000); // 10 segundos

}