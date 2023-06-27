import * as React from "react";
import { Lobster_Two, Inter, Oswald } from "next/font/google";

const heading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const bodyText = Inter({ subsets: ["latin"] });
const subheading = Oswald({ subsets: ["latin"] });

const SCReport2022 = () => {
  return (
    <div
      className={`bg-[url('~/public/backgrounds/bgTwo.webp')] bg-cover bg-center bg-fixed text-black`}
    >
      <div className={`bg-sky-100/80 pb-10`}>
        <h1
          className={`${heading.className} text-center lg:flex lg:justify-center text-4xl pt-5 lg:text-6xl`}
        >
          Student Council Election Report 2022
        </h1>
        <section
          className={`${bodyText.className} mt-10 mx-5 py-5 px-8 text-justify border-2 border-sky-800 lg:mx-44 lg:text-xl`}
        >
          <div>
            On 09/11/22 the Election of the year 2022-23 for student council was
            conducted. Students were excited to do the voting and the election
            committee under the guidance of the chief election commissioner Mr.
            Calvin George the polling booth for the election was arranged. Every
            year students used to cast their votes through ballet papers but,
            this year new technology was used in which students casted their
            votes in electronic mode. The voting started at 11 am and the first
            votes of the election was casted by the candidates under the
            guidance of the presiding officer Dr. Vincent A along with the
            supervision of our principal Fr Dr. Alphonse Fernandes S.J. In the
            election polling room representatives were present on behalf of each
            of the candidates. The press LOY T.V headed by Mr. Lazarus Lepcha
            covered the entire election process and interacted the voters. At 3
            pm Election was completed. The first two round results were
            announced in the quadrangle by our principal and vice principal it
            was a very exciting and thrilled movement among the voters aswell as
            candidates. The candidates were interviewed by LOY T V after the
            first-round results. Final round results were announced at 4 pm by
            Mr. Calvin George, the results were as follows:
          </div>
          <ol className={`list-decimal mt-5 lg:px-10`}>
            <li>President- Hemanth V (3RD B. Com B)</li>
            <li>Vice-president-Sharal Aquinus (3RD B. Com B)</li>
            <li>Secreatary- Nikhil Teja (2ND B. Com C)</li>
            <li>Joint Secreatary- Vivek Kumar Mourya (1ST B. Com A)</li>
            <li>Cultural Secreatary- Shan Michael (2ND B.A)</li>
            <li>Sports Secreatary- Shreekanth R (3RD B. Com B) </li>
          </ol>
          <div className={`mt-5`}>
            After the announcement of the results the new council members
            addressed the gathering and presidential speech was given by our
            principal Fr Dr. Alphonse Fernandes S.J. At the end of the day the
            photo session of election committee members along with the new
            student's council members of the year 2022-23 was held.
          </div>
        </section>
      </div>
    </div>
  );
};

export default SCReport2022;
