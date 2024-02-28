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

    <div id="head-nav" className="fixed bg-white text-black max-sm:left-0 left-10 top-40  right-0 w-24 max-sm:top-0 rounded-xl drop-shadow-2xl">
      <div >
        <div className="hidden lg:flex flex-row xl:flex-row justify-between pr-0 pl-0 max-sm:pr-0 max-sm:pl-0 drop-shadow-2xl">



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
          <svg  className='mr-2 mt-1 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" fill="#000000"></path><path d="M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.19L1.29 11.4c-.22-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-2 3.2-3.78 3.2ZM11.99 2.93c-.53 0-1.06.16-1.45.47L3.61 8.96c-.56.45-.96 1.49-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.11-.7-.29-1.76-.84-2.2l-6.93-5.54c-.4-.32-.94-.48-1.47-.48Z" fill="#000000"></path></svg>

            Home
            </Link>

            <Link href="/map" className=" cursor-pointer hover:text-orange-500 font-semibold  flex mb-3">
            <svg className=' mr-1 mt-1 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15.65 21.408c-.43 0-.86-.09-1.21-.26l-5.25-2.63c-.3-.15-.89-.14-1.18.03l-2.36 1.35c-1.02.58-2.07.66-2.86.19-.8-.46-1.25-1.4-1.25-2.58v-9.72c0-.91.6-1.94 1.39-2.39l4.33-2.48c.73-.42 1.84-.45 2.59-.07l5.25 2.63c.3.15.88.13 1.18-.03l2.35-1.34c1.02-.58 2.07-.66 2.86-.19.8.46 1.25 1.4 1.25 2.58v9.73c0 .91-.6 1.94-1.39 2.39l-4.33 2.48c-.38.2-.88.31-1.37.31Zm-7.01-4.49c.43 0 .86.09 1.21.26l5.25 2.63c.3.15.88.13 1.18-.03l4.33-2.48c.32-.18.63-.72.63-1.08v-9.73c0-.63-.18-1.1-.51-1.28-.32-.18-.82-.11-1.36.2l-2.35 1.34c-.73.42-1.84.45-2.59.07l-5.25-2.63c-.3-.15-.88-.13-1.18.03l-4.33 2.48c-.32.18-.63.72-.63 1.09v9.73c0 .63.18 1.1.5 1.28.32.19.82.11 1.37-.2l2.35-1.34c.39-.23.89-.34 1.38-.34Z" fill="#000000"></path><path d="M8.559 17.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .41-.34.75-.75.75ZM15.73 20.751c-.41 0-.75-.34-.75-.75V6.621c0-.41.34-.75.75-.75s.75.34.75.75v13.38c0 .41-.34.75-.75.75Z" fill="#000000"></path></svg>

              Search
              </Link>


            <Link href="/prices" className=" cursor-pointer hover:text-orange-500 font-semibold  flex mb-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className='w-2 mr-3 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
                       <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/>
                     </svg>
            About
            </Link>

            <Link href="/prices" className=" cursor-pointer hover:text-orange-500 font-semibold flex mb-3" >
               <svg className='mr-1 mt-1 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12.159 11.62h-.08a.543.543 0 0 0-.18 0c-2.9-.09-5.09-2.37-5.09-5.18 0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03Zm-.16-8.87a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68a3.7 3.7 0 0 0-3.69-3.69ZM12.172 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z" fill="#000000"></path></svg>

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
        <div className='flex justify-center'>
        <div id="small-screen" style={{ zIndex: 99999 }} className="flex lg:hidden flex-col  xl:flex-row justify-between">

<div className="xl:block flex justify-between items-center">
  {/* <Link href="/" id="had-img" className="xl:w-72 w-28 h-10 flex justify-center items-center">
    <Image src={logo2} alt="Hazmick" style={{ marginLeft: "230px", marginTop: "8px" }} />
  </Link> */}


 <div
  // onClick={showHide}
  className="shadow-2xl xl:hidden absolute top-96 flex mt-44 bg-white rounded-2xl px-7 py-2 w-72" >
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
    <svg  className=' active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2' xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z" fill="#000000"></path><path d="M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.19L1.29 11.4c-.22-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-2 3.2-3.78 3.2ZM11.99 2.93c-.53 0-1.06.16-1.45.47L3.61 8.96c-.56.45-.96 1.49-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.11-.7-.29-1.76-.84-2.2l-6.93-5.54c-.4-.32-.94-.48-1.47-.48Z" fill="#000000"></path></svg>
    </Link>



    <Link href="/map">
        <svg className='ml-10 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2' xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 24 24" fill="none"><path d="M15.65 21.408c-.43 0-.86-.09-1.21-.26l-5.25-2.63c-.3-.15-.89-.14-1.18.03l-2.36 1.35c-1.02.58-2.07.66-2.86.19-.8-.46-1.25-1.4-1.25-2.58v-9.72c0-.91.6-1.94 1.39-2.39l4.33-2.48c.73-.42 1.84-.45 2.59-.07l5.25 2.63c.3.15.88.13 1.18-.03l2.35-1.34c1.02-.58 2.07-.66 2.86-.19.8.46 1.25 1.4 1.25 2.58v9.73c0 .91-.6 1.94-1.39 2.39l-4.33 2.48c-.38.2-.88.31-1.37.31Zm-7.01-4.49c.43 0 .86.09 1.21.26l5.25 2.63c.3.15.88.13 1.18-.03l4.33-2.48c.32-.18.63-.72.63-1.08v-9.73c0-.63-.18-1.1-.51-1.28-.32-.18-.82-.11-1.36.2l-2.35 1.34c-.73.42-1.84.45-2.59.07l-5.25-2.63c-.3-.15-.88-.13-1.18.03l-4.33 2.48c-.32.18-.63.72-.63 1.09v9.73c0 .63.18 1.1.5 1.28.32.19.82.11 1.37-.2l2.35-1.34c.39-.23.89-.34 1.38-.34Z" fill="#000000"></path><path d="M8.559 17.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .41-.34.75-.75.75ZM15.73 20.751c-.41 0-.75-.34-.75-.75V6.621c0-.41.34-.75.75-.75s.75.34.75.75v13.38c0 .41-.34.75-.75.75Z" fill="#000000"></path></svg>
    </Link>

    <Link href="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" className='ml-12 h-8 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2'>
             <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/>
           </svg>
    </Link >

    <Link href="">
    <svg className='ml-12 active:bg-yellow-600 active:rounded-xl active:py-2 active:px-2' xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 24 24" fill="none"><path d="M12.159 11.62h-.08a.543.543 0 0 0-.18 0c-2.9-.09-5.09-2.37-5.09-5.18 0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03Zm-.16-8.87a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68a3.7 3.7 0 0 0-3.69-3.69ZM12.172 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z" fill="#000000"></path></svg>
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
    </div>
  );
}