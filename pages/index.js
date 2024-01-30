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




  return (
   <div >
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
      <div className="mt-0 flex-col justify-between max-sm:flex-col pt-28 w-full pb-32">
        <div className="">
         <h1 className="text-center text-4xl ml-10 mt-5 font-semibold max-sm:ml-0 max-sm:text-2xl">The Recruitment Agency Index</h1>
        <p className="text-center text-orange-500 font-semibold py-3 text-xl">Every Recruitment Agency in the UK at your fingertips</p>

        <div className="flex justify-center">
          <div class="input-container">
            <input type="text" name="text" class="input w-80" placeholder="search..."/>
            <span class="icon">
              <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </span>
          </div>
        </div>


        {/* <div className="t text-center mt-16 mb-10">
            <p className="text-2xl mb-5 font-semibold">PHASE 1: UK</p>

             <h1 className="text-5xl mb-5 text-orange-500 font-semibold">{count}</h1>

            <p className="t text-3xl font-semibold ">AGENCIES</p>
        </div> */}



        </div>



        <div className="container border-2 px-1 py-1 rounded-2xl max-sm:w-full max-sm:mx-0 max-sm:mr-0 mt-10">
        <MapComponent
        onMarkerClick={handleMarkerClick}
        />


            {/* <button className="bg-blue-600 text-white mt-36 rounded-lg px-5 py-2">View the Index</button> */}



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