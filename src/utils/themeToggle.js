/**
 * Gestiona el cambio entre modo claro y oscuro
 */
export const initThemeToggle = () => {
  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Aplicar tema guardado o usar preferencia del sistema
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  // Función para cambiar el tema
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Actualizar el texto del botón
    updateButtonText();
  };
  
  // Función para actualizar el texto del botón según el tema actual
  const updateButtonText = () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Limpiar el contenido actual del botón
    while (themeToggleBtn.firstChild) {
      themeToggleBtn.removeChild(themeToggleBtn.firstChild);
    }
    
    // Crear el icono
    const icon = document.createElement('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Agregar el icono al botón
    themeToggleBtn.appendChild(icon);
    
    // Agregar el texto al botón
    const text = document.createTextNode(currentTheme === 'dark' ? ' Modo Claro' : ' Modo Oscuro');
    themeToggleBtn.appendChild(text);
  };
  
  // Agregar evento al botón de cambio de tema
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
    updateButtonText();
  }
  
  return { toggleTheme };
}; 