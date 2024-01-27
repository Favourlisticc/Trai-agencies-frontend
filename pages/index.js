// import Image from "next/image"
// import { Inter } from "next/font/google"
import Head from "next/head"
import { Link } from "react-scroll";

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MapComponent from "@/components/map/map"

import React, { useState, useEffect } from 'react';



export const metadata = {
  title: {
    default: "Homepage | IBK",
    template: "%s | IBK",
  },
  description:
    "Hi, my name is Ibukun Abejide, a passionate product designer on a mission to build successful products for millions of users across the world. I have experience working in the Fintech, E-commerce, EdTech and AI sectors and have also helped more than 100 people get into tech.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: [
      {
        url: process.env.NEXT_PUBLIC_BASE_URL + "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // useEffect to persist dark mode state (optional)
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    // Save dark mode state to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleClose = () => {
    // Your logic to handle closing the details
    setSelectedMarker(null); // Assuming selectedMarker is a state variable
  };

  useEffect(() => {
    // Function to increment the count
    const incrementCount = () => {
      if (count < 7) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    // Set up a timer to increment the count every second
    const timer = setInterval(incrementCount, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [count]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };


  return (
   <div className={darkMode ? 'dark-navbar' : 'light-navbar'}>
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
            <meta property="og:title" content="Trai - Home Page" />
            <meta property="og:description" content="Trai - World Class Recruitment Agency Index" />
            <link rel="icon" name="og:image" href="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />

            {/* Twitter Meta Tags  */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Trai - Recuiter Page" />
            <meta name="twitter:description" content="Trai - World Class Recruitment Agency Index" />
            <meta name="twitter:image" content="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />

      </Head>
    <Navbar />
    <main >
      <div className="mt-0 flex justify-between max-sm:flex-col pt-28 mb-12">
        <div className="">
         <h1 className="text-center text-4xl ml-10 mt-5 font-semibold max-sm:ml-0 max-sm:text-2xl">The <span className="text-orange-500 ">Recruitment Agency</span> Index</h1>

         <p className="w-96 text-center ml-24 mt-5 font-semibold text-2xl text-gray-600 max-sm:ml-0 max-sm:text-center">Our Mission is Simple.

Every single Recruitment Agency in the World.

All accessible from our Index.

Starting with the UK:</p>
        <div className="t text-center mt-16 mb-10">
            <p className="text-2xl mb-5 font-semibold">PHASE 1: UK</p>

             <h1 className="text-5xl mb-5 text-orange-500 font-semibold">{count}</h1>

            <p className="t text-3xl font-semibold ">AGENCIES</p>
        </div>



        </div>



        <div className="container border-2 px-3 py-3  mr-5 rounded-2xl w-1/2 max-sm:w-full max-sm:mx-0 max-sm:mr-0">
        <MapComponent
        onMarkerClick={handleMarkerClick}
        />
            <button className="bg-blue-600 text-white mt-36 rounded-lg px-5 py-2">View the Index</button>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

          </div>


      </div>




    {/* <div id="targetDiv" className="mt-20 mb-20 flex-col justify-center max-sm:flex-col skewed">
      <h2 className=" text-white text-center text-4xl font-bold mb-5 underline">Join Waitlist</h2>
      <p className="text-white text-center mb-5 px-20 max-sm:px-0 max-sm:text-sm">🚀 Ready to supercharge your career? Join our exclusive waitlist now and be the first to access exciting job opportunities, career tips, and more! 🌟 Simply drop your email below to stay ahead in your professional journey. Let`s build your future together! 🚀</p>

      <div className="flex justify-center max-sm:flex-col">
        <input type="email" name="email" id="" placeholder="Email" className="py-2 border-2 border-blue-600 rounded-md w-80 pl-2 active:border-blue-500 max-sm:ml-7 h-10"/>
        <button className="ml-8 px-2 rounded-md bg-blue-600 text-white  hover:bg-blue-500 active:bg-blue-300 active:text-black max-sm:mt-5 max-sm:ml-20 max-sm:w-52 max-sm:py-2 h-10">Join waitList</button>
      </div>
   </div> */}


    </main>
{/* <Footer /> */}
   </div>
  )
}