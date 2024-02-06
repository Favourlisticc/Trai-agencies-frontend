// import Image from "next/image"
// import { Inter } from "next/font/google"
import Head from "next/head"
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import Data from "../Data"


import React, { useState, useEffect } from 'react';

// ICONS
import facebook from "../public/icon/facebook.png"
import twitter from "../public/icon/twitter.png"
import instagram from "../public/icon/instagram.png"
import youtube from "../public/icon/youTube.png"
import Linkedin from "../public/icon/linedinl.png"
import checked from "../public/icon/checked.png"
import globalweb from "../public/icon/global-search.png"
import emailsms from "../public/icon/directbox-send.png"




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


export default function Home({ ninjas }) {


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

  const selectedData = Data.slice(0, 2);


  const [backgroundColors, setBackgroundColors] = useState({
    h21: 'orange-500', // Initial color for Hiring Companies
    h22: 'orange-500', // Initial color for Job Seekers
    h23: 'orange-500', // Initial color for Recruitment Agencies
    p: 'border-r-5'
  });

    const [isIndex1, isIndexFor1] = useState(true);
    const [isIndex2, isIndexFor2] = useState(false);
    const [isIndex3, isIndexFor3] = useState(false);

    // Function to toggle visibility of paragraph 1
    const toggleParagraph1Visibility = () => {

      setBackgroundColors({
        ...backgroundColors,
        h21: 'slate-800', // Or any desired color
        h22: 'orange-500', // Reset other colors
        h23: 'orange-500',
        p: 'border-r-0'
      });

      isIndexFor1(!isIndex1);
    // Hide paragraph 2 when showing paragraph 1
    isIndexFor2(false);
    isIndexFor3(false);


  };

  // Function to toggle visibility of paragraph 2
     const toggleParagraph2Visibility = () => {
      setBackgroundColors({
        ...backgroundColors,
        h21: 'orange-500', // Or any desired color
        h22: 'slate-800', // Reset other colors
        h23: 'orange-500',
        p: 'border-r-0'
      });
      isIndexFor2(!isIndex2);
    // Hide paragraph 1 when showing paragraph 2
    isIndexFor1(false);
    isIndexFor3(false);


  };

  const toggleParagraph3Visibility = () => {
    setBackgroundColors({
      ...backgroundColors,
      h21: 'orange-500', // Or any desired color
      h22: 'orange-500', // Reset other colors
      h23: 'slate-800',
      p: 'border-r-0'
    });
    isIndexFor3(!isIndex3);
    // Hide paragraph 1 when showing paragraph 2
    isIndexFor2(false);
    isIndexFor1(false);
};



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

        {/* <div className="flex justify-center">
          <div class="input-container">
            <input type="text" name="text" class="input w-80" placeholder="search..."/>
            <span class="icon">
              <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </span>

          </div>
        </div> */}

        <div className="flex justify-center">
          <Link href="/map" className="mt-10 px-2 py-2 bg-white text-slate-950 rounded flex">
             CHECK AGENCIES NEAR YOU
             <FontAwesomeIcon icon={faMapLocationDot} width={26} className="ml-7 max-sm:ml-5" /> </Link>
        </div>

        <div className=" container max-sm:container bg-white mt-5 pb-10 rounded-md">
            <h1 className="text-black text-center text-3xl font-semibold px-3 py-3">Add Your Agency</h1>
            <p className="text-black text-center text-xl font-medium">Dont see your Agency on our list?</p>
            <p className="text-black text-center text-xl font-medium">Send us your details and we`ll be in touch ASAP</p>

           <div className=" flex justify-center mt-5">
           <input type="text" placeholder="Your Name" className="bg-yellow-300 mr-8 w-52 h-10 px-2 rounded-md placeholder:text-black placeholder:font-semibold" />
            <input type="text"  placeholder="Your Agency Name" className="bg-yellow-300 mr-8 w-52 h-10 px-2 rounded-md placeholder:text-black placeholder:font-semibold"/>
           </div>

           <div className="flex">
            <input type="email"  placeholder="Your Email" className="bg-yellow-300 w-56 h-10 px-2 rounded-md mt-5 text-white placeholder:text-black placeholder:font-semibold" style={{marginLeft: "344px"}}/>

           </div>
            <div className="flex justify-center mt-5">
               <button className="bg-black text-white rounded-md px-10 py-1.5">Submit</button>

            </div>
        </div>

        <div className="bg-yellow-300 mt-10 text-black pt-5 pb-5 rounded-md container">
            <h2 className="text-3xl font-bold text-center underline mb-10 ">Featured Agencies</h2>
            {selectedData.map((marker) => (
            <div key={marker.id}>
             <div className='flex mt-7 container'>
                <div>
                  <Image src={marker.logo} alt="Company-logo" width={30} height={20} className=' bg-black rounded-lg w-96 h-44 max-sm:w-32'/>

                </div>

                <div className='ml-5'>
                    <h3 className='font-semibold text-2xl text-nowrap'>{marker.companyName}</h3>



                    <p className="font-bold bg-orange-600 text-white rounded px-1 py-1 mt-3 text-wrap">{marker.section}</p>
                    {/* <p>{marker.Address}</p> */}


                  <div className='flex mt-5'>
                    <a href={marker.Website}  className=''>
                        <Image src={globalweb} alt=''/>
                      </a><br/>

                      <a href={marker.contactemail} target="_blank"  className=''>
                            <Image src={emailsms} alt=''/>
                      </a>
                  </div>



              <div className='flex mt-5'>

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
            </div>

            ))}
        </div>


        {/* <div className="t text-center mt-16 mb-10">
            <p className="text-2xl mb-5 font-semibold">PHASE 1: UK</p>

             <h1 className="text-5xl mb-5 text-orange-500 font-semibold">{count}</h1>

            <p className="t text-3xl font-semibold ">AGENCIES</p>
        </div> */}



        </div>



        <div className="container px-1 py-1 rounded-2xl max-sm:w-full max-sm:mx-0 max-sm:mr-0 mt-10">
         <h1 className="text-5xl font-bold text-center max-sm:text-3xl underline">Who`s the Index For?</h1>

         <div className="flex justify-center mt-5 ">
         <div className="mt-5 bg-orange-500 flex w-1/2 h-full rounded-lg max-sm:w-full">
            <div className="flex-row w-32">

                 <h2
                    className="border-b-2 pl-7 py-7 border-r-5"
                    onClick={toggleParagraph1Visibility}
                    style={{
                      backgroundColor: `var(--${backgroundColors.h21})`,
                      borderRight: `${backgroundColors.p}`,
                    }}
                  >
                    Hiring Companies
                  </h2>

                  <h2
                    className="border-b-2 pl-5 py-7 border-r-5 text-wrap"
                    onClick={toggleParagraph2Visibility}
                    style={{
                      backgroundColor: `var(--${backgroundColors.h22})`,
                      borderRight: `${backgroundColors.p}`,
                    }}
                  >
                    Job Seekers
                  </h2>

                  <h2
                    className="pl-5 py-7 border-r-5"
                    onClick={toggleParagraph3Visibility}
                    style={{
                      backgroundColor: `var(--${backgroundColors.h23})`,
                      borderRight: `${backgroundColors.p}`,
                    }}
                  >
                    Recruitment Agencies
                  </h2>
            </div>


           <div className="ml-10 mb-5 max-sm:ml-6">
              {isIndex1 && (
                  <div className="mt-7">
                    <ul style={{listStyleType: "disc"}}>
                          <li className="pb-1">Browse Through every Recruiter in your industry</li>
                          <li className="pb-1" >Find Agencies local to your projects</li>
                          <li className="pb-1">Leading tech company specializing in AI solutions.</li>
                          <li className="pb-1">Renowned financial institution providing cutting-edge services.</li>
                      </ul>
                  </div>
                  )}

            {isIndex2 && (
               <div className="mt-7">
                <div className="mt-7">
                 <ul style={{listStyleType: "disc"}}>
                      <li>Software engineer passionate about web development.</li>
                      <li>Marketing professional with expertise in digital strategy.</li>
                      <li>Experienced project manager skilled in agile methodologies.</li>
                      <li>Graphic designer with a flair for creative branding.</li>
                  </ul>
              </div>
              </div>
              )}

         {isIndex3 && (
               <div className="mt-7">
                <div className="mt-7">
                 <ul style={{listStyleType: "disc"}}>
                      <li>Specializing in tech recruitment for startups and enterprises.</li>
                      <li>Global HR consultancy offering strategic workforce solutions.</li>
                      <li>Boutique agency focusing on executive search and placement.</li>
                      <li>Industry-specific recruitment firm connecting talent with opportunities.</li>
                  </ul>
              </div>
              </div>
              )}
           </div>






         </div>
         </div>
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