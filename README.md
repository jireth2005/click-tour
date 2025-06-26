# Tour Click Bolivia 🇧🇴

**¡A un click de tu próxima aventura!**

Tour Click es un prototipo funcional de una red social turística comunitaria. Su objetivo es conectar a turistas con propietarios de lugares turísticos, hospedajes y restaurantes ubicados en Bolivia, promoviendo experiencias sostenibles y auténticas.

![Tour Click Preview](https://i.imgur.com/example.jpg)

## 🚀 Características

- **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles y de escritorio
- **Interfaz Intuitiva**: Navegación sencilla con pestañas para Inicio, Mapa, Explorar y Perfil
- **Mapa Interactivo**: Visualización de lugares turísticos, hoteles y restaurantes en Bolivia
- **Perfiles Personalizables**: Tanto para turistas como para propietarios de lugares
- **Feed Social**: Estilo red social con publicaciones, likes y comentarios
- **Exploración de Lugares**: Recomendaciones y búsqueda de destinos

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web moderno y rápido
- [React](https://reactjs.org/) - Para componentes interactivos
- [TailwindCSS](https://tailwindcss.com/) - Para el diseño y estilos
- [Leaflet](https://leafletjs.com/) - Para mapas interactivos

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/tour-click-base.git
cd tour-click-base
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 📱 Páginas Disponibles

- `/login` - Página de inicio de sesión/registro
- `/` - Feed principal (inicio)
- `/mapa` - Mapa interactivo de Bolivia
- `/explorar` - Descubrimiento de lugares
- `/perfil` - Perfil de usuario

## 🏗️ Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
tour-click-base/
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── places/    # Imágenes de lugares turísticos
│   │       ├── hotels/    # Imágenes de hoteles
│   │       ├── restaurants/ # Imágenes de restaurantes
│   │       ├── users/     # Imágenes de perfiles de usuario
│   │       └── posts/     # Imágenes de publicaciones
│   ├── components/        # Componentes reutilizables
│   ├── data/              # Archivos JSON con datos
│   │   ├── places.json    # Información de lugares
│   │   ├── icons.json     # Configuración de iconos
│   │   ├── posts.json     # Publicaciones de usuarios
│   │   ├── users.json     # Información de usuarios
│   │   └── index.js       # Exportación de todos los datos
│   ├── layouts/           # Layouts de la aplicación
│   ├── pages/             # Páginas de la aplicación
│   └── styles/            # Estilos globales
```

## Datos

Los datos de la aplicación se encuentran en la carpeta `src/data/` organizados en diferentes archivos JSON:

### places.json

Contiene información sobre lugares turísticos, hoteles y restaurantes:

```json
{
  "id": 1,
  "name": "Nombre del lugar",
  "type": "attraction|hotel|restaurant",
  "lat": -16.5000,
  "lng": -68.1500,
  "description": "Descripción del lugar",
  "rating": 4.5,
  "image": "/assets/images/places/imagen.jpg"
}
```

### posts.json

Contiene las publicaciones de los usuarios:

```json
{
  "id": 1,
  "user": {
    "id": 101,
    "name": "Nombre Usuario"
  },
  "place": {
    "id": 1,
    "name": "Nombre Lugar"
  },
  "content": "Texto de la publicación",
  "images": ["/assets/images/posts/imagen1.jpg"],
  "likes": 245,
  "comments": 32,
  "date": "2023-06-15T14:30:00Z"
}
```

### users.json

Contiene información de los usuarios:

```json
{
  "id": 101,
  "name": "Nombre Usuario",
  "username": "nombre_usuario",
  "avatar": "/assets/images/users/avatar.jpg",
  "bio": "Descripción del usuario",
  "followers": 1240,
  "following": 350,
  "posts": 87
}
```

## Imágenes

Las imágenes se organizan en las siguientes carpetas:

- `/src/assets/images/places/`: Imágenes de lugares turísticos
- `/src/assets/images/hotels/`: Imágenes de hoteles
- `/src/assets/images/restaurants/`: Imágenes de restaurantes
- `/src/assets/images/users/`: Imágenes de perfiles de usuario
- `/src/assets/images/posts/`: Imágenes de publicaciones

## Uso de los Datos

Para utilizar los datos en los componentes:

```js
// Importar los datos
import { places, posts, users, icons } from '../data';

// Obtener un lugar por su ID
const place = places.find(p => p.id === 1);

// Obtener un usuario por su ID
const user = users.find(u => u.id === 101);

// Obtener una publicación por su ID
const post = posts.find(p => p.id === 1);
```

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/` y pueden ser servidos por cualquier servidor web estático.

## 👥 Contribuciones

Este proyecto fue desarrollado como prototipo para la feria universitaria JETS UTEPSA. Las contribuciones son bienvenidas mediante pull requests.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Desarrollado con 💚 para promover el turismo sostenible en Bolivia.
