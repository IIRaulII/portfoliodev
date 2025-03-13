/**
 * Componente Header - Contiene la navegación principal y el botón de cambio de tema
 */
import './Header.css';

export const createHeader = () => {
  // Crear el elemento header
  const header = document.createElement('header');
  header.className = 'header';
  
  // Crear el contenedor
  const container = document.createElement('div');
  container.className = 'container';
  
  // Crear la navegación
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  
  // Crear el logo
  const logo = document.createElement('a');
  logo.href = '#';
  logo.className = 'logo';
  logo.textContent = '</>';
  
  // Crear el botón hamburguesa para móvil
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  
  // Crear las barras del botón hamburguesa
  for (let i = 0; i < 3; i++) {
    const bar = document.createElement('span');
    bar.className = 'bar';
    hamburger.appendChild(bar);
  }
  
  // Crear el menú de navegación
  const navMenu = document.createElement('ul');
  navMenu.className = 'nav-menu';
  
  // Array con los elementos del menú
  const menuItems = [
    { href: '#about', text: 'Sobre Mí' },
    { href: '#projects', text: 'Proyectos' },
    { href: '#experience', text: 'Experiencia' },
    { href: '#contact', text: 'Contacto' }
  ];
  
  // Crear los elementos del menú
  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.className = 'nav-link';
    a.textContent = item.text;
    li.appendChild(a);
    navMenu.appendChild(li);
  });
  
  // Crear el botón de cambio de tema
  const themeLi = document.createElement('li');
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.className = 'theme-toggle';
  
  // Crear el icono para el botón de tema
  const themeIcon = document.createElement('i');
  themeIcon.className = 'fas fa-moon';
  
  // Agregar el icono y el texto al botón
  themeToggle.appendChild(themeIcon);
  themeToggle.append(' Modo Oscuro'); // Agregar texto después del icono
  
  // Agregar el botón al elemento de lista
  themeLi.appendChild(themeToggle);
  navMenu.appendChild(themeLi);
  
  // Construir la estructura del componente
  navbar.appendChild(logo);
  navbar.appendChild(hamburger);
  navbar.appendChild(navMenu);
  container.appendChild(navbar);
  header.appendChild(container);
  
  return header;
};
