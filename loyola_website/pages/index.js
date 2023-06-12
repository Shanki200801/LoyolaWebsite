import Announcement_marquee from "@/components/home/Announcement_marquee";
import Courses from "../components/home/Courses";
import WelcomeImage from "../components/home/WelcomeImage";
import WelcomeText from "../components/home/WelcomeText";
import SupportAssistance from "../components/home/SupportAssistance";
import Gallery from '../components/home/Gallery';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
			<WelcomeImage />
			<Announcement_marquee />
			<WelcomeText />
			<Gallery />
			<Courses />
			<SupportAssistance />
    </>
	);
}