// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { london, Lagos } from "../../Data";  // Import your data arrays

const MapComponent = ({ onMarkerClick }) => {
  const markers = [
    ...london.map(location => ({
      id: location.id,
      name: location.companyName,
      lat: location.Latitude,
      lon: location.Longitude,
      things: location.things,
    }))
  ];

  const handleMarkerClick = (marker) => {
    onMarkerClick(marker);
  };

  return (
    <div className="flex">
      <MapContainer
        style={{
          height: '70vh',
          width: '100%',
          borderRadius: '15px',
        }}
        center={[51.53, -0.1]}
        zoom={12}
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
                iconRetinaUrl: "/icon/map-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: '/icon/maker-shadow.png',
                shadowSize: [51, 45],
              })
            }
            eventHandlers={{ click: () => handleMarkerClick(marker) }}
          >
            <Popup>
              <div>
                <h3>{marker.name}</h3>
                <ul>
                  {marker.things.map((location) => (
                    <li key={location.id}>
                      <strong>{location.companyName}</strong>
                      <p>{location.Address}</p>
                      {/* Uncomment and customize the following lines as needed */}
                      {/* <p>Website: {location.Website}</p> */}
                      {/* <p>Email: {location.contactemail}</p> */}
                      {/* Add more details as needed */}
                    </li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
