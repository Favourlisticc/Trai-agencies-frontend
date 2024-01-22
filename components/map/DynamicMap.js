import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { falocationdot } from '@fortawesome/free-solid-svg-icons';

const Map = () => {
  const [markers, setMarkers] = useState([
    { id: 1, name: 'London', lat: 51.509865, lon: -0.118092 },
    { id: 2, name: 'Lagos', lat: 6.5244, lon: 3.3792 },
  ]);


  return (
    <div>

      <MapContainer
        style={{
          height: '70vh',
          width: '100%',
          borderRadius: '15px'
        }}
        className=''
        center={[6, 10]}
        zoom={2}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lon]}
            icon={
              new L.Icon({
                iconUrl: "/icon/map-icon.png",
                iconRetinaUrl: '/icon/map-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: '/icon/maker-shadow.png',
                shadowSize: [51, 45],
              })
            }
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
