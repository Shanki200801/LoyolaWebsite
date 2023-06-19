import Link from "next/link";
import admissionsImg from "@/public/admissionsImg/admissions.webp";
import scholarshipImg from "@/public/admissionsImg/scholarshipImg.webp";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Allerta_Stencil, Inter, Oswald } from "next/font/google";

const headingText = Allerta_Stencil({ subsets: ["latin"], weight: "400" });
const bodyText = Inter({ subsets: ["latin"] });
const subheading = Oswald({ subsets: ["latin"] });

const Admissions = () => {
  return (
    <div className=" text-black to-blue-400 bg-white">
      <h1
        className={`${headingText.className} flex justify-center text-4xl lg:text-6xl pt-8`}
      >
        Admissions
      </h1>
      <EligibilitySub />
      <div
        className={`hidden lg:grid lg:grid-cols-2 lg:px-10 lg:mt-5 lg:gap-10 lg:py-10 lg:mx-32 bg-gradient-to-br from-amber-400 to-amber-500`}
      >
        <Image
          src={admissionsImg}
          className="lg:w-auto lg:h-full lg:object-cover"
        />
        <GenInstructionsSub />
      </div>
      <div className={`lg:hidden`}>
        <Image src={admissionsImg} />
        <GenInstructionsSub className="py-10 px-8 bg-gradient-to-br from-amber-400 to-amber-500" />
      </div>
      <Image src={scholarshipImg} className="lg:hidden" />
      <ScholarshipInstructionsSub />
      <div className={`flex justify-center p-10`}>
        <Button
          variant="contained"
          href="/admissions/form2"
          size="large"
          className={`text-xl lg:text-3xl lg:p-5 ${subheading.className}`}
        >
          Apply Now!
        </Button>
      </div>
    </div>
  );
};

const EligibilitySub = () => {
  return (
    <section
      className={`mt-10 px-6 lg:mt-16 lg:mx-32 lg:px-10 py-10 bg-gradient-to-tl from-emerald-800 to-emerald-600 text-white`}
    >
      <h2
        className={`${subheading.className} text-2xl lg:text-4xl underline underline-offset-8`}
      >
        ELIGIBILITY
      </h2>
      <div className={` ${bodyText.className} mt-5 lg:mt-10 lg:text-xl`}>
        <ul className={`space-y-3 lg:text-xl lg:space-y-5`}>
          <li>
            B.Com It is mandatory that the candidate scores a minimum of 55% in
            the previous board examination.
          </li>
          <li>
            B.A It is mandatory that the candidate scores a minimum of 45% in
            the previous board examination.
          </li>
        </ul>
      </div>
    </section>
  );
};

const GenInstructionsSub = (props) => {
  return (
    <section className={`${props.className} `}>
      <h2
        className={` ${subheading.className} text-2xl lg:text-4xl underline underline-offset-8`}
      >
        GENERAL INSTRUCTIONS
      </h2>
      <ol className={`list-decimal  mt-5`}>
        <li>Application must be submitted online only.</li>
        <li>The applicant should have a valid e-mail id and mobile number. </li>
        <li>
          After submitting the application online, take a printout of the same
          and submit it to the college office on the same or next day. Applying
          online does not guarantee your seat in the college.
        </li>
        <li>
          The college does not authorize any individual or organisation to
          process its admissions on its behalf. Candidates are advised to avoid
          SMS, email, WhatsApp messages and phone calls from unauthorised
          persons on or off its campus.
        </li>
        <li>
          The registration and application fee are Rs 300, which is to be paid
          on the day of the submission of the hardcopy of the application and is
          non-refundable.
        </li>
        <li>
          All admission is provisional, subject to the approval of Bangalore
          University.
        </li>
        <li className={``}>
          The following documents to be carried along with the hard copy of the
          application form:
          <ol className={`list-[upper-roman] pl-10`}>
            <li>
              The photocopies of the Marks card of Class X (PUC/Class XII Marks
              card and Transfer certificate to be submitted, if you have
              received only)
            </li>
            <li>Photocopy of Aadhar card.</li>
            <li>Photocopy of Caste and Income certificate. </li>
            <li>
              Photocopy of Migration certificate (applicable to the students of
              other states only)
            </li>
            <li>Four passport size photos</li>
          </ol>
        </li>
      </ol>
    </section>
  );
};

const ScholarshipInstructionsSub = () => {
  return (
    <section
      className={` p-6 lg:mt-5 lg:px-32 lg:mx-32 lg:grid lg:justify-center bg-gradient-to-tl from-emerald-800 to-emerald-600 text-white`}
    >
      <h2
        className={`${subheading.className} text-2xl text-center lg:text-4xl underline underline-offset-8 lg:flex lg:justify-center`}
      >
        ADMISSION SCHOLARSHIP INSTRUCTIONS
      </h2>
      <table className={`mt-10`}>
        <thead>
          <tr>
            <th className="border-2 border-white p-3">Criteria</th>
            <th className="border-2 border-white p-3">Scholarship</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-white p-3">
              Within 3 days of the announcement of PUC results
            </td>
            <td className="border-2 border-white p-3">10% of the fees</td>
          </tr>
          <tr>
            <td className="border-2 border-white p-3">
              Within 3 days of the announcement of PUC results and above 85%
              marks
            </td>
            <td className="border-2 border-white p-3">
              10% + 5% = 15% of the fees
            </td>
          </tr>
          <tr>
            <td className="border-2 border-white p-3">
              Within 3 days of the announcement of PUC results and above 95%
              marks
            </td>
            <td className="border-2 border-white p-3">
              10% + 15% = 25% of the fees
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Admissions;
