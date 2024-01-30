import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react";
import { useState } from 'react';


import logo2 from "../public/icon/trai-logo.png";


// import { ThemeSwitcher } from './ThemeSwitch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

  const showHide = () => {
    if(typeof window !== 'undefined') {

    let main = document.getElementById("smald").style.display;

    if (main == "none") {
      document.getElementById("smalx").style.display = "flex";
      document.getElementById("smald").style.display = "flex";
      document.getElementById("popup").style.width = "auto";
      document.getElementById("popup").style.height = "auto";
      document.getElementById("head-nav").style.bottom = "0";
    } else {
      document.getElementById("smalx").style.display = "none";
      document.getElementById("smald").style.display = "none";
      document.getElementById("popup").style.width = "0";
      document.getElementById("popup").style.height = "0";
      document.getElementById("head-nav").style.bottom = "auto";
    }
  }}


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

    <div id="head-nav" className="fixed bg-black left-0 right-0 w-full top-0 ">
      <div >
        <div id="big screen" className="hidden lg:flex flex-col xl:flex-row justify-between pr-5 pl-8">





          <div className="hidden xl:flex flex-col xl:flex-row items-center overflow-hidden font-medium tracking-wide ml-0">

          <Link href="/" className=" cursor-pointer hover:text-orange-500 font-semibold underline">Index</Link>
            <Link href="/features" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 font-semibold underline">Pricing</Link>


            <Link href="/prices" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 font-semibold underline" > Story</Link>
            <Link href="/prices" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 font-semibold underline" > Contact</Link>
          </div>

          {/* LOGO */}
          <div className="xl:py-6 py-5 xl:block flex justify-between items-center">
            <Link
              href="/"
              id="had-img"
              style={{ marginLeft: "-100px" }}
              className="w-36 h-10 flex justify-center items-center"
            >
              <Image src={logo2} alt="Logo" className=''/>
            </Link>


          </div>


          <div className="flex py-3">
          {/* <ThemeSwitcher /> */}
          <div>

            <Link
              className=" bg-orange-500 text-white rounded-md flex px-8 py-3  outline-none hover:bg-white font-bold hover:text-orange-500 hover:justify-between"
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








{/* mobile dropdown */}
        <div id="small-screen" style={{ zIndex: 99999 }} className=" flex lg:hidden flex-col bg-black xl:flex-row justify-between pl-4 pr-5 xl:px-20">

          <div className="xl:py-6 py-5 xl:block flex justify-between items-center">
            <Link href="/" id="had-img" className="xl:w-72 w-28 h-10 flex justify-center items-center">
              <Image src={logo2} alt="Hazmick" style={{ marginLeft: "-10px", marginTop: "8px" }} />
            </Link>

            <div onClick={showHide} className="block xl:hidden">
              <svg
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
              </svg>

            </div>
          </div>

        <div id="smald" className="hidden xl:flex flex-col xl:flex-row items-center overflow-hidden font-medium tracking-wide">

        <Link href="/" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 underline font-semibold">Index</Link>
            <Link href="/features" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500  underline font-semibold">Pricing</Link>


            <Link href="/prices" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 font-semibold underline " > Story</Link>
            <Link href="/prices" className="px-5 py-5 xl:py-6 cursor-pointer hover:text-orange-500 font-semibold underline" > Contact</Link>

        </div>


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