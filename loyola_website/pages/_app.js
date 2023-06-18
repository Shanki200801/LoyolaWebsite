import "../styles/global.css";

import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </>

  )
}
