# Portfolio Web Personal

## Descripción
Este proyecto es un portfolio web personal desarrollado con JavaScript vanilla, HTML y CSS. Está diseñado para mostrar de manera profesional tus habilidades, proyectos y experiencia como desarrollador web.

## Características
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (móvil, tablet, escritorio)
- **Modo Oscuro/Claro**: Cambio de tema con un solo clic
- **Navegación Suave**: Desplazamiento fluido entre secciones
- **Estructura Modular**: Componentes separados para facilitar el mantenimiento
- **Manipulación DOM Nativa**: Uso de métodos nativos del DOM para mayor seguridad y rendimiento

## Secciones
- **Header**: Navegación principal y botón de cambio de tema
- **Hero**: Presentación personal con enlaces a redes sociales
- **Sobre Mí**: Información personal y habilidades técnicas
- **Proyectos**: Galería de proyectos con enlaces a demos y repositorios
- **Experiencia**: Historial profesional y educativo en formato de línea de tiempo
- **Contacto**: Formulario de contacto e información de contacto
- **Footer**: Enlaces adicionales y copyright

## Tecnologías Utilizadas
- **JavaScript (ES6+)**: Para la lógica y manipulación del DOM
- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **Vite**: Como herramienta de desarrollo y construcción
- **Font Awesome**: Para iconos y elementos visuales

## Estructura del Proyecto
```
/src
├── assets/           # Imágenes y recursos estáticos
├── components/       # Componentes modulares
│   ├── about/        # Componente "Sobre Mí"
│   ├── contact/      # Componente de contacto
│   ├── experience/   # Componente de experiencia
│   ├── hero/         # Componente principal
│   ├── projects/     # Componente de proyectos
│   ├── Footer.js     # Componente de pie de página
│   └── Header.js     # Componente de encabezado
├── styles/           # Estilos globales y variables
│   ├── global.css    # Estilos globales
│   └── variables.css # Variables CSS (colores, espaciados, etc.)
├── utils/            # Utilidades y funciones auxiliares
└── main.js           # Punto de entrada de la aplicación
```

## Instalación y Uso
1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/portfolio-web.git
   cd portfolio-web
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Para construir la versión de producción:
   ```
   npm run build
   ```

## Personalización
- Modifica los datos en los archivos de componentes para incluir tu información personal
- Ajusta las variables CSS en `src/styles/variables.css` para cambiar colores, fuentes y espaciados
- Reemplaza las imágenes en la carpeta `assets` con tus propias imágenes

## Buenas Prácticas Implementadas
- **Código Limpio**: Ningún archivo supera las 100 líneas de código
- **Separación de Responsabilidades**: Cada componente tiene su propio archivo CSS
- **Manipulación DOM Segura**: Uso de métodos nativos en lugar de innerHTML
- **Diseño Responsivo**: Adaptable a diferentes dispositivos
- **Accesibilidad**: Estructura semántica y contraste adecuado

## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto
Para cualquier pregunta o sugerencia, no dudes en contactarme:
- Email: raulmontoyareina@gmail.com
