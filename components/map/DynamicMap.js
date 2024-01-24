// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { london, Lagos } from "../../Data";  // Import your data arrays

import Image from 'next/image';

const MapComponent = ({ onMarkerClick }) => {
  const markers = [
    ...london.map(location => ({
      id: location.id,
      name: location.companyName,
      lat: location.Latitude,
      lon: location.Longitude,

      Logo: location.logo,
      Address: location.Address,
      Website: location.Website,
      contactemail: location.contactemail,
      section: location.section


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
    <Image src={marker.Logo} alt="Company-logo" width={20} height={20} className='border-2 rounded-full px-5 py-5'/>
    <h3>{marker.name}</h3>
    <p>{marker.Address}</p>
    <p>{marker.Website}</p>
    <p>{marker.contactemail}</p>
    <p>{marker.section}</p>
    <p>{marker.contactemail}</p>


  </div>
</Popup>


          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
