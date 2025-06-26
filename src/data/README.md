# Estructura de Datos

Este directorio contiene todos los archivos JSON con los datos utilizados en la aplicación.

## Archivos Disponibles

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
  "image": "/src/assets/images/places/imagen.jpg"
}
```

### icons.json

Configuración de iconos para los diferentes tipos de lugares:

```json
{
  "hotel": {
    "url": "https://cdn-icons-png.flaticon.com/512/3170/3170733.png",
    "size": [32, 32]
  },
  "restaurant": {
    "url": "https://cdn-icons-png.flaticon.com/512/685/685352.png",
    "size": [32, 32]
  },
  "attraction": {
    "url": "https://cdn-icons-png.flaticon.com/512/3175/3175239.png",
    "size": [32, 32]
  }
}
```

### posts.json

Contiene las publicaciones de los usuarios:

```json
{
  "id": 1,
  "user": {
    "id": 101,
    "name": "Nombre Usuario",
    "avatar": "/src/assets/images/users/avatar.jpg"
  },
  "place": {
    "id": 1,
    "name": "Nombre Lugar"
  },
  "content": "Texto de la publicación",
  "images": ["/src/assets/images/posts/imagen1.jpg"],
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
  "avatar": "/src/assets/images/users/avatar.jpg",
  "bio": "Descripción del usuario",
  "followers": 1240,
  "following": 350,
  "posts": 87
}
```

## Uso

Para utilizar estos datos en los componentes, importa el archivo `index.js`:

```js
// Importar todos los datos
import { places, posts, users, icons } from '../data';

// O importar solo lo que necesites
import { places } from '../data';
```

## Convenciones para Imágenes

Las rutas de las imágenes deben seguir estas convenciones:

- Lugares turísticos: `/src/assets/images/places/nombre-del-lugar.jpg`
- Hoteles: `/src/assets/images/hotels/nombre-del-hotel.jpg`
- Restaurantes: `/src/assets/images/restaurants/nombre-del-restaurante.jpg`
- Usuarios: `/src/assets/images/users/nombre-usuario.jpg`
- Publicaciones: `/src/assets/images/posts/nombre-descriptivo.jpg` 