
<<<<<<< HEAD
import Announcements from "../components/announcementsMarquee/Announcements";
import Announcement_marquee from "components/shashank-announcement-marquee/Announcement_marquee";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from "../components/courses/Courses";
import WelcomeImage from "../components/welcomeImage/WelcomeImage";
import WelcomeText from "../components/welcomeText/WelcomeText";
import SupportAssistance from "../components/supportAssistance/SupportAssistance";
import FeaturedRecentEvents from '../components/featuredRecentEvents/FeaturedRecentEvents';
=======
import Announcement_marquee from "@/components/home/Announcement_marquee";
import Courses from "../components/home/Courses";
import WelcomeImage from "../components/home/WelcomeImage";
import WelcomeText from "../components/home/WelcomeText";
import SupportAssistance from "../components/home/SupportAssistance";
import Gallery from '../components/home/Gallery';

>>>>>>> bf2ee80ae2c172cf195c955141d09dbb1dbe768c



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