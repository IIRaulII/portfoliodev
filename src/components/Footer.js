/**
 * Componente Footer - Pie de página
 */
import './Footer.css';

export const createFooter = () => {
  // Crear el elemento principal
  const footer = document.createElement('footer');
  footer.className = 'footer';
  
  // Crear el contenedor
  const container = document.createElement('div');
  container.className = 'container';
  
  // Crear el contenido del footer
  const footerContent = document.createElement('div');
  footerContent.className = 'footer-content';
  
  // Crear el logo
  const logo = document.createElement('div');
  logo.className = 'footer-logo';
  
  const logoLink = document.createElement('a');
  logoLink.href = '#';
  logoLink.textContent = 'Portfolio';
  
  logo.appendChild(logoLink);
  
  // Crear los enlaces de navegación
  const nav = document.createElement('nav');
  nav.className = 'footer-nav';
  
  const navList = document.createElement('ul');
  
  const navItems = [
    { text: 'Inicio', href: '#home' },
    { text: 'Sobre mí', href: '#about' },
    { text: 'Proyectos', href: '#projects' },
    { text: 'Experiencia', href: '#experience' },
    { text: 'Contacto', href: '#contact' }
  ];
  
  navItems.forEach(item => {
    const listItem = document.createElement('li');
    
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
  
  nav.appendChild(navList);
  
  // Crear los enlaces sociales
  const social = document.createElement('div');
  social.className = 'footer-social';
  
  const socialLinks = [
    { icon: 'github', href: 'https://github.com/' },
    { icon: 'linkedin', href: 'https://linkedin.com/' },
    { icon: 'twitter', href: 'https://twitter.com/' }
  ];
  
  socialLinks.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'social-link';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    const icon = document.createElement('i');
    icon.className = `fab fa-${item.icon}`;
    
    link.appendChild(icon);
    social.appendChild(link);
  });
  
  // Construir el contenido del footer
  footerContent.appendChild(logo);
  footerContent.appendChild(nav);
  footerContent.appendChild(social);
  
  // Crear el copyright
  const copyright = document.createElement('div');
  copyright.className = 'footer-copyright';
  
  const currentYear = new Date().getFullYear();
  copyright.textContent = `© ${currentYear} Portfolio. Todos los derechos reservados.`;
  
  // Construir el contenedor
  container.appendChild(footerContent);
  container.appendChild(copyright);
  
  // Construir el footer
  footer.appendChild(container);
  
  return footer;
}; 