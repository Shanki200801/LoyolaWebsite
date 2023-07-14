import * as React from "react";
import { Josefin_Sans, Aclonica, Inter, Oswald } from "next/font/google";
import Image from "next/image";
import imageOne from "../../public/placements/imageOne.webp";
import imageTwo from "../../public/placements/imageTwo.webp";
import imageThree from "../../public/placements/imageThree.webp";
import joshuaD from "@/public/placements/joshuaD.webp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const placementHead = Aclonica({ subsets: ["latin"], weight: "400" });
const overviewBody = Josefin_Sans({ subsets: ["latin"] });
const generalText = Inter({ subsets: ["latin"] });
const generalHeadings = Oswald({ subsets: ["latin"] });

const Placements = () => {
  return (
    <div
      className={`text-black bg-cover bg-[url('~/public/backgrounds/bgFour.webp')] bg-bottom bg-fixed`}
    >
      <div className={`bg-yellow-100/90`}>
        <PlacementHeader />
        <TrainingProg />

        <div className={`grid lg:grid-cols-3 grid-cols-1 mx-4 mt-10`}>
          <TrainingCards
            body="In association with TNS India foundation - Future skills program LMS - Ms. Mary"
            className={`justify-self-end`}
          />
          <TrainingCards
            body="In association with Magic bus foundation - Ms. Soumya, Ms. Prathyusha, Mr. Naveen and Mr. Chandra Mohan"
            className={`justify-self-center`}
          />
          <TrainingCards
            body="In association Hope foundation - Sis Jessy and Mr. Manjunath "
            className={`justify-self-start`}
          />
        </div>
        <Talks />
        <RecentActivities />
        <Process />
        <Stats />
        <PlacementDir />
      </div>
    </div>
  );
};

const PlacementHeader = () => {
  return (
    <div
      className={` grid lg:grid-cols-2 grid-cols-1 bg-gradient-to-tr from-red-700 to-black p-10`}
    >
      <h1
        className={`lg:text-8xl text-5xl justify-self-center self-center lg:pb-20 pb-10 text-white ${placementHead.className} tracking-tight text-shadow-white`}
      >
        PLACEMENTS
      </h1>
      <div
        id="header-box"
        className={`lg:w-5/6 justify-self-center self-center`}
      >
        <div
          className={`text-3xl text-amber-100 bg-gradient-to-tr from-orange-400 via-orange-600 to-orange-700 shadow-2xl rounded-custom box-shadow-custom-orange lg:p-10 p-3 ${overviewBody.className} `}
        >
          <p className={`tracking-tight`}>
            Placement cell of Loyola Degree College aims in equipping every
            student to be industry ready by offering placement training programs
            that are specially designed by keeping in mind the presents
            requirement of Job market.
          </p>
          <p className={`text-base mt-5`}>
            A series of guest lectures and career guidance sessions are
            conducted to broaden the perspectives of students in making them
            understand where they exactly fit. The placement cell provides both
            on campus and off campus placements assistance to the students.
          </p>
        </div>
      </div>
    </div>
  );
};

const TrainingProg = () => {
  return (
    <div>
      <h2
        className={`text-5xl mt-10 flex justify-center ${generalHeadings.className} underline underline-offset-4 decoration-orange-400 tracking-tight`}
      >
        Training{" "}
        <span className={`text-red-800 whitespace-pre`}> Programs</span>
      </h2>
      <p
        className={`lg:px-32 px-8 text-justify mt-10 ${generalText.className} tracking-tight`}
      >
        Along with academics the Placement cells aims in promoting employability
        integrated training programs for students of LDC. The Placement cell in
        association with TNS India foundation, Magic bus foundation and Hope
        foundation has organized various training programs both online and
        offline, the training modules covered soft skills for employability,
        quantitative aptitude and logical reasoning, verbal aptitude, resume
        building, communication, personality development, interview etiquettes,
        corporate linkage sessions and mock interviews. Alongside the training
        curriculum to students of LDC special assistance to certificate course
        like Tally ERP 9 and Microsoft office - Excel. Placement Cell also helps
        students interested in aspiring to crack different competitive
        examinations such as UPSC, SSC and Bank PO.
      </p>
      <h3
        className={`text-2xl lg:px-32 text-center mt-5 ${generalHeadings.className} underline underline-offset-2 decoration-orange-400 `}
      >
        Recent training programs conducted
      </h3>
    </div>
  );
};

const TrainingCards = (props) => {
  return (
    <a
      href="#"
      //   class={`w-64 h-52 relative block overflow-hidden rounded-lg border bg-green-200 border-gray-100 p-4 sm:p-6 lg:p-8 ${props.className}`}
      className={`w-64 lg:h-52 relative block overflow-hidden rounded-lg border bg-red-200 border-gray-100 shadow-md box-shadow-custom-red p-4 mb-2 sm:p-6 lg:p-8 ${props.className} hover:bg-rose-700 hover:text-white`}
    >
      {/* <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-yellow-200 via-rose-500 to-blue-400"></span>
      <p className={`${generalText.className} tracking-tighter`}>
        {props.body}
      </p>
    </a>
  );
};

const Talks = () => {
  return (
    <div>
      <h2
        className={`lg:text-5xl text-4xl mt-10 flex justify-center ${generalHeadings.className} underline underline-offset-4 decoration-orange-400 tracking-tight`}
      >
        Talks &{" "}
        <span className={`text-red-800 whitespace-pre`}> Guest Lectures </span>
      </h2>
      <p
        className={`lg:px-32 px-8 text-justify mt-10 ${generalText.className} tracking-tight`}
      >
        Cognitive interactions are the best way to mould student's understanding
        on different topics and recent socio-economic trends, so to increase the
        awareness among students talks and guest lectures by eminent individuals
        from different walks of life is regular feature in our campus. The main
        aim of these series of talks is to broaden the perspectives of students
        in understanding all possible career opportunities they can fit
        themselves and choosing the right career path on completion of the
        studies.{" "}
      </p>
    </div>
  );
};

const RecentActivities = () => {
  return (
    <div>
      <h2
        className={`lg:text-5xl text-4xl mt-10 text-center justify-center ${generalHeadings.className} underline underline-offset-4 decoration-orange-400 tracking-tight`}
      >
        <span className={`text-red-800 whitespace-pre`}>
          Recent activities{" "}
        </span>
        <span>conducted by the </span>
        <span className={`text-red-800 whitespace-pre`}> Placement Cell </span>
      </h2>
      <ul
        className={`flex flex-col items-center justify-center gap-4 lg:px-32 px-8 text-justify mt-10 ${generalText.className} tracking-tight`}
      >
        <li>
          <span className={`text-orange-600 font-semibold whitespace-pre`}>
            “NAVIGATION '23” {"("}Know where you belong{")"}{" "}
          </span>
          - Career guidance session for final year BCOM students was conducted
          on Feb 20, 2023. Specially topics such as Job opportunities after
          graduation, opportunities to pursue higher studies and preparation for
          UPSC - civil service exam was covered. The resource persons for the
          program were Prof Teena Maria Rani and Prof Grace Prerana from school
          of business, St Joseph's University.{" "}
        </li>
        <li>
          <Image src={imageOne} className={`bg-yellow-100 rounded-xl`} />
        </li>
        <li>
          Vijay Karnataka the largest read daily in Karnataka in association
          with Gillette India conducted a career guidance session for final year
          students of BCOM and BA on Feb 27, 2023. Special focus to
          opportunities in the area of communication and media covered. Mr.
          Sandeep the regional head was accompanied by Mr. Kishore and Ms.
          Chandni.
        </li>
        <li>
          <Image src={imageTwo} className={`bg-yellow-100 rounded-xl`} />
        </li>
      </ul>
    </div>
  );
};

const Process = () => {
  return (
    <div>
      <h2
        className={`lg:text-5xl text-4xl mt-5 flex justify-center ${generalHeadings.className} underline underline-offset-4 decoration-orange-400 tracking-tight`}
      >
        Placement{" "}
        <span className={`text-red-800 whitespace-pre`}> Process </span>
      </h2>

      <p
        className={`font-medium text-red-600 text-lg lg:px-32 px-16 text-center mt-7 ${generalText.className} tracking-tight`}
      >
        All the students of the final year batch are eligible to apply for
        campus placements.
      </p>

      <ul
        className={`flex flex-col gap-3 lg:px-32 px-16 justify-center mt-3 text-md ${generalText.className} tracking-tight`}
      >
        <span
          className={`border-2 border-amber-600 rounded-lg p-3 bg-amber-300`}
        >
          <li className={`pb-2`}>
            <span
              className={`text-red-600 font-semibold uppercase whitespace-pre`}
            >
              Step 1:
            </span>{" "}
            Registering for employability integrated training program with
            placement cell
          </li>
          <li className={`pb-2`}>
            <span
              className={`text-red-600 font-semibold uppercase whitespace-pre`}
            >
              Step 2:
            </span>{" "}
            Active participation and completion of assessments from the training
            modules with 90% results & 75% of attendance in all the placement
            activities will be the minimum eligibility to sit for campus
            placements{" "}
          </li>
          <li className={`pb-2`}>
            <span
              className={`text-red-600 font-semibold uppercase whitespace-pre`}
            >
              Step 3:
            </span>{" "}
            Submit a copy of training certificate with name and registration
            number{" "}
          </li>
          <li className={`pb-2`}>
            <span
              className={`text-red-600 font-semibold uppercase whitespace-pre`}
            >
              Step 4:
            </span>{" "}
            Release of eligibility list of students to seat for campus
            recruitment{" "}
          </li>
        </span>
      </ul>
    </div>
  );
};

const Stats = () => {
  return (
    <div>
      <h2
        className={`lg:text-5xl text-4xl mt-5 flex justify-center ${generalHeadings.className} underline underline-offset-4 decoration-orange-400 tracking-tight`}
      >
        Placement{" "}
        <span className={`text-red-800 whitespace-pre`}> Statistics </span>
      </h2>
      <ul
        className={`flex flex-col items-center justify-center gap-4 lg:px-32 px-8 pb-5 text-center mt-7 ${generalText.className} tracking-tight`}
      >
        <li className={`text-left`}>
          The academic year 2020 - 2021 was momentous for the placement cell of
          the Loyola degree college. A total number of 86 students were
          successfully placed in esteemed companies with annual CTC of 2.5 lakhs
          to 3 lakhs. In the Academic year 2021 - 2022 more than 90% of the
          students have opted for higher studies and have admitted themselves
          for post-graduation in commerce and arts.{" "}
        </li>
        <li className={`text-left`}>
          On Dec 21, 2023 campus recruitment drive was organised with L & T
          financial services and along with students of LDC other students from
          St. Joseph's university, Christ college, AMC college and Jain
          University addended the job drive and were placed with 3 lakhs CTC.
          Some of our esteemed recruiters are L&T, ASTER Pharma, Edutech, HDFC
          bank, Capgemini and Nirvana and Navi finance.
        </li>
        <li>
          <Image src={imageThree} className={`bg-yellow-100 rounded-xl`} />
        </li>
      </ul>
    </div>
  );
};

const PlacementDir = () => {
  return (
    <section>
      <h2
        className={`text-5xl mt-5 flex justify-center ${generalHeadings.className} underline underline-offset-4 decoration-orange-400 tracking-tight`}
      >
        Connect <span className={`text-red-800 whitespace-pre`}> With Us </span>
      </h2>
      <div className={`lg:grid lg:grid-cols-2 lg:py-10 lg:gap-10 `}>
        <div
          className={`flex justify-center mt-10 lg:mt-0 lg:justify-self-end `}
        >
          <Image
            src={joshuaD}
            className={`w-1/2 h-auto lg:w-52 lg:h-auto rounded shadow-xl`}
          />
        </div>
        <div
          className={` ${generalText.className} text-center mt-5 pb-4 lg:mt-0 text-sm lg:text-left lg:text-base lg:justify-self-start`}
        >
          <p className={`${generalHeadings.className} text-2xl lg:text-4xl`}>
            Placement Officer
          </p>
          <p
            className={`${generalHeadings.className} text-xl my-2 lg:text-3xl lg:mt-4`}
          >
            Mr. D Joshua{" "}
          </p>
          <p className={`my-1 lg:my-2`}>MCom, PhD {`(Pursuing)`}</p>
          <p className={`my-1 lg:my-2`}>
            <EmailIcon /> loyoladegreeplacement@gmail.com
          </p>
          <p className={`my-1 lg:my-2`}>
            <PhoneIcon /> 7760072442
          </p>
        </div>
      </div>
    </section>
  );
};

export default Placements;
