import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react";
import { useState } from 'react';

import { FaHouseChimney } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


import logo2 from "../public/icon/trai-logo.png";


// import { ThemeSwitcher } from './ThemeSwitch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {


  // const showHide = () => {
  //   if(typeof window !== 'undefined') {

  //   // let main = document.getElementById("smald").style.display;

  //   if (main == "none") {
  //     document.getElementById("smalx").style.display = "flex";
  //     document.getElementById("smald").style.display = "flex";
  //     document.getElementById("popup").style.width = "auto";
  //     document.getElementById("popup").style.height = "auto";
  //     document.getElementById("head-nav").style.bottom = "0";
  //   } else {
  //     document.getElementById("smalx").style.display = "none";
  //     document.getElementById("smald").style.display = "none";
  //     document.getElementById("popup").style.width = "0";
  //     document.getElementById("popup").style.height = "0";
  //     document.getElementById("head-nav").style.bottom = "auto";
  //   }
  // }}


  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document.getElementById("head-nav").style.boxShadow =
        "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05)";
    } else {
      document.getElementById("head-nav").style.boxShadow = "none";
  }}

  if(typeof window !== 'undefined') {
  window.onscroll = function () {
    scrollFunction();
  }
  }

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div id="popup" className="w-0 h-10 justify-center items-center flex-col flex fixed top-0 left-0 right-0 dark-navbar" style={{backgroundColor: "rgba(26,26,26, .5)", zIndex: "999999"}}>

    <div id="head-nav" className="fixed bg-white text-black max-sm:left-0 left-10 top-40  right-0 w-24 max-sm:top-0 rounded-xl">
      <div >
        <div className="hidden lg:flex flex-row xl:flex-row justify-between pr-0 pl-0 max-sm:pr-0 max-sm:pl-0 ">



        {/* <div className="xl:py-6 py-5 xl:block flex justify-between items-center">
            <Link
              href="/"
              id="had-img"
              style={{ marginLeft: "-100px" }}
              className="w-36 h-10 flex justify-center items-center"
            >
              <Image src={logo2} alt="Logo" className=''/>
            </Link>


          </div> */}

          <div style={{zIndex: "999"}} className="hidden xl:flex flex-row xl:flex-col items-center overflow-hidden font-medium tracking-wide ml-0 pl-3 max-sm:pl-0 rounded-lg">

          <Link href="/" className=" cursor-pointer hover:text-orange-500 font-semibold  flex mb-3 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-3 mr-2 active:bg-yellow-600 active:rounded-2xl active:py-3 active:px-2'>
                   <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                  </svg>
            Home
            </Link>

            <Link href="/features" className=" cursor-pointer hover:text-orange-500 font-semibold  flex mb-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-3 mr-2 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                  </svg>
              Search
              </Link>


            <Link href="/prices" className=" cursor-pointer hover:text-orange-500 font-semibold  flex mb-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className='w-2 mr-2 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
                       <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/>
                     </svg>
            About
            </Link>
            <Link href="/prices" className=" cursor-pointer hover:text-orange-500 font-semibold flex mb-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-3 mr-2 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </svg>
            Profile
            </Link>
          </div>

          {/* LOGO */}



          <div className="flex py-3">
          {/* <ThemeSwitcher /> */}
          <div>

          </div>
        </div>
        </div>








{/* mobile dropdown */}
        <div id="small-screen" style={{ zIndex: 99999 }} className="flex lg:hidden flex-col bg-black xl:flex-row justify-between pl-4 pr-5 xl:px-20">

          <div className="xl:py-6 py-5 xl:block flex justify-between items-center">
            <Link href="/" id="had-img" className="xl:w-72 w-28 h-10 flex justify-center items-center">
              <Image src={logo2} alt="Hazmick" style={{ marginLeft: "230px", marginTop: "8px" }} />
            </Link>

            <div
            // onClick={showHide}
            className="shadow-2xl xl:hidden absolute top-96 flex mt-44 bg-white w-72 justify-center rounded-2xl px-2 py-2 ml-7">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 text-blue-600 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg> */}



              <Link href="/">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-10 active:bg-yellow-600 active:rounded-2xl active:py-3 active:px-2'>
                   <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                  </svg>
              </Link>



              <Link href="/map">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='ml-10 w-10 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                  </svg>
              </Link>

              <Link href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className='ml-10 w-5 h-10 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
                       <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/>
                     </svg>
              </Link >

              <Link href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='ml-10 w-10 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                  </svg>
              </Link>



            </div>
          </div>

        {/* <div id="smald" className="hidden xl:flex flex-col xl:flex-row items-center overflow-hidden font-medium tracking-wide">

        <Link href="/" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 underline font-semibold">Index</Link>
            <Link href="/features" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500  underline font-semibold">Pricing</Link>


            <Link href="/prices" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 font-semibold underline " > Story</Link>
            <Link href="/prices" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 font-semibold underline" > Contact</Link>

        </div> */}


{/* login and signuo */}
        <div id="smalx" className="hidden xl:flex flex-col xl:flex-row pt-6 pb-16 xl:py-6 items-center justify-between">



        <Link
              className=" bg-orange-500 text-white  rounded-md flex px-8 py-3  outline-none hover:bg-blue-800 hover:justify-between"
              href="/auth/register"
            >
              <p className='hover:mr-5'>Add your Agency</p>
              <FontAwesomeIcon
                icon={faPersonWalkingArrowRight}
                className="w-7 ml-2"
                onClick={handleClick}
              />
            </Link>


        </div>


        </div>



      </div>
    </div>
    </div>
  );
}