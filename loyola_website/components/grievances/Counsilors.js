import React from "react";
import { Lobster_Two, Oswald, Inter } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const Counsilors = () => {
  return (
    <div className="pb-8">
      <h1
        className={`${lobster.className} custom-letter-spacing-wider lg:text-5xl text-4xl py-6 text-center text-shadow-custom-blue text-black`}
      >
        Counsellor
      </h1>
      <div
        className={`${inter.className}  text-black lg:mx-80 mx-8 bg-gradient-to-t from-sky-500 to-sky-300 p-6 text-justify rounded-lg`}
      >
        The College provides the students with the services of professional
        counsellors to tackle emotional and academic problems. While the
        students are encouraged to visit the counsellors by voluntary
        appointment, the College may also refer students who may be judged to
        benefit from such referral. Regular value inputs are given to all
        students in order to deliberate on and assimilate human, social and
        spiritual values. Besides, a multi-religious prayer room is provided for
        yoga, quiet relaxation and prayer during recess hours.
      </div>
    </div>
  );
};

export default Counsilors;
