import "../styles/global.css";

import NeoNavbar from "@/components/navbar/NeoNavbar.js";
import Footer from "../components/footer/Footer.js";
import OgNavbar from "@/components/navbar/og-Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <OgNavbar/> */}
      <NeoNavbar/>
      <Component {...pageProps}/>
      {/* <Footer/> */}
    </>

  )
}
