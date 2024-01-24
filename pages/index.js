import Image from "next/image"
import { Inter } from "next/font/google"
import Head from "next/head"
import { Link } from "react-scroll";

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MapComponent from "@/components/map/map"

import React, { useState } from 'react';




const inter = Inter({ subsets: ["latin"] })

export default function Home() {

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleClose = () => {
    // Your logic to handle closing the details
    setSelectedMarker(null); // Assuming selectedMarker is a state variable
  };


  return (
   <>
   <Head>
        <title>HomePage | Trai</title>
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
            <meta property="og:title" content="Trai - Recuiter Page" />
            <meta property="og:description" content="Trai - World Class Recruitment Agency Index" />
            <meta property="og:image" content="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />

            {/* Twitter Meta Tags  */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Trai - Recuiter Page" />
            <meta name="twitter:description" content="Trai - World Class Recruitment Agency Index" />
            <meta name="twitter:image" content="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />

      </Head>
    <Navbar />
    <main className="">
      <div className="mt-0 flex justify-between max-sm:flex-col pt-28 mb-12">
        <div className="">
         <h1 className="text-center text-4xl ml-16 mt-5 font-semibold max-sm:ml-0 max-sm:text-3xl ">The <span className="text-orange-500 ">Recruitment Agency</span> Index</h1>

         <p className="w-96 text-center ml-28 mt-5 font-semibold text-xl text-gray-700 max-sm:ml-0">Our Mission is to have a simple, easy-to-use platform that displays
         <span className="text-orange-500 font-semibold"> every single recruitment organisation in the world. </span>
         We aim to increase the visibility of these agencies for
         two key audiences:</p>

         <div className="flex mt-16 ml-5 max-sm:flex-col max-sm:ml-0 max-sm:container">
             <div className="w-72 text-center max-sm:w-full border-2 rounded-md px-5 py-5">
              <p className="text-4xl mb-10 max-sm:ml-0">🧑‍💼</p>
                 <p className="text-center max-sm:ml-0 font-semibold text-gray-500">Job-Seekers seeking alternatives to traditional job boards.</p>
             </div>

             <div className="w-72 max-sm:w-full text-center max-sm:mt-10 border-2 rounded-md px-5 py-5">
              <p className="text-4xl mb-10 max-sm:ml-0 ">🏢</p>
                 <p className="text-center font-semibold text-gray-500">Companies with vacancies seeking reliable recruiters to partner with; we connect talent with opportunity.</p>
             </div>
         </div>

          <Link to="targetDiv" smooth={true} duration={1000} offset={70}>
            <button className="mt-16 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-500 active:bg-white active:text-black active:border-2 ml-52 max-sm:ml-20 max-sm:mb-10">Want to add your Agency?</button>
          </Link>
        </div>



        <div className="container border-2 px-3 py-3  mr-5 rounded-2xl w-1/2 max-sm:w-full max-sm:mx-0 max-sm:mr-0">
        <MapComponent onMarkerClick={handleMarkerClick} />
            <button className="bg-blue-600 text-white mt-36 rounded-lg px-5 py-2">View the Index</button>
          </div>


      </div>




    <div id="targetDiv" className="mt-20 mb-20 flex-col justify-center max-sm:flex-col skewed">
      <h2 className=" text-white text-center text-4xl font-bold mb-5 underline">Join Waitlist</h2>
      <p className="text-white text-center mb-5 px-20 max-sm:px-0 max-sm:text-sm">🚀 Ready to supercharge your career? Join our exclusive waitlist now and be the first to access exciting job opportunities, career tips, and more! 🌟 Simply drop your email below to stay ahead in your professional journey. Let`s build your future together! 🚀</p>

      <div className="flex justify-center max-sm:flex-col">
        <input type="email" name="email" id="" placeholder="Email" className="py-2 border-2 border-blue-600 rounded-md w-80 pl-2 active:border-blue-500 max-sm:ml-7 h-10"/>
        <button className="ml-8 px-2 rounded-md bg-blue-600 text-white  hover:bg-blue-500 active:bg-blue-300 active:text-black max-sm:mt-5 max-sm:ml-20 max-sm:w-52 max-sm:py-2 h-10">Join waitList</button>
      </div>
   </div>


    </main>
<Footer />
   </>
  )
}