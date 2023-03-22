// Create navbar component here 
// (For Sid)
// Import NavLogo.js from the same folder.

import React from "react";
import NavLogo from "./NavLogo";
import styles from "./NavbarStyles.module.css";
import "./NavbarStyles.module.css";
function Navbar2(){
    return(
        <>
        <nav className={styles.nav}>
        <a className="" href="http://loyolacollegeblr.com/home.html"><NavLogo/></a>

        <div>
            <ul id={styles.ul}>
                <li><a href="http://loyolacollegeblr.com/Students_Corner.html" target="_blank">Student</a></li>
                <li><a href="http://loyolacollegeblr.com/ba.html" target="_blank">Academics</a></li>
                <li><a href="http://loyolacollegeblr.com/founder.html" target="_blank">About</a></li>
                <li><a href="http://loyolacollegeblr.com/news.html" target="_blank">News</a></li>
                <li><a href="http://loyolacollegeblr.com/home.html" target="_blank">Admissions</a></li>
            </ul>
        </div>

        </nav>
        </>
    )
}

export default Navbar2;