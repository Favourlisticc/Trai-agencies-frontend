import Image from 'next/image';
import Link from 'next/link'
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialYoutube,

} from "react-icons/ti";

import {
    SlSocialLinkedin,
    SlSocialInstagram

} from "react-icons/sl";


import logo from "../public/Screenshot (33)_prev_ui.png";



export default function Footer() {
  return (
    <div>
      <div id="footer" style={{ backgroundColor: "rgba(249,250,251,1)" }} className=" px-6 pt-12 lg:pt-24 pb-4 lg:pb-8">

     <div className='flex '>
     <div className='ml-10'>
        <Image src={logo} alt="Picture of the author" className='w-52'/>
        <p>Street washingron awe number a2901 manchester, Kentuncky</p>
        <div className='flex justify-between'>
            <TiSocialFacebook />

            <TiSocialTwitter />

            <TiSocialYoutube />

            <SlSocialInstagram />

            <SlSocialLinkedin />
        </div>
        <div>

        </div>
      </div>

        <div id="footer-1" className="flex flex-wrap lg:flex-row flex-col justify-between items-start ml-72">

          <div className="flex flex-col py-3 lg:py-0">

            <div>
              <h2 className=" text-base font-bold tracking-wide ">About</h2>
            </div>

            <div className="py-4 font-medium tracking-wider leading-9 text-sm">

              <Link className="block" href="/features"> Features</Link>

              <Link className="block" href="/dashboard/settings">Pricing</Link>

              <Link className="block" href="/about-us"> Company</Link>

              <Link className="block" href="/careers"> Careers</Link>

              <Link className="block" href="/press">Press</Link>

            </div>
          </div>
          <div className="flex flex-col py-3 lg:py-0">
            <div>
              <h2 className=" text-base font-bold tracking-wide ">Learn</h2>
            </div>
            <div className="py-4 font-medium tracking-wider leading-9 text-sm">
              <p>Blog</p>
              <p>Youtube</p>
              <p>Help</p>

              <Link className="block" href="/social-trading">Social Trading</Link>
            </div>
          </div>
          <div className="flex flex-col py-3 lg:py-0">
            <div>
              <h2 className=" text-base font-bold tracking-wide ">Resources</h2>
            </div>

            <div className="py-4 font-medium tracking-wider leading-9 text-sm">
              <p>Whitepaper</p>

              <Link className="block" href="/referral-program"> Referral Program </Link>
            </div>
          </div>
          <div className="flex flex-col py-3 lg:py-0">

            <div>
              <Link href="/contact-us" className=" text-base font-bold tracking-wide block">Contact</Link>
            </div>

            <div className="py-4 font-medium tracking-wider leading-9 text-sm">

              <p>support@trai.xyz</p>
              <Link className="block" href="/privacy-and-policy">Privacy Policy</Link>

              <Link className="block" href="/disclaimer">Disclaimer</Link>

              <Link className="block" href="/terms-of-services"> Terms and services</Link>
            </div>
          </div>
        </div>
     </div>
<hr/>
        <div id="footer-3" className="pt-5 lg:pt-10 pb-10">
          <div className="font-medium tracking-wider text-center text-sm">
            <p>© 2020-2023 TRAI Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
