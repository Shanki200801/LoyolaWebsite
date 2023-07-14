import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Inter, Economica } from "next/font/google";

const raleway = Economica({ subsets: ["latin"], weight: "700" });
const bodyText = Inter({ subsets: ["latin"] });

const Exam = () => {
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgTwo.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-sky-100/90`}>
        <h1
          className={`text-black lg:text-6xl text-5xl p-6 ${raleway.className} font-bold flex justify-center`}
        >
          Examination Results
        </h1>
        <div id="examBody" className="flex justify-center items-center h-96">
          <NoResAlrt msg="No results to display. Please check back later!" />
        </div>
      </div>
    </div>
  );
};

const NoResAlrt = (props) => {
  return (
    <div
      className={`flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 lg:w-3/5 lg:h-1/3 w-4/5 items-center ${bodyText.className}`}
      role="alert"
    >
      <InfoIcon style={{ fontSize: "2.5rem" }} />
      <div className="text-4xl ml-4">{props.msg}</div>
    </div>
  );
};

export default Exam;
