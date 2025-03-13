/**
 * Componente Projects - Sección de Proyectos
 */
import './Projects.css';
import { projectsData } from './ProjectData';
import { createProjectCard } from './ProjectCard';

export const createProjects = () => {
  // Crear el elemento principal
  const projects = document.createElement('section');
  projects.className = 'section projects';
  projects.id = 'projects';
  
  // Crear el contenedor
  const container = document.createElement('div');
  container.className = 'container';
  
  // Crear el título de la sección
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = 'Mis Proyectos';
  
  // Crear el contenedor de proyectos
  const projectsGrid = document.createElement('div');
  projectsGrid.className = 'projects-grid';
  
  // Crear y agregar las tarjetas de proyectos
  projectsData.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
  
  // Construir la estructura del componente
  container.appendChild(sectionTitle);
  container.appendChild(projectsGrid);
  projects.appendChild(container);
  
  return projects;
}; 