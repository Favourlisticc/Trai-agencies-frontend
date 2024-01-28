// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { london, Lagos } from "../../Data";  // Import your data arrays

import facebook from "../../public/icon/facebook.png"
import twitter from "../../public/icon/twitter.png"
import instagram from "../../public/icon/instagram.png"
import youtube from "../../public/icon/youTube.png"
import Linkedin from "../../public/icon/linedinl.png"
import checked from "../../public/icon/checked.png"

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
      section: location.section,
      linkedin: location.linkedin,
      youtube: location.youtube,
      facebook: location.facebook,
      instagram: location.instagram,
      twitter : location.twitter,


    }))
  ];

  const handleMarkerClick = (marker) => {
    onMarkerClick(marker);
  };

  return (
    <div className="flex">
      <MapContainer
        style={{
          height: '100vh',
          width: '100%',
          borderRadius: '15px',
        }}
        center={[51.53, -0.1]}
        zoom={10}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={true}
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
    <div className='flex' style={{width: "100%"}}>
      <Image src={marker.Logo} alt="Company-logo" width={5} height={20} className=' bg-black border-2 rounded-lg w-20 h-10'/>
      <h3 className='mt-5 ml-5 font-semibold' style={{marginLeft: "5%"}}>{marker.name}</h3>
      <Image src={checked} alt="" width={30} height={5} className='h-7 ml-2 mt-3'/>

    </div>


      <p className='text-blue-500 font-bold'>{marker.section}</p>
      <p>{marker.Address}</p>


  <a href={marker.Website}  className='underline font-semibold ' style={{color: "red", marginBottom: "20px"}}>
        Website
  </a><br/>

  <a href={marker.contactemail} target="_blank"  className='underline font-semibold' style={{color: "red"}}>
        Email.com
  </a>



  <div className='flex justify-between mt-7'>

        <a href={marker.linkedin} target="_blank" rel="noopener noreferrer">
         <Image src={Linkedin} alt="" className="h-5 w-5"/>
        </a>

        <a href={marker.facebook} target="_blank" rel="noopener noreferrer">
        <Image src={facebook} alt="" className="h-5 w-5"/>
        </a>

        <a href={marker.youtube} target="_blank" rel="noopener noreferrer">
        <Image src={youtube} alt="" className="h-5 w-5"/>
        </a>

        <a href={marker.instagram} target="_blank" rel="noopener noreferrer">
         <Image src={instagram} alt="" className="h-5 w-5"/>
        </a>

        <a href={marker.twitter} target="_blank" rel="noopener noreferrer">
         <Image src={twitter} alt="" className="h-5 w-5"/>
        </a>
  </div>


  </div>
</Popup>


          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
