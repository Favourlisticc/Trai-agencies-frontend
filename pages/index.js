import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Link } from 'react-scroll';

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MapComponent from '@/components/map/map'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
        <title>HomePage | Trai</title>
        <meta name="description" content="Trai - World Class Recruitment Agency Index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svg/Copy_of_Black_Simple_Clothing_Brand_Logo_-_2.svg" />
      </Head>
    <Navbar />
    <main className='bg bg'>
      <div className='mt-28 mb-12'>
          <h1 className='text-4xl text-center mx-52 font-medium max-sm:text-sm max-sm:mx-0'>Creating Global Connections And Building Trust For Companies And Job Recruiters</h1>

        <div className='flex justify-center'>
          <Link to="targetDiv" smooth={true} duration={500} offset={-70}>
            <button className='mt-5 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-500 active:bg-white active:text-black active:border-2'>Join Our Waiting List</button>
          </Link>
        </div>
      </div>
    <MapComponent />

    <div id="targetDiv" className='mt-20 mb-20 flex justify-center max-sm:flex-col'>

      <input type="email" name="email" id="" placeholder='Email' className='py-2 border-2 border-blue-600 rounded-md w-80 pl-2 focus:border-blue-500 max-sm:ml-7'/>
      <button className='ml-8 px-2 rounded-md bg-blue-600 text-white active:bg-blue-300 active:text-black max-sm:mt-5 max-sm:ml-20 max-sm:w-52 max-sm:py-2'>Join waitList</button>
   </div>


    </main>
<Footer />
   </>
  )
}
