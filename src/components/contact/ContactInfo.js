/**
 * Subcomponente ContactInfo - Información de contacto
 */

export const createContactInfo = () => {
  // Crear la información de contacto
  const contactInfo = document.createElement('div');
  contactInfo.className = 'contact-info';
  
  // Crear el título de la información
  const infoTitle = document.createElement('h3');
  infoTitle.textContent = 'Hablemos';
  
  // Crear la descripción
  const infoDescription = document.createElement('p');
  infoDescription.textContent = 'Si estás interesado en trabajar juntos o tienes alguna pregunta, no dudes en contactarme.';
  
  // Crear la lista de información
  const infoList = document.createElement('ul');
  infoList.className = 'info-list';
  
  // Crear los elementos de la lista
  const infoItems = [
    { icon: 'mail', text: 'raulmontoyareina@gmail.com' },
    { icon: 'phone', text: '+34 608 13 13 18' },
    { icon: 'map-pin', text: 'Almería, España' }
  ];
  
  infoItems.forEach(item => {
    const listItem = document.createElement('li');
    
    const icon = document.createElement('i');
    icon.className = `feather-${item.icon}`;
    
    const text = document.createElement('span');
    text.textContent = item.text;
    
    listItem.appendChild(icon);
    listItem.appendChild(text);
    
    infoList.appendChild(listItem);
  });
  
  // Construir la información de contacto
  contactInfo.appendChild(infoTitle);
  contactInfo.appendChild(infoDescription);
  contactInfo.appendChild(infoList);
  
  return contactInfo;
}; 