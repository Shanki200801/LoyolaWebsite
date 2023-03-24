import React, { useEffect } from "react";
import styles from "./announcement_style.module.css";
import Script from "next/script";

const Announcement_marquee = () => {
	const content = () => {return [
		{
			index: 1,
			text: "Welcome to st josephs's college",
		},
		{
			index: 2,
			text: "Admissions for the 2023 batch is now open! click on the admissions button",
		},
		{
			index: 3,
			text: " Congratulations Soundharya R for becoming an ACCA affliate ",
		},
		{
			index: 4,
			text: " Congratulations to our MCom students for winning overall Championship ",
		},
	];
	}

	const list_elements = content().map((item) => 
	<li className="[style.inline-block] px-4">{item.text}</li>
	)

	const numItems = content().length;

				// Calculate the duration of the marquee animation based on the number of items
	const duration = numItems * 5 + 's';
			  
				// Apply the calculated duration to the animation property
	useEffect(() => {
		document.getElementById('marquee_list').style.animationDuration = duration
	 })

	return (
		<div className="flex flex-row items-center bg-slate-300">
			<button className="btn btn-default w-1/8 mx-4 bg-yellow-600 text-indigo-900">Announcements</button>
			<div className={styles.marqueecontainer}>
				<ul id= "marquee_list" className={`${styles.marquee} text-black`} >
					{list_elements}
				</ul>
			</div>	
		</div>
	);
};

export default Announcement_marquee;
