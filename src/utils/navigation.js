/**
 * Gestiona la navegación y el scroll suave
 */
export const initNavigation = () => {
  // Manejar navegación móvil
  const toggleMobileNav = () => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu && hamburger) {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    }
  };
  
  // Cerrar menú móvil al hacer clic en un enlace
  const closeMenuOnClick = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu && hamburger && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
        }
      });
    });
  };
  
  // Resaltar enlace activo según la sección visible
  const highlightActiveLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
      let current = '';
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = sectionId;
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  };
  
  // Inicializar eventos
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileNav);
  }
  
  closeMenuOnClick();
  highlightActiveLink();
  
  return {
    toggleMobileNav
  };
}; 