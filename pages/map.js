import MapComponent from "@/components/map/map"
import Navbar from "@/components/navbar"
import Head from "next/head"
import { Link } from "react-scroll"
import Image from "next/image"
import { useState } from "react"

import arrowleft from "../public/icon/arrow-left.png"


export default function Map({ninjas}) {
  const [selectedMarker, setSelectedMarker] = useState(null);


  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleClose = () => {
    // Your logic to handle closing the details
    setSelectedMarker(null); // Assuming selectedMarker is a state variable
  };

  // if (!ninjas || !Array.isArray(ninjas)) {
  //   return null; // or return a loading indicator or an empty state
  // }

    return(
     <div>

      <Head>
        <title>Map Page | Trai</title>
        <meta name="description" content="Trai - World Class Recruitment Agency Index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />

         {/* Google / Search Engine Tags  */}
            <meta itemprop="name" content="Trai - Recuiter Page" />
            <meta itemprop="description" content="Trai - World Class Recruitment Agency Index" />
            <meta itemprop="image" content="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg"/>

            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://trai.onrender.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Trai - Map Page" />
            <meta property="og:description" content="Trai - World Class Recruitment Agency Index" />
            <link rel="icon" name="og:image" href="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />

            {/* Twitter Meta Tags  */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Trai - Recuiter Page" />
            <meta name="twitter:description" content="Trai - World Class Recruitment Agency Index" />
            <meta name="twitter:image" content="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />

      </Head>

        <div id="popup" className="w-0 h-10 justify-center items-center flex-col flex fixed top-0 left-0 right-0" style={{backgroundColor: "rgba(26,26,26, .5)", zIndex: "999999"}}>

           <div id="head-nav" className="fixed bg-white left-0 right-0 w-full top-0 h-16 ">
            <Link href="/" className="text-black flex w-52">
               <Image src={arrowleft} width={20} height={20} alt="" className="w-10 ml-5 mt-5"/>
              <h2 className="mt-6 ml-9 font-semibold"> Go Back</h2>
            </Link>
           </div>
        </div>
         <div className="mt-20">
         <MapComponent
        //  ninjas={ninjas}
         />
        </div>
     </div>

    )


}
