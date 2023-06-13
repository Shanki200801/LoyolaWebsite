import Navbar from 'components/navbar/Navbar';
import WelcomeImage from 'components/welcomeImage/WelcomeImage';
import { Announcement } from '@mui/icons-material';
import Announcements from 'components/announcementsMarquee/Announcements';
import Link from 'next/link';
import Form from './form';
const Admissions = () => {
    
    return ( 
        <>
        <Navbar />
        <div className="bg-slate-300 w-full">
            <h1 className=" text-4xl font-bold pb-5 text-indigo-900 text-center">ADMISSIONS</h1>
            <br /><br />
            <br /><br />
            <h2 className=" text-2xl font-bold pb-5 text-indigo-900 ml-24">ELIGIBILITY</h2>
            <div className="text-black mx-40 font-medium leading-relaxed ">
                • BCom  It is mandatory that the candidate scores a minimum of 55% in the previous board examination.<br />
                • B.A  It is mandatory that the candidate scores a minimum of 45% in the previous board examination. <br /><br /><br />
            </div><br />
            <div>
                <h2 className="  text-2xl font-bold pb-5 text-indigo-900">GENERAL INSTRUCTIONS</h2>
                <li>
                <ol className="text-black mx-40 font-medium leading-relaxed list-decimal">
                    <li>Application must be submitted online only.</li>
                    <li>The applicant should have a valid e-mail id and mobile number. </li>
                    <li>After submitting the application online, take a printout of the same and submit it to the college office on the same or next day. Applying online does not guarantee your seat in the college.</li>
                    <li>The college does not authorize any individual or organisation to process its admissions on its behalf. Candidates are advised to avoid SMS, email, WhatsApp messages and phone calls from unauthorised persons on or off its campus.</li>
                    <li>The registration and application fee are Rs 300, which is to be paid on the day of the submission of the hardcopy of the application and is non-refundable.</li>
                    <li>All admission is provisional, subject to the approval of Bangalore University.</li>
                    <li>The following documents to be carried along with the hard copy of the application form:</li>
                    <ol className="ml-32 list-[lower-roman]">
                       <li>The photocopies of the Marks card of Class X (PUC/Class XII Marks card and Transfer certificate to be submitted, if you have received only)</li>
                        <li>Photocopy of Aadhar card.</li>
                       <li>Photocopy of Caste and Income certificate.                    </li>
                        <li>Photocopy of Migration certificate (applicable to the students of other states only)</li>
                       <li>Four passport size photos</li>
                    </ol>
                </ol>
                </li>
            </div>
            <br /><br />
            <br /><br />

            <h2 className=" text-2xl font-bold pb-5 text-indigo-900">ADMISSION SCHOLARSHIP INSTRUCTIONS</h2>
            <table className="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>


            <Link href="/admissions/form" className='border-opacity-100 text-indigo-900 bg-yellow-600' >Here to apply!!</Link>
        </div>
        </>
     );
}
 
export default Admissions;