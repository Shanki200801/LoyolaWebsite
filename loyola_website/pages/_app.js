import "../styles/global.css";

import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";
import OgNavbar from "@/components/navbar/og-Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <OgNavbar/> */}
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </>

  )
}
