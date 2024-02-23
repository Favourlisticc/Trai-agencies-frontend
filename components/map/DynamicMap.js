import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Image from 'next/image';

import oramgemapicon from "../../public/icon/orange-map-icon.png"
import facebook from "../../public/icon/facebook.png"
import twitter from "../../public/icon/twitter.png"
import Linkedin from "../../public/icon/linedinl.png"
import globalweb from "../../public/icon/global-search.png"
import emailsms from "../../public/icon/directbox-send.png"
import staticmap from "../../public/static map.png"
import logo from "../../public/icon/trai-logo.png";


const MapComponent = () => {
  const [agencies, setAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [isMapActive, setIsMapActive] = useState(true);
  const [isListActive, setIsListActive] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  const [selectedAgency, setSelectedAgency] = useState(null); // State to hold selected agency
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility




  const sectorColors = ["bg-blue-600", "bg-green-600", "bg-yellow-600", "bg-red-600", "bg-purple-600", "bg-indigo-600"];

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




  const handleMapClick = () => {
    setIsMapActive(true);
    setIsListActive(false);
  };

  // Function to handle clicks on the list icon
  const handleListClick = () => {
    setIsMapActive(false);
    setIsListActive(true);
  };

  const handleListIconClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = (agency) => {
    setSelectedAgency(agency);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(agencies)
  console.log("yo thus the data", filteredAgencies);

  const validAgencies = filteredAgencies.filter(agency => agency.latitude !== undefined && agency.longitude !== undefined);

  // console.log("Agency coordinates:", agencies.socials.LinkedIn, validAgencies.longitude, validAgencies.latitude)


  return (
    <div>



      <div className="flex" style={{ marginLeft: "0px" }}>
        {loading ? ( // Render loading indicator if loading state is true
          <div class="flex-col gap-4 w-full bg-gray-300 flex items-center justify-center" style={{height: "670px"}}>
          <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">

            <Image class="animate-ping"  src={logo} alt=''/>
          </div>
        </div>
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

            <div className="flex flex-col items-center search mt-20 ml-40 max-sm:ml-6" style={{zIndex: "999"}}>
                    <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} className="p-0 mb-4 mt-1 w-48 h-12 text-gray-500 font-light text-xl">
                      <option value="">Select Industry</option>
                      <option value="Education">Education</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Construction">Construction</option>
                      {/* Add more options as needed */}

                    </select>
                    <button type="submit">Search</button>
                  </div>

              <div style={{ zIndex: "999", display: "flex", flexDirection: "column"}} className={`relative mt-16 text-red bg-yellow-500 mr-3 w-16 rounded-3xl float-right py-2 px-2`}>
                <div style={{ backgroundColor: isMapActive ? "white" : "" }} className={`bg-yellow-500 py-0.5 pl-0 rounded-xl cursor-pointer ${isMapActive ? 'active' : ''}`} onClick={handleMapClick}>
                <svg className='w-12 mb-1 mt-1 text-black' xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 24 24" fill="none"><path d="M15.65 21.408c-.43 0-.86-.09-1.21-.26l-5.25-2.63c-.3-.15-.89-.14-1.18.03l-2.36 1.35c-1.02.58-2.07.66-2.86.19-.8-.46-1.25-1.4-1.25-2.58v-9.72c0-.91.6-1.94 1.39-2.39l4.33-2.48c.73-.42 1.84-.45 2.59-.07l5.25 2.63c.3.15.88.13 1.18-.03l2.35-1.34c1.02-.58 2.07-.66 2.86-.19.8.46 1.25 1.4 1.25 2.58v9.73c0 .91-.6 1.94-1.39 2.39l-4.33 2.48c-.38.2-.88.31-1.37.31Zm-7.01-4.49c.43 0 .86.09 1.21.26l5.25 2.63c.3.15.88.13 1.18-.03l4.33-2.48c.32-.18.63-.72.63-1.08v-9.73c0-.63-.18-1.1-.51-1.28-.32-.18-.82-.11-1.36.2l-2.35 1.34c-.73.42-1.84.45-2.59.07l-5.25-2.63c-.3-.15-.88-.13-1.18.03l-4.33 2.48c-.32.18-.63.72-.63 1.09v9.73c0 .63.18 1.1.5 1.28.32.19.82.11 1.37-.2l2.35-1.34c.39-.23.89-.34 1.38-.34Z" fill="#000000"></path><path d="M8.559 17.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .41-.34.75-.75.75ZM15.73 20.751c-.41 0-.75-.34-.75-.75V6.621c0-.41.34-.75.75-.75s.75.34.75.75v13.38c0 .41-.34.75-.75.75Z" fill="#000000"></path></svg>
                </div>

                <div style={{ backgroundColor: isListActive ? "white" : "" }} className={`bg-yellow-500 py-0.5 pl-0 rounded-xl cursor-pointer ${isListActive ? 'active' : ''}`} onClick={handleListClick}>
                <svg className='w-12 mb-1 mt-1 text-black' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#000"></path></svg>

                </div>

               </div>


            {validAgencies.map(agency => (

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
                {isMapActive && (
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

                    {agency.socials?.LinkedIn && (
                        <a href={agency.socials.LinkedIn} target="_blank" rel="noopener noreferrer">
                            <Image src={Linkedin} alt="" className="h-5 w-5 mr-21" />
                        </a>
                    )}

                   {agency.socials?.Facebook && (
                            <a href={agency.socials.Facebook} target="_blank" rel="noopener noreferrer">
                                <Image src={facebook} alt="" className="h-5 w-5 mr-21" />
                            </a>
                        )}


                    {agency.socials?.Twitter && (
                        <a href={agency.socials.Twitter} target="_blank" rel="noopener noreferrer">
                            <Image src={twitter} alt="" className="h-5 w-5 mr-21" />
                        </a>
                    )}



                    </div>
                  </div>
                </div>
                )}

                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>

          {isListActive && (

      <div className="fixed mt- top-0 left-0 w-full h-full text-black flex bg-gray-900" style={{ zIndex: "999" }}>


        <div className=" rounded-lg w-full">
                  <div className="flex flex-col items-center search mt-20 ml-40 max-sm:ml-6" style={{zIndex: "999"}}>
                        <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} className="p-0 mb-4 mt-2 w-48 h-12 text-gray-500 font-light text-xl">
                          <option value="">Select Industry</option>
                          <option value="Education">Education</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Construction">Construction</option>
                          {/* Add more options as needed */}

                        </select>
                        <button type="submit">Search</button>
                    </div>

                      <div style={{ zIndex: "999", display: "flex", flexDirection: "column"}} className={`relative mt-16 text-red bg-yellow-500 mr-3 w-16 rounded-3xl float-right py-2 px-2`}>
                          <div style={{ backgroundColor: isMapActive ? "white" : "" }} className={`bg-yellow-500 py-0.5 pl-0 rounded-xl cursor-pointer ${isMapActive ? 'active' : ''}`} onClick={handleMapClick}>
                          <svg className='w-12 mb-1 mt-1 text-black' xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 24 24" fill="none"><path d="M15.65 21.408c-.43 0-.86-.09-1.21-.26l-5.25-2.63c-.3-.15-.89-.14-1.18.03l-2.36 1.35c-1.02.58-2.07.66-2.86.19-.8-.46-1.25-1.4-1.25-2.58v-9.72c0-.91.6-1.94 1.39-2.39l4.33-2.48c.73-.42 1.84-.45 2.59-.07l5.25 2.63c.3.15.88.13 1.18-.03l2.35-1.34c1.02-.58 2.07-.66 2.86-.19.8.46 1.25 1.4 1.25 2.58v9.73c0 .91-.6 1.94-1.39 2.39l-4.33 2.48c-.38.2-.88.31-1.37.31Zm-7.01-4.49c.43 0 .86.09 1.21.26l5.25 2.63c.3.15.88.13 1.18-.03l4.33-2.48c.32-.18.63-.72.63-1.08v-9.73c0-.63-.18-1.1-.51-1.28-.32-.18-.82-.11-1.36.2l-2.35 1.34c-.73.42-1.84.45-2.59.07l-5.25-2.63c-.3-.15-.88-.13-1.18.03l-4.33 2.48c-.32.18-.63.72-.63 1.09v9.73c0 .63.18 1.1.5 1.28.32.19.82.11 1.37-.2l2.35-1.34c.39-.23.89-.34 1.38-.34Z" fill="#000000"></path><path d="M8.559 17.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .41-.34.75-.75.75ZM15.73 20.751c-.41 0-.75-.34-.75-.75V6.621c0-.41.34-.75.75-.75s.75.34.75.75v13.38c0 .41-.34.75-.75.75Z" fill="#000000"></path></svg>
                          </div>

                          <div style={{ backgroundColor: isListActive ? "white" : "" }} className={`bg-yellow-500 py-0.5 pl-0 rounded-xl cursor-pointer ${isListActive ? 'active' : ''}`} onClick={handleListClick}>
                          <svg className='w-12 mb-1 mt-1 text-black' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#000"></path></svg>

                          </div>

                        </div>

          <div className="max-sm:h-96 w-full ml-80 max-sm:ml-0 h-full pb-32 w-for-list " style={{ overflowY: "auto"}}>
            {/* Render your agencies list here */}
            {filteredAgencies.map(agency => (
              <div key={agency._id} className='flex bg-white max-sm:w-80 mb-5 py-1 px-1 rounded-md w-full max-sm:mr-0 mr-20 active:bg-gray-500' onClick={() => openModal(agency)}>
                <div className=''>
                  <Image src={agency.logo} alt="Company-logo" width={0} height={0} style={{width: "100%", height: "100%"}} className=' bg-black rounded-lg' />
                </div>
                <div className=''>
                  <h3 className='font-semibold text-nowrap ml-2'>{agency.agency_name}</h3>

                  <div className="flex flex-wrap ml-2 mt-1">
                    {agency.sector.map((sector, index) => (
                      <div key={index} className="flex items-center mr-2 mb-2">
                        <p className={`text-white h-3 font-light text-xs rounded pb-4 px-2 ${sectorColors[index % sectorColors.length]}`}>{sector}</p>
                      </div>
                    ))}
                  </div>

                  <div className='flex ml-2'>
                    <a href={agency.website}>

                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z" fill="#000000"></path><path d="M8.998 21.75h-1c-.41 0-.75-.34-.75-.75s.32-.74.73-.75a29.49 29.49 0 0 1 0-16.5.745.745 0 0 1-.73-.75c0-.41.34-.75.75-.75h1c.24 0 .47.12.61.31.14.2.18.45.1.68a27.948 27.948 0 0 0 0 17.53c.08.23.04.48-.1.68-.14.18-.37.3-.61.3ZM14.998 21.75a.745.745 0 0 1-.71-.99 27.948 27.948 0 0 0 0-17.53.749.749 0 1 1 1.42-.48 29.318 29.318 0 0 1 0 18.47c-.1.33-.4.53-.71.53Z" fill="#000000"></path><path d="M12 17.2c-2.79 0-5.57-.39-8.25-1.18-.01.4-.34.73-.75.73s-.75-.34-.75-.75v-1c0-.24.12-.47.31-.61.2-.14.45-.18.68-.1a27.948 27.948 0 0 0 17.53 0 .75.75 0 0 1 .68.1c.2.14.31.37.31.61v1c0 .41-.34.75-.75.75s-.74-.32-.75-.73c-2.69.79-5.47 1.18-8.26 1.18ZM21 9.75c-.08 0-.16-.01-.24-.04a27.948 27.948 0 0 0-17.53 0c-.4.13-.82-.08-.95-.47-.12-.4.09-.82.48-.95a29.318 29.318 0 0 1 18.47 0c.39.13.61.56.47.95a.73.73 0 0 1-.7.51Z" fill="#000000"></path></svg>

                    </a><br />

                    <a href={`mailto:${agency.contact[0]}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7Z" fill="#000000"></path><path d="M11.999 12.868c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z" fill="#000000"></path></svg>

                    </a>

                    
                    {agency.socials?.LinkedIn && (
                        <a href={agency.socials.LinkedIn} target="_blank" rel="noopener noreferrer">
                            <Image src={Linkedin} alt="" className="h-5 w-5 mr-21" />
                        </a>
                    )}

                   {agency.socials?.Facebook && (
                            <a href={agency.socials.Facebook} target="_blank" rel="noopener noreferrer">

                                <svg  className="mr-21" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.75 22.75h-4.5V15.5H9.3c-.58 0-1.05-.47-1.05-1.05v-1.9c0-.58.47-1.05 1.05-1.05h.95V9c0-2.07 1.68-3.75 3.75-3.75h2.7c.58 0 1.05.47 1.05 1.05v2.4c0 .58-.47 1.05-1.05 1.05h-1.95v1.75h1.88a1.045 1.045 0 0 1 1.03 1.25l-.38 1.9c-.1.49-.53.84-1.03.84h-1.5v7.26Zm-3-1.5h1.5V14h2.64l.2-1h-2.83V9.3c0-.58.47-1.05 1.05-1.05h1.95v-1.5H14c-1.24 0-2.25 1.01-2.25 2.25v4h-2v1h2v7.25Z" fill="#000000"></path><path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" fill="#000000"></path></svg>
                            </a>
                        )}


                    {agency.socials?.Twitter && (
                        <a href={agency.socials.Twitter} target="_blank" rel="noopener noreferrer">
                            <Image src={twitter} alt="" className="h-5 w-5 mr-21" />
                        </a>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

        {isModalOpen && selectedAgency && (
          <div className="fixed top-0 left-0 w-full h-auto flex justify-center pt-28 pb-32 px-5 bg-slate-500 bg-opacity-50" style={{ zIndex: "999" }}>
            <div className="bg-gray-200 rounded-lg">
              <span className="text-3xl float-right text-black cursor-pointer" onClick={closeModal}>&times;</span>

              <div className='pt-7 pl-3 pr-3'>
                  <div className='flex w-full h-full'>

                    <Image src={selectedAgency.logo} alt="Company-logo" width={0} height={0} className=' bg-black rounded-lg w-28 h-24 object-fill ' />

                    <div>
                      <h3 className='font-semibold text-black text-nowrap ml-5'>{selectedAgency.agency_name}</h3>

                      <div className="flex flex-wrap ml-5 mt-1">
                        {selectedAgency.sector.map((sector, index) => (
                          <div key={index} className="flex items-center mr-2 mb-2">
                            <p className={`text-white h-3 font-light text-xs rounded pb-4 px-2 ${sectorColors[index % sectorColors.length]}`}>{sector}</p>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  <div className='flex'>
                    <div className='bg-black mt-2 rounded-md w-28 p-2'>
                      <h1 className='text-yellow-400 font-bold'>Locations</h1>
                      <p className='text-white text-sm'>{selectedAgency.address}</p>
                    </div>

                    <div className='ml-5 text-black'>
                        <h1 className='font-bold'>Summary</h1>
                    </div>

                  </div>

                  <div className='bg-white mt-3 rounded-md text-black p-2'>
                    <h1>Contact</h1>

                    <div className='flex'>
                    <div className=''>
                      <a href={selectedAgency.website} className='text-xs flex'>
                        <Image src={globalweb} alt='' className='h-5 w-5 mr-1'/>
                        {selectedAgency.website}
                      </a>

                      <a href={`mailto:${selectedAgency.contact[1]}`} className='text-xs flex'>
                       <Image src={emailsms} alt='' className='h-5 w-5 mr-1'/>
                       {selectedAgency.contact[0]}
                      </a>


                    </div>

                    <div className='ml-10'>

                      
                    {selectedAgency.socials?.LinkedIn && (
                        <a href={selectedAgency.socials.LinkedIn} target="_blank" rel="noopener noreferrer">
                            <Image src={Linkedin} alt="" className="h-5 w-5 mr-21" />
                        </a>
                    )}

                   {selectedAgency.socials?.Facebook && (
                            <a href={selectedAgency.socials.Facebook} target="_blank" rel="noopener noreferrer">
                                <Image src={facebook} alt="" className="h-5 w-5 mr-21" />
                            </a>
                        )}


                    {selectedAgency.socials?.Twitter && (
                        <a href={selectedAgency.socials.Twitter} target="_blank" rel="noopener noreferrer">
                            <Image src={twitter} alt="" className="h-5 w-5 mr-21" />
                        </a>
                    )}
                      {selectedAgency.socials?.Instagram && (
                        <a href={selectedAgency.socials.Twitter} target="_blank" rel="noopener noreferrer">
                          <Image src={twitter} alt="" className="h-5 w-5 mr-1" />
                        </a>
                      )}

                    </div>
                    </div>
                  </div>
              </div>
              {/* Display other agency details here */}
            </div>
          </div>
        )}




    </div>
  );
};

export default MapComponent;
