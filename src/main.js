// Importar estilos globales
import './styles/global.css';

// Importar componentes
import { createHeader } from './components/Header.js';
import { createHero } from './components/hero/Hero';
import { createAbout } from './components/about/About';
import { createProjects } from './components/projects/Projects';
import { createExperience } from './components/experience/Experience';
import { createContact } from './components/contact/Contact';
import { createFooter } from './components/Footer.js';

// Importar utilidades
import { initThemeToggle } from './utils/themeToggle';
import { initNavigation } from './utils/navigation';

// Función para inicializar la aplicación
const initApp = () => {
  // Obtener el contenedor principal
  const app = document.querySelector('#app');
  if (!app) return;
  
  // Limpiar el contenedor
  app.innerHTML = '';
  
  // Crear y añadir componentes
  const header = createHeader();
  const hero = createHero();
  const about = createAbout();
  const projects = createProjects();
  const experience = createExperience();
  const contact = createContact();
  const footer = createFooter();
  
  // Añadir componentes al DOM
  app.appendChild(header);
  app.appendChild(hero);
  app.appendChild(about);
  app.appendChild(projects);
  app.appendChild(experience);
  app.appendChild(contact);
  app.appendChild(footer);
  
  // Inicializar funcionalidades
  initThemeToggle();
  initNavigation();
};

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initApp);

// Inicializar la aplicación
initApp();
