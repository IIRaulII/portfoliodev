/**
 * Subcomponente HeroImage - Imagen del Hero
 */

export const createHeroImage = () => {
  // Crear el contenedor de la imagen
  const heroImage = document.createElement('div');
  heroImage.className = 'hero-image';
  
  // Crear el contenedor interno de la imagen
  const heroImageContainer = document.createElement('div');
  heroImageContainer.className = 'hero-image-container';
  
  // Crear la imagen
  const img = document.createElement('img');
  img.src = '/public/avatar.png';
  img.alt = 'Foto de perfil';
  
  // Construir la estructura
  heroImageContainer.appendChild(img);
  heroImage.appendChild(heroImageContainer);
  
  return heroImage;
}; 