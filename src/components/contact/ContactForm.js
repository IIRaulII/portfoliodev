/**
 * Subcomponente ContactForm - Formulario de contacto
 */

export const createContactForm = () => {
  // Crear el formulario de contacto
  const contactForm = document.createElement('div');
  contactForm.className = 'contact-form';
  
  // Crear el título del formulario
  const formTitle = document.createElement('h3');
  formTitle.textContent = 'Envíame un mensaje';
  
  // Crear el formulario
  const form = document.createElement('form');
  form.id = 'contact-form';
  
  // Crear los campos del formulario
  const formGroups = [
    { type: 'text', id: 'name', label: 'Nombre', required: true },
    { type: 'email', id: 'email', label: 'Email', required: true },
    { type: 'text', id: 'subject', label: 'Asunto', required: true }
  ];
  
  formGroups.forEach(group => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    
    const label = document.createElement('label');
    label.setAttribute('for', group.id);
    label.textContent = group.label;
    
    const input = document.createElement('input');
    input.type = group.type;
    input.id = group.id;
    input.name = group.id;
    if (group.required) {
      input.required = true;
    }
    
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    
    form.appendChild(formGroup);
  });
  
  // Crear el grupo de mensaje
  const messageGroup = document.createElement('div');
  messageGroup.className = 'form-group';
  
  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Mensaje';
  
  const messageTextarea = document.createElement('textarea');
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  messageTextarea.rows = 5;
  messageTextarea.required = true;
  
  messageGroup.appendChild(messageLabel);
  messageGroup.appendChild(messageTextarea);
  
  form.appendChild(messageGroup);
  
  // Crear el botón de envío
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'btn btn-primary';
  submitBtn.textContent = 'Enviar Mensaje';
  
  form.appendChild(submitBtn);
  
  // Agregar event listener al formulario
  form.addEventListener('submit', handleSubmit);
  
  // Construir el formulario de contacto
  contactForm.appendChild(formTitle);
  contactForm.appendChild(form);
  
  return contactForm;
};

// Función para manejar el envío del formulario
const handleSubmit = (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado', Object.fromEntries(formData));
  
  // Mostrar mensaje de éxito
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = '¡Mensaje enviado con éxito! Me pondré en contacto contigo lo antes posible.';
  
  // Reemplazar el formulario con el mensaje de éxito
  form.parentNode.replaceChild(successMessage, form);
}; 