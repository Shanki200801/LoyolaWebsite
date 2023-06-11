import Announcement_marquee from "@/components/home/Announcement_marquee";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from "../components/home/Courses";
import WelcomeImage from "../components/home/WelcomeImage";
import WelcomeText from "../components/home/WelcomeText";
import SupportAssistance from "../components/home/SupportAssistance";
import FeaturedRecentEvents from '../components/home/FeaturedRecentEvents';

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