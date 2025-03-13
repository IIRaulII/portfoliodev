/**
 * Componente Contact - Sección de Contacto
 */
import './Contact.css';
import { createContactInfo } from './ContactInfo';
import { createContactForm } from './ContactForm';

export const createContact = () => {
  // Crear el elemento principal
  const contact = document.createElement('section');
  contact.className = 'section contact';
  contact.id = 'contact';
  
  // Crear el contenedor
  const container = document.createElement('div');
  container.className = 'container';
  
  // Crear el título de la sección
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.textContent = 'Contacto';
  
  // Crear el contenedor de contacto
  const contactContainer = document.createElement('div');
  contactContainer.className = 'contact-container';
  
  // Obtener los subcomponentes
  const contactInfo = createContactInfo();
  const contactForm = createContactForm();
  
  // Construir el contenedor de contacto
  contactContainer.appendChild(contactInfo);
  contactContainer.appendChild(contactForm);
  
  // Construir el contenedor principal
  container.appendChild(sectionTitle);
  container.appendChild(contactContainer);
  
  // Construir la sección
  contact.appendChild(container);
  
  return contact;
}; 