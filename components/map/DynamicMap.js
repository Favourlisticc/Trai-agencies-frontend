import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

const Map = () => {
  const [coord, setCoord] = useState([51.505, -0.09]);

  const SearchLocation = () => {
    return (
      <div className="search-location">
        <input type="text" placeholder="Search Location" />
      </div>
    );
  };

  const GetMyLocation = () => {
    const getMyLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoord([position.coords.latitude, position.coords.longitude]);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    return (
      <div className="get-my-location mt-20">
        <button onClick={getMyLocation}>Get My Location</button>
      </div>
    );
  };

  return (
    <div>
      <SearchLocation />
      <GetMyLocation />
      <MapContainer
        style={{
          height: '100vh',
          width: '100%',
        }}
        center={coord}
        zoom={2}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          icon={
            new L.Icon({
              iconUrl: '/leaflet/marker-icon.png', // Updated path
              iconRetinaUrl: '/leaflet/marker-icon.png', // Updated path
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: '/leaflet/marker-shadow.png', // Updated path
              shadowSize: [41, 41],
            })
          }
          position={[51.505, -0.09]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
