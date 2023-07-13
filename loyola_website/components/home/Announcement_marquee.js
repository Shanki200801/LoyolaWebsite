import React, { useEffect } from "react";
import styles from "../../styles/announcement_style.module.css";
import { Inter, Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const Announcement_marquee = () => {
  const content = () => {
    return [
      {
        index: 1,
        text: "Welcome to Loyola degree college",
      },
      {
        index: 2,
        text: " Offline classes have resumed for the students.",
      },
      {
        index: 3,
        text: " Admissions open for the batch of 2023 ",
      },
    ];
  };

  const list_elements = content().map((item) => (
    <li key={item.index} className="[style.inline-block] px-4">
      {item.text}
    </li>
  ));

  const numItems = content().length;

  // Calculate the duration of the marquee animation based on the number of items
  const duration = numItems * 5 + "s";

  // Apply the calculated duration to the animation property
  useEffect(() => {
    document.getElementById("marquee_list").style.animationDuration = duration;
  });

  return (
    <div className="flex flex-row items-center bg-slate-300 lg:px-4 sm:px-3 py-2">
      <button
        className={` ${oswald.className} px-4 py-2 mx-1 rounded-xl text-lg lg:w-1/8 w-32 border-0 hover:bg-navbar-theme hover:text-white bg-yellow-600 text-indigo-900`}
      >
        Announcements
      </button>
      <div className={styles.marqueecontainer}>
        <ul
          id="marquee_list"
          className={`${styles.marquee} ${inter.className} text-black`}
        >
          {list_elements}
        </ul>
      </div>
    </div>
  );
};

export default Announcement_marquee;
