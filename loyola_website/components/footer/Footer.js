import React from "react";
import LogoName from "./LogoName";
import CallIcon from "@mui/icons-material/CallSharp";
import MobileIcon from "@mui/icons-material/PhoneAndroidSharp";
//  import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
// import Image from 'next/image';

const map_embed_link =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.592227058149!2d77.58879226482097!3d12.869593440922875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ac94e0b1eeb%3A0x561e8f0c78851bf0!2sLOYOLA+COMPOSITE+PU+COLLEGE!5e0!3m2!1sen!2sin!4v1503305299908";
const Footer = () => {
	return (
		<>
			<div className="flex flex-row bg-navbar-theme text-white items-center justify-between px-20">
				<div className="flex flex-col w-3/4 ">
					<div className="flex flex-row justify-center">
						<LogoName className="self-center" />
					</div>
					<div className="flex flex-row text-lg px-4 justify-between items-center">
						<div className=" flex flex-col w-1/3 justify-center">
							<span className="text-lg">IIMB Post, P.B.7645,</span>
							<span className="text-lg">Bannerghatta Road, Bengaluru</span>
							<span className="text-lg">Karnataka - 560076</span>
						</div>
						<div>
							<p className="py-2">
								<a className="py-2" href="tel:08026584690">
									<CallIcon className="m-2"/>
									080-26584690
								</a>
							</p>
							<p className="py-2">
								<a className="py-2" href="tel:8904525696">
									<MobileIcon className="m-2"/>
									8904525696
								</a>
							</p>
						</div>
						<div>
							<p className="py-2">
								<a
									className="py-2"
									href="http://loyolacollegeblr.com/contact.html#"
								>
									<EmailIcon className="m-2"/> loyolacollegeblr.com
								</a>{" "}
							</p>
							{/* <a href =''><Image src = {FacebookSharpIcon} height={50} width = {50}/> 080-26584690</a> */}
							<p className="py-2"> 
								<a
									className="py-2"
									href="https://www.instagram.com/loyoladegreeofficial/?hl=en"
								>
									<InstagramIcon className="m-2"/> loyoladegreeofficial
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col py-6 px-8 m-4">
					<iframe
						className=""
						src={map_embed_link}
						height={250}
						width={500}
					></iframe>
				</div>
			</div>
		</>
	);
};

export default Footer;
