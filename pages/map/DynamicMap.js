// MapComponent.js
import React, { useState, useEffect, use } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { london, Lagos } from "../../Data";  // Import your data arrays

import axios from 'axios'; // Import axios for making HTTP requests

import facebook from "../../public/icon/facebook.png"
import twitter from "../../public/icon/twitter.png"
import instagram from "../../public/icon/instagram.png"
import youtube from "../../public/icon/youTube.png"
import Linkedin from "../../public/icon/linedinl.png"
import checked from "../../public/icon/checked.png"
import globalweb from "../../public/icon/global-search.png"
import emailsms from "../../public/icon/directbox-send.png"

import oramgemapicon from "../../public/icon/orange-map-icon.png"

import Image from 'next/image';



// async function getCharacters() {
// 	return await (await fetch("https://rickandmortyapi.com/api/character", { cache: "no-store" })).json();
// }



export default async function  MapComponent(){
  const staticData = await fetch(`https://trai-agencies-api.onrender.com/api/v1/get_agencies`, { cache: 'force-cache' })
 console.log(staticData)




  const handleMarkerClick = (marker) => {
    onMarkerClick(marker);
  };

  return (
    <div className="flex" style={{marginleft: "0px"}}>
      <MapContainer
        style={{
          height: '100vh',
          width: '100%',
          borderRadius: '15px',
          marginleft: "0px",
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
                iconUrl: "/icon/orange-map-icon.png",
                iconRetinaUrl: "/icon/orange-map-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
                shadowUrl: '/icon/maker-shadow.png',
                shadowSize: [51, 45],
              })
            }

            eventHandlers={{ click: () => handleMarkerClick(marker) }}
          >
          <Popup >
  <div className='flex '>
    <div className='w-96'>
      <Image src={marker.Logo} alt="Company-logo" width={30} height={20} className=' bg-black rounded-lg w-full h-32'/>

    </div>

   <div className='ml-3'>
      <h3 className='font-semibold text-2xl text-nowrap'>{marker.agency_name}</h3>



      <p className="font-bold bg-orange-600 text-white rounded w-20 px-1 py-1 mt-3">{marker.section}</p>
      {/* <p>{marker.Address}</p> */}


     <div className='flex mt-3'>
      <a href={marker.Website}  className=''>
          <Image src={globalweb} alt=''/>
        </a><br/>

        <a href={marker.contactemail} target="_blank"  className=''>
              <Image src={emailsms} alt=''/>
        </a>
     </div>



      <div className='flex mt-3'>

            <a href={marker.linkedin} target="_blank" rel="noopener noreferrer">
            <Image src={Linkedin} alt="" className="h-5 w-5 mr-2"/>
            </a>

            <a href={marker.facebook} target="_blank" rel="noopener noreferrer">
            <Image src={facebook} alt="" className="h-5 w-5 mr-2"/>
            </a>

            {/* <a href={marker.youtube} target="_blank" rel="noopener noreferrer">
            <Image src={youtube} alt="" className="h-5 w-5"/>
            </a> */}

            {/* <a href={marker.instagram} target="_blank" rel="noopener noreferrer">
            <Image src={instagram} alt="" className="h-5 w-5"/>
            </a> */}

            <a href={marker.twitter} target="_blank" rel="noopener noreferrer">
            <Image src={twitter} alt="" className="h-5 w-5 mr-2"/>
            </a>
      </div>
   </div>


  </div>
</Popup>


          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};


