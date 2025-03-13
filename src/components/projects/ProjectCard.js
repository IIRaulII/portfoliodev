/**
 * Subcomponente ProjectCard - Tarjeta individual de proyecto
 */

export const createProjectCard = (project) => {
  // Crear la tarjeta del proyecto
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  
  // Crear la sección de imagen
  const projectImage = document.createElement('div');
  projectImage.className = 'project-image';
  
  // Crear la imagen
  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;
  
  // Crear los enlaces del proyecto
  const projectLinks = document.createElement('div');
  projectLinks.className = 'project-links';
  
  // Crear enlace de demo
  const demoLink = document.createElement('a');
  demoLink.href = project.liveLink;
  demoLink.className = 'project-link';
  demoLink.setAttribute('target', '_blank');
  
  const demoIcon = document.createElement('i');
  demoIcon.className = 'fas fa-external-link-alt';
  
  demoLink.appendChild(demoIcon);
  demoLink.append(' Demo');
  
  // Crear enlace de código
  const codeLink = document.createElement('a');
  codeLink.href = project.repoLink;
  codeLink.className = 'project-link';
  codeLink.setAttribute('target', '_blank');
  
  const codeIcon = document.createElement('i');
  codeIcon.className = 'fab fa-github';
  
  codeLink.appendChild(codeIcon);
  codeLink.append(' Código');
  
  // Agregar enlaces a la sección de enlaces
  projectLinks.appendChild(demoLink);
  projectLinks.appendChild(codeLink);
  
  // Agregar imagen y enlaces a la sección de imagen
  projectImage.appendChild(img);
  projectImage.appendChild(projectLinks);
  
  // Crear la sección de información
  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';
  
  // Crear el título del proyecto
  const projectTitle = document.createElement('h3');
  projectTitle.className = 'project-title';
  projectTitle.textContent = project.title;
  
  // Crear la descripción del proyecto
  const projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.textContent = project.description;
  
  // Crear la sección de tecnologías
  const projectTech = document.createElement('div');
  projectTech.className = 'project-tech';
  
  // Crear las etiquetas de tecnologías
  project.technologies.forEach(tech => {
    const techTag = document.createElement('span');
    techTag.className = 'tech-tag';
    techTag.textContent = tech;
    projectTech.appendChild(techTag);
  });
  
  // Agregar elementos a la sección de información
  projectInfo.appendChild(projectTitle);
  projectInfo.appendChild(projectDescription);
  projectInfo.appendChild(projectTech);
  
  // Construir la tarjeta del proyecto
  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectInfo);
  
  return projectCard;
}; 