import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Image from 'next/image';

import oramgemapicon from "../../public/icon/orange-map-icon.png"
import facebook from "../../public/icon/facebook.png"
import twitter from "../../public/icon/twitter.png"
import Linkedin from "../../public/icon/linedinl.png"
import globalweb from "../../public/icon/global-search.png"
import emailsms from "../../public/icon/directbox-send.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaMapLocationDot } from 'react-icons/fa6';
import { faMapLocationDot, faList } from '@fortawesome/free-solid-svg-icons';

const MapComponent = () => {
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [isMapActive, setIsMapActive] = useState(false);
  const [isListActive, setIsListActive] = useState(false);

  const handleMapClick = () => {
    setIsMapActive(!isMapActive);
    setIsListActive(false); // Ensure only one icon is active at a time
  };

  const handleListClick = () => {
    setIsListActive(!isListActive);
    setIsMapActive(false); // Ensure only one icon is active at a time
  };

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await fetch('https://trai-agencies-api.onrender.com/api/v1/agencies');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { data } = await response.json();
        setAgencies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading state to false when data fetching is complete
      }
    };

    fetchAgencies();
  }, []);

  const filteredAgencies = agencies.filter(agency => {
    if (!selectedIndustry) {
      return true;
    }
    return agency.sector.includes(selectedIndustry);
  }).filter(agency => {
    return agency.agency_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log(agencies)

  return (
    <div>


      <div className="flex" style={{ marginLeft: "0px" }}>
        {loading ? ( // Render loading indicator if loading state is true
          <div>Loading map.......🔻</div>
        ) : (
          <MapContainer
            style={{
              height: '1000px', // Adjust height to accommodate search elements
              width: '100%',
              marginLeft: "0px",
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

              <div className="flex flex-col items-center search mt-20 ml-8" style={{ zIndex: "999" }}>
                <select 
                  value={selectedIndustry} 
                  onChange={(e) => setSelectedIndustry(Array.from(e.target.selectedOptions, option => option.value))} 
                  className="p-2 mb-4 mt-2 w-48 h-16 text-gray-500 font-light text-xl"
                  multiple
                >
                  <option value="">Select Industry</option>
                  <option value="Education">Education</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Construction">Construction</option>
                  {/* Add more options as needed */}
                </select>
                <button type="submit">Search</button>
              </div>

              <div>
      <div
        onClick={handleMapClick}
        style={{
          zIndex: "999",
          display: "flex",
          flexDirection: "column",
          backgroundColor: isMapActive ? "white" : "",
        }}
        className={`relative mt-16 text-red bg-yellow-500 mr-3 rounded-3xl ml-72 py-3 ${isMapActive ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faMapLocationDot} className='w-20 text-3xl mb-2 text-black'/>
      </div>

      <div
        onClick={handleListClick}
        style={{
          zIndex: "999",
          display: "flex",
          flexDirection: "column",
          backgroundColor: isListActive ? "white" : "",
        }}
        className={`relative mt-16 text-red bg-yellow-500 mr-3 rounded-3xl ml-72 py-3 ${isListActive ? 'active' : ''}`}
      >
        <FontAwesomeIcon icon={faList} className='w-20 text-3xl text-black'/>
      </div>
    </div>


            {filteredAgencies.map(agency => (
              <Marker
                key={agency._id}
                position={[agency.latitude, agency.longitude]}
                icon={
                  new L.Icon({
                    iconUrl: "/icon/map-iicon.png",
                    iconRetinaUrl: "/icon/map-iicon.png",
                    iconSize: [15, 15],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                  })
                }
              >
                <Popup>
                  <div className='flex'>
                    <div className='w-96'>
                      <Image src={agency.logo} alt="Company-logo" width={30} height={20} className=' bg-black rounded-lg w-full h-32' />
                    </div>
                    <div className='ml-3'>
                      <h3 className='font-semibold text-2xl text-nowrap'>{agency.agency_name}</h3>
                      <p className="font-bold bg-orange-600 text-white rounded w-20 px-1 py-1 mt-3">{agency.sector.join(', ')}</p>
                      <div className='flex mt-3'>
                        <a href={agency.website}>
                          <Image src={globalweb} alt='' />
                        </a><br />
                        <a href={`mailto:${agency.contact[0]}`}>
                          <Image src={emailsms} alt='' />
                        </a>
                      </div>
                      <div className='flex mt-3'>
                        <a href={agency.socials.LinkedIn} target="_blank" rel="noopener noreferrer">
                          <Image src={Linkedin} alt="" className="h-5 w-5 mr-2" />
                        </a>
                        {agency.socials.Facebook && (
                          <a href={agency.socials.Facebook} target="_blank" rel="noopener noreferrer">
                            <Image src={facebook} alt="" className="h-5 w-5 mr-2" />
                          </a>
                        )}
                        {agency.socials.Twitter && (
                          <a href={agency.socials.Twitter} target="_blank" rel="noopener noreferrer">
                            <Image src={twitter} alt="" className="h-5 w-5 mr-2" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
