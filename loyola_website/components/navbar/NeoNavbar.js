import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLogo from "./NavLogo";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const NeoNavbar = ()=>{

    const OPEN_DRAWER = 'max-h-screen trasition-all ease duration-700';
    const CLOSE_DRAWER = 'max-h-0 trasition-all ease duration-700';

    const CLOSE_LINK = 'max-h-0 trasition-all ease duration-700';
    const OPEN_LINK = 'max-h-52 trasition-all ease duration-700';

    const [hDrawer, sethDrawer] = useState(CLOSE_DRAWER);
    const [hAboutLink, setHAboutLink] = useState(CLOSE_LINK);
    const [hStuLink, setHStuLink] = useState(CLOSE_LINK);
    const [hAcadLink, setHAcadLink] = useState(CLOSE_LINK);

    const toggleDrawer = ()=>{
        //to toggle between close and open
        sethDrawer(hDrawer == CLOSE_DRAWER ? OPEN_DRAWER:CLOSE_DRAWER);
    };

    const toggleAboutLink = ()=>{
        setHAboutLink(hAboutLink == CLOSE_LINK?OPEN_LINK:CLOSE_LINK);
    };

    const toggleStuLink = ()=>{
        setHStuLink(hStuLink == CLOSE_LINK?OPEN_LINK:CLOSE_LINK);
    };

    const toggleAcadLink = ()=>{
        setHAcadLink(hAcadLink == CLOSE_LINK?OPEN_LINK:CLOSE_LINK);
    };

    const closeNavbar = ()=>{
        sethDrawer(CLOSE_DRAWER);
    }

    //to close the navbar on clicking backbutton on mobile
    useEffect(() => {
        const handleBackButton = () => {
            sethDrawer(CLOSE_DRAWER);
        };
    
        window.addEventListener('popstate', handleBackButton);
    
        return () => {
          window.removeEventListener('popstate', handleBackButton);
        };
      }, []);
    

    return (
        <div>
            <nav className={`h-14 grid grid-cols-2`}>
                <NavLogo/>
                <div className={`justify-self-end self-center lg:hidden`}>
                    <MenuRoundedIcon className={`cursor-pointer text-white`} onClick={toggleDrawer} style={{fontSize: "3rem"}}/>
                </div>
            </nav>
            <div id="nav-extension" className={`${hDrawer} overflow-hidden bg-white lg:hidden`}>
                <ul>
                    <NavAbout hDrawer={hDrawer} closeNavbar={closeNavbar} hAboutLink={hAboutLink} toggleAboutLink={toggleAboutLink}/>
                    <NavStudent hDrawer={hDrawer} closeNavbar={closeNavbar} hStuLink={hStuLink} toggleStuLink={toggleStuLink}/>
                    <NavAcads hDrawer={hDrawer} closeNavbar={closeNavbar} hAcadLink={hAcadLink} toggleAcadLink={toggleAcadLink}/>
                    <NavDepts hDrawer={hDrawer} closeNavbar={closeNavbar} />
                    <NavNews hDrawer={hDrawer} closeNavbar={closeNavbar} />
                    <NavAdmissions hDrawer={hDrawer} closeNavbar={closeNavbar}/>
                </ul>
            </div>
        </div>
    );
}

const NavAbout = ({hDrawer, hAboutLink, toggleAboutLink, closeNavbar})=>{
    return(
        <div>
            <p onClick={toggleAboutLink} className={`cursor-pointer`}>About<KeyboardArrowDownRoundedIcon/></p>
            <ul className={`${hAboutLink} overflow-hidden bg-white text-black z-10`}>
                <li>
                <Link href={`/about/about-uni`} onClick={closeNavbar}>About University</Link>
                </li>
                <li>
                <Link href={`/about/vision-mission`} onClick={closeNavbar}>Vision & Mission</Link>
                </li>
                <li>
                <Link href={`/about/crest-anthem`} onClick={closeNavbar}>Crest & Anthem</Link>
                </li>
                <li>
                <Link href={`/about/core-values`} onClick={closeNavbar}>Core Values</Link>
                </li>
            </ul>
        </div>
    );
}

//Navbar Student Component
const NavStudent = ({hDrawer, hStuLink, toggleStuLink, closeNavbar}) => {
    return (
        <div>
            <p onClick={toggleStuLink} className={`cursor-pointer`} >Student<KeyboardArrowDownRoundedIcon/></p>
            <ul className={`${hStuLink} overflow-hidden bg-white text-black`}>
                <li>
                <Link href={`/student/associations`} onClick={closeNavbar}>Associations</Link>
                </li>
                <li>
                <Link href={`/student/placements`} onClick={closeNavbar}>Placements</Link>
                </li>
                <li>
                <Link href={`/student/grievences`} onClick={closeNavbar}>Grievances</Link>
                </li>
            </ul>
        </div>
    );
}

//Navbar Academics Component
const NavAcads = ({hDrawer, hAcadLink, toggleAcadLink, closeNavbar}) => {
    return (
        <div>
            <p onClick={toggleAcadLink} className={`cursor-pointer`} >Academics<KeyboardArrowDownRoundedIcon/></p>
            <ul
                className={`${hAcadLink} overflow-hidden bg-white text-black`}
            >
                <li>
                <Link href={`/academics/ba`} onClick={closeNavbar}>B.A.</Link>
                </li>
                <li>
                <Link href={`/academics/bcom`} onClick={closeNavbar}>B.Com</Link>
                </li>
                <li>
                <Link href={`/academics/certificate-courses`} onClick={closeNavbar}>Study Of Languages</Link>
                </li>
                <li>
                <Link href={`/academics/certificate-courses`} onClick={closeNavbar}>Certificate Courses</Link>
                </li>
                <li>
                <Link href={`/academics/exam-results`} onClick={closeNavbar}>Examination Results</Link>
                </li>
            </ul>
        </div>
    );
}

//Navbar Departments Component
const NavDepts = ({hDrawer, closeNavbar}) => {
    return (
      <li>
        <Link
          href={"/departments"}
          className={``}
          onClick={closeNavbar}
        >
          Departments
        </Link>
      </li>
    );
  };

//Navbar News Component
const NavNews = ({hDrawer, closeNavbar}) => {
    return (
      <li>
        <Link
          href={"/news_events"}
          className={``}
          onClick={closeNavbar}
        >
          News & Events
        </Link>
      </li>
    );
  };

//Navbar Admissions Component
const NavAdmissions = ({hDrawer, closeNavbar}) => {
    return (
      <li>
        <Link
          href="/admissions"
          className={`font-black`}
          onClick={closeNavbar}
        >
          Admissions
        </Link>
      </li>
    );
  };

export default NeoNavbar;