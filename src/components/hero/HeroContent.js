/**
 * Subcomponente HeroContent - Contenido principal del Hero
 */

export const createHeroContent = () => {
  // Crear el contenido principal
  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';
  
  // Crear el título
  const heroTitle = document.createElement('h1');
  heroTitle.className = 'hero-title';
  heroTitle.textContent = 'Hola, soy ';
  
  // Crear el span para resaltar el nombre
  const highlight = document.createElement('span');
  highlight.className = 'highlight';
  highlight.textContent = 'Raúl';
  heroTitle.appendChild(highlight);
  
  // Crear el subtítulo
  const heroSubtitle = document.createElement('h2');
  heroSubtitle.className = 'hero-subtitle';
  heroSubtitle.textContent = 'Desarrollador Web';
  
  // Crear la descripción
  const heroDescription = document.createElement('p');
  heroDescription.className = 'hero-description';
  heroDescription.textContent = 'Soy un apasionado Project Manager especializado en e-commerce y futuro desarrollador Full-Stack, con amplia experiencia en la gestión de marketplaces, tecnología y estrategia digital. A lo largo de mi carrera, he liderado equipos multidisciplinarios, optimizado procesos y desarrollado soluciones innovadoras que impulsan el crecimiento de negocios en el entorno digital.';
  
  // Crear el contenedor de botones
  const heroButtons = document.createElement('div');
  heroButtons.className = 'hero-buttons';
  
  // Crear botón de proyectos
  const projectsBtn = document.createElement('a');
  projectsBtn.href = '#projects';
  projectsBtn.className = 'btn';
  projectsBtn.textContent = 'Ver Proyectos';
  
  // Crear botón de contacto
  const contactBtn = document.createElement('a');
  contactBtn.href = '#contact';
  contactBtn.className = 'btn btn-outline';
  contactBtn.textContent = 'Contacto';
  
  // Agregar botones al contenedor
  heroButtons.appendChild(projectsBtn);
  heroButtons.appendChild(contactBtn);
  
  // Crear el contenedor de redes sociales
  const heroSocial = document.createElement('div');
  heroSocial.className = 'hero-social';
  
  // Array con las redes sociales
  const socialLinks = [
    { href: 'https://github.com/', icon: 'fab fa-github' },
    { href: 'https://linkedin.com/', icon: 'fab fa-linkedin' },
    { href: 'https://twitter.com/', icon: 'fab fa-twitter' }
  ];
  
  // Crear los enlaces de redes sociales
  socialLinks.forEach(social => {
    const link = document.createElement('a');
    link.href = social.href;
    link.className = 'social-link';
    link.setAttribute('target', '_blank');
    
    const icon = document.createElement('i');
    icon.className = social.icon;
    
    link.appendChild(icon);
    heroSocial.appendChild(link);
  });
  
  // Construir el contenido
  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroSubtitle);
  heroContent.appendChild(heroDescription);
  heroContent.appendChild(heroButtons);
  heroContent.appendChild(heroSocial);
  
  return heroContent;
}; 