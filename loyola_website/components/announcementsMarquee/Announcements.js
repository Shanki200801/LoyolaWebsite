import { Container } from "postcss";
import React from "react";

const Announcements = () => {
	return (
		<div class="flex px-10 bg-white">
			<div class="flex-none w-32 bg-blue-800 ...">Announcement</div>
			<div class="flex-auto w-64 ...">
				<marquee>
					<h1>WELCOME TO ST JOSEPHS COLLEGE</h1>
				</marquee>
			</div>
		</div>
	);
};

export default Announcements;
