import Announcement_marquee from "components/shashank-announcement-marquee/Announcement_marquee";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from "../components/Courses";
import WelcomeImage from "../components/WelcomeImage";
import WelcomeText from "../components/WelcomeText";
import SupportAssistance from "../components/SupportAssistance";
import FeaturedRecentEvents from '../components/FeaturedRecentEvents';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
			<WelcomeImage />
			<Announcement_marquee />
			<WelcomeText />
			<FeaturedRecentEvents />
			<Courses />
			<SupportAssistance />
    </>
	);
}