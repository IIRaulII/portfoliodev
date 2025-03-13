import './About.css';
export const createAbout = () => {
  // Crear el elemento principal
  const about = document.createElement('section');
  about.className = 'section about';
  about.id = 'about';
  // Crear el contenedor
  const container = document.createElement('div');
  container.className = 'container';
  // Crear el título de la sección
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = 'Sobre Mí';
  // Crear el contenedor del contenido
  const aboutContent = document.createElement('div');
  aboutContent.className = 'about-content';
  // Crear el contenedor del texto
  const aboutText = document.createElement('div');
  aboutText.className = 'about-text';
  // Crear los párrafos de texto como elementos individuales
  const skillsList = [
    '🚀 Gestión de proyectos - Planificación, ejecución y optimización de estrategias digitales.',
    '🛍️ Especialista en e-commerce - Maximización de conversión y visibilidad de productos.',
    '💡 Innovación y tecnología - Desarrollo y mantenimiento de sitios web con nuevas funcionalidades.',
    '🤝 Liderazgo y trabajo en equipo - Coordinación de equipos y comunicación efectiva con clientes y stakeholders.',
    '🔧 Desarrollo Full-Stack - Implementación de soluciones web con tecnologías modernas.'
  ];
  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-list';
  // Crear un párrafo para cada habilidad
  skillsList.forEach(skill => {
    const skillParagraph = document.createElement('p');
    skillParagraph.className = 'skill-item';
    skillParagraph.textContent = skill;
    skillsContainer.appendChild(skillParagraph);
  });
  aboutText.appendChild(skillsContainer);
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Siempre estoy ansioso por aprender nuevas tecnologías y mejorar mis habilidades para ofrecer las mejores soluciones posibles a mis clientes. ¡Creemos algo increíble juntos!';
  const skills = document.createElement('div');
  skills.className = 'skills';
  const skillsTitle = document.createElement('h3');
  skillsTitle.textContent = 'Mis Habilidades'
  // Crear el contenedor de categorías de habilidades
  const skillsContainer2 = document.createElement('div');
  skillsContainer2.className = 'skills-container';
  // Definir las categorías de habilidades
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React', 'Vue.js', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'RESTful APIs']
    },
    {
      title: 'Herramientas',
      skills: ['Git & GitHub', 'Webpack', 'Vite', 'VS Code', 'Figma']
    }
  ];
  // Crear las categorías de habilidades
  skillCategories.forEach(category => {
    // Crear el contenedor de la categoría
    const skillCategory = document.createElement('div');
    skillCategory.className = 'skill-category';
    // Crear el título de la categoría
    const categoryTitle = document.createElement('h4');
    categoryTitle.textContent = category.title;
    // Crear la lista de habilidades
    const skillList = document.createElement('ul');
    skillList.className = 'skill-list';
    // Crear los elementos de la lista
    category.skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.className = 'skill-item';
      skillItem.textContent = skill;
      skillList.appendChild(skillItem);
    });
    // Construir la categoría
    skillCategory.appendChild(categoryTitle);
    skillCategory.appendChild(skillList);
    // Agregar la categoría al contenedor
    skillsContainer2.appendChild(skillCategory);
  });
  // Construir la sección de habilidades
  skills.appendChild(skillsTitle);
  skills.appendChild(skillsContainer2);
  // Construir el texto
  aboutText.appendChild(paragraph2);
  aboutText.appendChild(skills);
  // Construir el contenido
  aboutContent.appendChild(aboutText);
  // Construir el contenedor
  container.appendChild(sectionTitle);
  container.appendChild(aboutContent);
  // Construir la sección
  about.appendChild(container);
  return about;
}; 