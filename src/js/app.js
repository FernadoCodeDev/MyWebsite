document.addEventListener('DOMContentLoaded', function() {
  darkMode(); 
  navegacionResponsive(); 
  checkScreenSize(); 
  eventListeners(); 
  ReadMore();
  startPaginator(); 
});

// Event Listeners
function eventListeners() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.addEventListener('click', navegacionResponsive);
  window.addEventListener('resize', checkScreenSize);
}

// Navegación Responsive
function navegacionResponsive() {
  const navegacion = document.querySelector('.navegacion');
  navegacion.classList.toggle('mostrar'); // Mostrar u ocultar menú
}

// Verificar tamaño de pantalla
function checkScreenSize() {
  const navegacion = document.querySelector('.navegacion');
  if (window.innerWidth >= 768) {
    navegacion.classList.remove('mostrar');
  }
}

// Modo oscuro
const darkMode = () => {
  const preference = window.matchMedia('()'); //(prefers-color-scheme: dark) Leer preferencias

  if (preference.matches) {
    document.body.classList.add('DarkMode-function');
  } else {
    document.body.classList.remove('DarkMode-function');
  }

  preference.addEventListener('change', function() {
    if (preference.matches) {
      document.body.classList.add('DarkMode-function');
    } else {
      document.body.classList.remove('DarkMode-function');
    }
  });

  const botonDarkMode = document.querySelector('.DarkMode');
  botonDarkMode.addEventListener('click', function() {
    document.body.classList.toggle('DarkMode-function');
  });
};

// Leer más
const ReadMore = () => {
  document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
      const description = button.previousElementSibling;
      if (description.classList.contains('expanded')) {
        description.classList.remove('expanded');
        button.textContent = 'Leer más';
      } else {
        description.classList.add('expanded');
        button.textContent = 'Ocultar';
      }
    });
  });
};

// Paginador
let step = 1; // Estado inicial

// Lista de colores para cada boton del paginador
const sectionColors = [
  '#FF7F50',  // Coral - Frontend
  '#001F3F',  // NavyBlue - Backend
  '#228B22',  // ForestGreen - Base de datos
  '#FFC107',  // SunflowerYellow - Aprendiendo
  '#708090',  // SteelGray - Herramientas
  '#D2691E'   // Terracotta - Prácticas de desarrollo
];

const startPaginator = () => {
  PaginatorSection();
  TabsPaginator();
};

const PaginatorSection = () => {
  const Paginatorstages = document.querySelectorAll('.SectionPage');
  Paginatorstages.forEach(Paginatorstage => {
    Paginatorstage.classList.remove('ShowPage');
  });

  const CurrentStage = document.querySelector(`#page-${step}`);
  CurrentStage.classList.add('ShowPage');

  const PreviousStage = document.querySelector('.CurrentStage');
  if (PreviousStage) {
    PreviousStage.classList.remove('CurrentStage');
    PreviousStage.style.borderColor = '';
    PreviousStage.style.setProperty('--current-bg-color', '');
  }

  const Step = document.querySelector(`[data-page="${step}"]`);
  Step.classList.add('CurrentStage');

  const currentColor = sectionColors[step - 1];
  Step.style.borderColor = currentColor;
  Step.style.setProperty('--current-bg-color', currentColor);
};

const TabsPaginator = () => {
  const buttons = document.querySelectorAll('.TabsPaginator button');
  buttons.forEach(bt => {
    bt.addEventListener('click', function(e) {
      step = parseInt(e.target.dataset.page);
      PaginatorSection();
    });
  });
};
