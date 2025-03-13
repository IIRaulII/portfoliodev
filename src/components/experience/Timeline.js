/**
 * Componente Timeline - Genera líneas de tiempo para experiencia y educación
 */

export const createExperienceTimeline = (data) => {
  // Crear un array para almacenar los elementos de la línea de tiempo
  const timelineItems = [];
  
  // Generar los elementos de la línea de tiempo
  data.forEach(item => {
    // Crear el elemento de la línea de tiempo
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    // Crear el punto de la línea de tiempo
    const timelineDot = document.createElement('div');
    timelineDot.className = 'timeline-dot';
    
    // Crear el contenido de la línea de tiempo
    const timelineContent = document.createElement('div');
    timelineContent.className = 'timeline-content';
    
    // Crear el encabezado del contenido
    const timelineHeader = document.createElement('div');
    timelineHeader.className = 'timeline-header';
    
    // Crear el título
    const title = document.createElement('h3');
    title.textContent = item.title || item.degree;
    
    // Crear la empresa o institución
    const company = document.createElement('span');
    company.className = 'company';
    company.textContent = item.company || item.institution;
    
    // Crear el período
    const period = document.createElement('span');
    period.className = 'period';
    period.textContent = item.period;
    
    // Crear la descripción
    const description = document.createElement('p');
    description.textContent = item.description;
    
    // Construir el encabezado
    timelineHeader.appendChild(title);
    timelineHeader.appendChild(company);
    timelineHeader.appendChild(period);
    
    // Construir el contenido
    timelineContent.appendChild(timelineHeader);
    timelineContent.appendChild(description);
    
    // Construir el elemento de la línea de tiempo
    timelineItem.appendChild(timelineDot);
    timelineItem.appendChild(timelineContent);
    
    // Agregar el elemento al array
    timelineItems.push(timelineItem);
  });
  
  return timelineItems;
}; 