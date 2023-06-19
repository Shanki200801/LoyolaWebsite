import "../styles/global.css";
import { Space_Mono, Pirata_One } from "next/font/google";
import logo from '@/Assets/logo.png';
import Image from "next/image";

import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";

const bannerText = Space_Mono({subsets:['latin'], weight: '700'});
const clgName = Pirata_One({subsets:['latin'], weight: '400'});

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className={`hidden lg:block`}>
        <Navbar/>
        <Component {...pageProps}/>
        <Footer/>
      </div>
      <div className={`lg:hidden h-screen bg-white text-white text-center text-4xl flex justify-center items-center flex-col p-5 bg-gradient-to-tr from-teal-500 to-indigo-900`}>
        <Image src={logo} className={`w-24`}/>
        <div className={`${clgName.className}`}>Loyola Degree College</div>
        <div className={`${bannerText.className} mt-10 border-4 border-green-300 p-5`}>This website has not been optimized for mobile and tablets. Please open it on a laptop or desktop.</div>
      </div>
    </div>
  )
}
