
import Announcements from "../components/announcementsMarquee/Announcements";
import Announcement_marquee from "components/shashank-announcement-marquee/Announcement_marquee";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from "../components/courses/Courses";
import WelcomeImage from "../components/welcomeImage/WelcomeImage";
import WelcomeText from "../components/welcomeText/WelcomeText";
import SupportAssistance from "../components/supportAssistance/SupportAssistance";
import FeaturedRecentEvents from '../components/featuredRecentEvents/FeaturedRecentEvents';



import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Navbar />
			<WelcomeImage />
			{/* <Announcements /> */}
			<Announcement_marquee />
			<WelcomeText />
			<FeaturedRecentEvents />
			<Courses />
			<SupportAssistance />
			<Footer />
    </>
	);
}