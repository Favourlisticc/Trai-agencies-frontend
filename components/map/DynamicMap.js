import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

import facebook from "../../public/icon/facebook.png"
import twitter from "../../public/icon/twitter.png"
import instagram from "../../public/icon/instagram.png"
import youtube from "../../public/icon/youTube.png"
import Linkedin from "../../public/icon/linedinl.png"
import globalweb from "../../public/icon/global-search.png"
import emailsms from "../../public/icon/directbox-send.png"

import oramgemapicon from "../../public/icon/orange-map-icon.png"

import Image from 'next/image';

import useSWR from 'swr';

import { useQuery } from 'react-query';



const MapComponent = () => {

  const [agencies, setAgencies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://trai-agencies-api.onrender.com/api/v1/agencies');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { data } = await response.json();
        setAgencies(data); // Setting 'agencies' state directly with the array 'data'
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  console.log(agencies);

  // const locations = data.locations;
  // Check if data is an object and has a valid structure
  // const markers = Object.keys(locations).map(locationId => {
  //   const location = locations[locationId];
  //   if (typeof location.Latitude === 'number' && typeof location.Longitude === 'number') {
  //     return {
  //       id: location.id,
  //       name: location.companyName,
  //       lat: location.Latitude,
  //       lon: location.Longitude,
  //       Logo: location.logo,
  //       Address: location.Address,
  //       Website: location.Website,
  //       contactemail: location.contactemail,
  //       section: location.section,
  //       linkedin: location.linkedin,
  //       youtube: location.youtube,
  //       facebook: location.facebook,
  //       instagram: location.instagram,
  //       twitter: location.twitter,
  //     };
  //   } else {
  //     // Handle undefined coordinates
  //     console.error('Invalid coordinates for location:', location);
  //     return null; // or provide default coordinates
  //   }
  // }).filter(marker => marker !== null); // Filter out markers with undefined coordinates

  // const handleMarkerClick = (marker) => {
  //   // Handle marker click here
  // };

  return (

    // <div className="flex" style={{ marginLeft: "0px" }}>
    //   <MapContainer
    //     style={{
    //       height: '100vh',
    //       width: '100%',
    //       borderRadius: '15px',
    //       marginLeft: "0px",
    //     }}
    //     center={[51.53, -0.1]}
    //     zoom={10}
    //     scrollWheelZoom={false}
    //     doubleClickZoom={false}
    //     zoomControl={true}
    //   >
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> '
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />

    //     {agencies.length > 0 ? (
    //       {agencies.map(agency => (
    //         key={marker.id}
    //         position={[marker.lat, marker.lon]}
    //         icon={
    //           new L.Icon({
    //             iconUrl: "/icon/orange-map-icon.png",
    //             iconRetinaUrl: "/icon/orange-map-icon.png",
    //             iconSize: [25, 41],
    //             iconAnchor: [12.5, 41],
    //             popupAnchor: [0, -41],
    //             shadowUrl: '/icon/maker-shadow.png',
    //             shadowSize: [51, 45],
    //           })
    //         }
    //         eventHandlers={{ click: () => handleMarkerClick(marker) }}
    //       >
    //         <Popup>
    //           <div className='flex'>
    //             <div className='w-96'>
    //               <Image src={marker.Logo} alt="Company-logo" width={30} height={20} className=' bg-black rounded-lg w-full h-32' />
    //             </div>
    //             <div className='ml-3'>
    //               <h3 className='font-semibold text-2xl text-nowrap'>{marker.name}</h3>
    //               <p className="font-bold bg-orange-600 text-white rounded w-20 px-1 py-1 mt-3">{marker.section}</p>
    //               <div className='flex mt-3'>
    //                 <a href={marker.Website}>
    //                   <Image src={globalweb} alt='' />
    //                 </a><br />
    //                 <a href={marker.contactemail} target="_blank">
    //                   <Image src={emailsms} alt='' />
    //                 </a>
    //               </div>
    //               <div className='flex mt-3'>
    //                 <a href={marker.linkedin} target="_blank" rel="noopener noreferrer">
    //                   <Image src={Linkedin} alt="" className="h-5 w-5 mr-2" />
    //                 </a>
    //                 <a href={marker.facebook} target="_blank" rel="noopener noreferrer">
    //                   <Image src={facebook} alt="" className="h-5 w-5 mr-2" />
    //                 </a>
    //                 <a href={marker.twitter} target="_blank" rel="noopener noreferrer">
    //                   <Image src={twitter} alt="" className="h-5 w-5 mr-2" />
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </Popup>

    //     ))}
    //   </MapContainer>
    // </div>
  );
};

export default MapComponent;
