/**Componente Experience - Sección de Experiencia y Educación*/
import './Experience.css';
import { experienceData, educationData } from './TimelineData';
import { createExperienceTimeline } from './Timeline';

export const createExperience = () => {
  // Crear el elemento principal
  const experience = document.createElement('section');
  experience.className = 'section experience';
  experience.id = 'experience';
  
  // Crear el contenedor
  const container = document.createElement('div');
  container.className = 'container';
  
  // Crear el título de la sección
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = 'Mi Trayectoria';
  
  // Crear el contenedor de pestañas
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabs-container';
  // Crear las pestañas
  const tabs = document.createElement('div');
  tabs.className = 'tabs';
  // Crear el botón de experiencia
  const experienceBtn = document.createElement('button');
  experienceBtn.className = 'tab-btn active';
  experienceBtn.setAttribute('data-tab', 'experience');
  experienceBtn.textContent = 'Experiencia';
  // Crear el botón de educación
  const educationBtn = document.createElement('button');
  educationBtn.className = 'tab-btn';
  educationBtn.setAttribute('data-tab', 'education');
  educationBtn.textContent = 'Educación';
  // Agregar botones a las pestañas
  tabs.appendChild(experienceBtn);
  tabs.appendChild(educationBtn);
  // Crear el contenedor de contenido de pestañas
  const tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  // Crear el panel de experiencia
  const experienceTab = document.createElement('div');
  experienceTab.className = 'tab-pane active';
  experienceTab.id = 'experience-tab';
  // Crear la línea de tiempo de experiencia
  const experienceTimeline = document.createElement('div');
  experienceTimeline.className = 'timeline';
  // Agregar los elementos de experiencia
  const experienceItems = createExperienceTimeline(experienceData);
  experienceItems.forEach(item => {
    experienceTimeline.appendChild(item);
  });
  // Agregar la línea de tiempo al panel de experiencia
  experienceTab.appendChild(experienceTimeline);
  // Crear el panel de educación
  const educationTab = document.createElement('div');
  educationTab.className = 'tab-pane';
  educationTab.id = 'education-tab';
  // Crear la línea de tiempo de educación
  const educationTimeline = document.createElement('div');
  educationTimeline.className = 'timeline';
  // Agregar los elementos de educación
  const educationItems = createExperienceTimeline(educationData);
  educationItems.forEach(item => {
    educationTimeline.appendChild(item);
  });
  // Agregar la línea de tiempo al panel de educación
  educationTab.appendChild(educationTimeline);
  // Agregar los paneles al contenedor de contenido
  tabContent.appendChild(experienceTab);
  tabContent.appendChild(educationTab);
  // Construir el contenedor de pestañas
  tabsContainer.appendChild(tabs);
  tabsContainer.appendChild(tabContent);
  // Construir el contenedor principal
  container.appendChild(sectionTitle);
  container.appendChild(tabsContainer);
  // Construir la sección
  experience.appendChild(container);
  // Agregar event listeners para las pestañas
  experience.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
      const tabId = e.target.getAttribute('data-tab');
      // Actualizar botones activos
      const tabBtns = experience.querySelectorAll('.tab-btn');
      tabBtns.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      // Mostrar contenido de pestaña seleccionada
      const tabPanes = experience.querySelectorAll('.tab-pane');
      tabPanes.forEach(pane => pane.classList.remove('active'));
      const activePane = tabId === 'experience' ? 
        experience.querySelector('#experience-tab') : 
        experience.querySelector('#education-tab');
      activePane.classList.add('active');
    }
  });
  return experience;
}; 