import React from 'react';
import LogoName from './LogoName';
import CallIcon from '@mui/icons-material/CallSharp';
import MobileIcon from '@mui/icons-material/PhoneAndroidSharp';
//  import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
// import Image from 'next/image';

const map_embed_link = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.592227058149!2d77.58879226482097!3d12.869593440922875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ac94e0b1eeb%3A0x561e8f0c78851bf0!2sLOYOLA+COMPOSITE+PU+COLLEGE!5e0!3m2!1sen!2sin!4v1503305299908'
const Footer = () => {
  return (
    <>
    <div className='flex flex-row bg-navbar-theme text-white items-center justify-between'>
      <div className='flex flex-col '>
        <LogoName/>
        <div className='px-32 py-4 flex flex-col'>
          <span className='text-lg'>IIMB Post, P.B.7645,</span>
          <span className='text-lg'>Bannerghatta Road,</span>
          <span className='text-lg'>Bengaluru, Karnataka - 560076</span>
        </div>
      </div>
      <div className='flex flex-col py-6 px-8'>
        <iframe src={map_embed_link} height={250} width = {500}></iframe>
      </div>
      <div className='flex flex-col text-lg px-8'>
        <a className='py-2' href='tel:08026584690'><CallIcon/>080-26584690</a>
        <a className = 'py-2' href='tel:8904525696'><MobileIcon/>8904525696</a>
        <a className = 'py-2' href = 'http://loyolacollegeblr.com/contact.html#'><EmailIcon/> loyolacollegeblr.com</a>
        {/* <a href =''><Image src = {FacebookSharpIcon} height={50} width = {50}/> 080-26584690</a> */}
        <a className = 'py-2' href='https://www.instagram.com/loyoladegreeofficial/?hl=en'><InstagramIcon/> loyoladegreeofficial</a>

      </div>
    </div>
    </>
  )
}

export default Footer