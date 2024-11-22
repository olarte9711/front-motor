# Front-Motor: Motor de Búsqueda Inteligente  

Este proyecto representa el frontend de un motor de búsqueda coorporativo, diseñado para interactuar con servicios de backend, inteligencia artificial (IA) y sistemas de indexación como Algolia. La aplicación permite a los usuarios realizar consultas sobre la organización, gestionar resultados mejorados por IA y garantizar una experiencia eficiente y atractiva.

## 🛠️ Tecnologías Utilizadas  
- **React.js**: Framework principal para el desarrollo de la interfaz de usuario.  
- **Vite**: Herramienta de desarrollo utilizada para configurar y optimizar la aplicación.  
- **JavaScript (ES6+)**: Lenguaje base para el desarrollo.  
- **CSS**: Para la personalización y diseño de estilos.  

## 📁 Estructura del Proyecto  

### **Raíz del Proyecto**  
- `vite.config.js`: Configuración del entorno de desarrollo.  
- `main.jsx`: Punto de entrada principal de la aplicación.  
- `App.jsx`: Componente raíz donde se centralizan las rutas y vistas principales.  

### **Carpeta `src`**  
Contiene el código fuente de la aplicación.  

#### **1. Components**  
Componentes reutilizables que construyen la interfaz:  
- **Modales (`modals/`)**: Componentes interactivos para capturar o mostrar información adicional.  
- **Tablas (`tables/`)**: Componentes para listar y organizar datos.  
- **Vistas (`views/`)**: Páginas principales como `Login`, `Motor`, y otras interfaces principales del usuario.  
- Componentes clave:  
  - `Header.jsx`: Barra de navegación principal.  
  - `Chat.jsx`: Módulo de interacción conversacional.  
  - `MainContent.jsx`: Contenedor principal para mostrar el contenido relevante del motor de búsqueda.  

#### **2. Helpers**  
Contiene lógica auxiliar para separar responsabilidades:  
- **`ApiHelper.js`**: Funciones para manejar las interacciones con el backend.  
- **`IAHelper.js`**: Funciones específicas para la integración con servicios de IA, como resúmenes o mejora de resultados.  

#### **3. Context**  
Gestión del estado global para compartir información entre componentes de forma eficiente.  

#### **4. Styles**  
Archivos CSS para personalizar la apariencia de los componentes y mantener consistencia en el diseño.  

## 🚀 Funcionalidades Principales  
1. **Búsqueda de documentos**: Los usuarios pueden realizar consultas utilizando palabras clave.  
2. **Mejora de resultados con IA**: Integración con un servicio de IA que analiza y optimiza los resultados entregados por el indexador (Algolia).  
3. **Interfaz intuitiva**: Componentes diseñados para ser claros y fáciles de usar, desde el inicio de sesión hasta la interacción con resultados de búsqueda.  

## 📦 Instalación  
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/olarte9711/front-motor.git
   cd front-motor
   ```
2. Instala dependencias:
    ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
    ```bash
   npm run dev
   ```

4. Abre la aplicacion en el navegador en :  **http://localhost:5173**


## 🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama para tu funcionalidad **(git checkout -b feature/nueva-funcionalidad)**.
Realiza tus cambios y confirma los commits.
Abre un Pull Request explicando los cambios realizados.

## 📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## 📧 Contacto
Para consultas o sugerencias, contacta al administrador del proyecto en: olarte9711@gmail.com.

¡Gracias por contribuir a Front-Motor! 🚀