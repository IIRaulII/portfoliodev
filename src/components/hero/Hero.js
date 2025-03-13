/**
 * Componente Hero - Sección principal con presentación
 */
import './Hero.css';
import { createHeroContent } from './HeroContent';
import { createHeroImage } from './HeroImage';

export const createHero = () => {
  // Crear el elemento principal
  const hero = document.createElement('section');
  hero.className = 'hero';
  
  // Crear el contenedor
  const container = document.createElement('div');
  container.className = 'container hero-container';
  
  // Obtener los subcomponentes
  const heroContent = createHeroContent();
  const heroImage = createHeroImage();
  
  // Construir la estructura del componente
  container.appendChild(heroContent);
  container.appendChild(heroImage);
  
  hero.appendChild(container);
  
  return hero;
}; 