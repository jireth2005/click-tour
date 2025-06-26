import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { places, icons } from '../../data';
import FilterButtons from './FilterButtons';

// Componente para mostrar estrellas de calificación
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
  }
  
  if (hasHalfStar) {
    stars.push(<span key="half" className="text-yellow-500">★</span>);
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
  }

  return <div className="flex">{stars}</div>;
};

const MapComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const [Map, setMap] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    // Solo ejecutar en el cliente
    setIsClient(true);
    
    // Importación dinámica de los componentes de react-leaflet
    const importLeaflet = async () => {
      try {
        const L = await import('leaflet');
        const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
        
        // Fix para el ícono de Leaflet en producción
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
        
        // Iconos personalizados para los diferentes tipos de lugares
        const getIcon = (type) => {
          const iconConfig = icons[type] || icons.attraction;
          
          return new L.Icon({
            iconUrl: iconConfig.url,
            iconSize: iconConfig.size,
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          });
        };

        // Centro del mapa en Bolivia
        const center = [-16.2902, -63.5887];
        
        // Crear el componente del mapa
        const MapWithComponents = () => {
          // Filtrar lugares según el tipo seleccionado
          const filteredPlaces = activeFilter 
            ? places.filter(place => place.type === activeFilter)
            : places;
            
          return (
            <MapContainer 
              center={center} 
              zoom={5} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {filteredPlaces.map(place => (
                <Marker 
                  key={place.id}
                  position={[place.lat, place.lng]}
                  icon={getIcon(place.type)}
                >
                  <Popup>
                    <div className="p-1">
                      <h3 className="font-semibold text-primary">{place.name}</h3>
                      <p className="text-sm text-gray-600">{place.description}</p>
                      <RatingStars rating={place.rating} />
                      <div className="mt-2">
                        <button className="bg-primary text-white text-xs py-1 px-2 rounded">Ver detalles</button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          );
        };
        
        setMap(() => MapWithComponents);
      } catch (error) {
        console.error("Error cargando el mapa:", error);
      }
    };
    
    importLeaflet();
  }, [activeFilter]); // Añadimos activeFilter como dependencia para que el mapa se actualice al cambiar el filtro

  if (!isClient) {
    return (
      <div className="h-[calc(100vh-180px)] w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-2 text-gray-600">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] w-full">
      <div className="bg-white p-3 shadow-sm mb-2">
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <div className="flex-1">
        {Map && <Map />}
      </div>
    </div>
  );
};

export default MapComponent; 