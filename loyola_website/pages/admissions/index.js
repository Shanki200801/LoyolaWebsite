import Navbar from 'components/navbar/Navbar';
import styles from './Admissions.module.css';
import WelcomeImage from 'components/welcomeImage/WelcomeImage';
import { Announcement } from '@mui/icons-material';
import Announcements from 'components/announcementsMarquee/Announcements';
import Link from 'next/link';

const Admissions = () => {
    
    return ( 
        <>
        <Navbar />
        <div className="bg-slate-300 w-full">
            <h1 className=" text-4xl font-bold pb-5 text-indigo-900 text-center">
            <span className=" font-bold text-yellow-600"><u>ADMIS</u></span><u>SIONS</u></h1>
            <br /><br />
            <br /><br />
            <h2 className=" text-2xl font-bold pb-5 text-indigo-900 ml-24">
            <span className=" font-bold text-yellow-600"><u>ELIGI</u></span><u>BILITY</u></h2>
            <div className="text-black mx-40 font-medium leading-relaxed ">
                • BCom – It is mandatory that the candidate scores a minimum of 55% in the previous board examination.<br />
                • B.A – It is mandatory that the candidate scores a minimum of 45% in the previous board examination. <br /><br /><br />
            </div><br />
            <div>
                <h2 className="  text-2xl font-bold pb-5 text-indigo-900">
                <span className=" font-bold text-yellow-600"><u>GENERAL</u></span><u> INSTRUCTIONS</u></h2>
                <pre className="text-black mx-40 font-medium leading-relaxed "><br />
                    1. Application must be submitted online only.<br />
                    2. The applicant should have a valid e-mail id and mobile number. <br />
                    3. After submitting the application online, take a printout of the same and submit it to the college office on the same or next day. Applying online does not guarantee your seat in the college.<br />
                    4. The college does not authorize any individual or organisation to process its admissions on its behalf. Candidates are advised to avoid SMS, email, WhatsApp messages and phone calls from unauthorised persons on or off its campus.<br />
                    5. The registration and application fee are Rs 300, which is to be paid on the day of the submission of the hardcopy of the application and is non-refundable.<br />
                    6. All admission is provisional, subject to the approval of Bangalore University.<br />
                    7. The following documents to be carried along with the hard copy of the application form:<br />
                    <p class={styles.inner}>
                        i. The photocopies of the Marks card of Class X (PUC/Class XII Marks card and Transfer certificate to be submitted, if you have received only)<br />
                        ii. Photocopy of Aadhar card.<br />
                        iii. Photocopy of Caste and Income certificate.<br />
                        iv. Photocopy of Migration certificate (applicable to the students of other states only)<br />
                        v. Four passport size photos
                    </p>
                </pre>
            </div>
            <br /><br />
            <br /><br />

            <h2 className="  text-2xl font-bold pb-5 text-indigo-900">
            <span className=" font-bold text-yellow-600"><u>ADMISSION SCHOLARSHIP</u></span><u> INSTRUCTIONS</u></h2>
            <table className='text-indigo-900 border-solid border-indigo-900 ml-64'>
                
                <tr className='text-yellow-600'>
                    <th>CRITERIA</th>
                    <th>SCHOLARSHIP</th>
                </tr>
                <tr>
                    <td>Within 3 days of the announcement of PUC results</td>
                    <td>      10% of the fees</td>
                </tr>

                <tr>
                    <td>Within 3 days of the announcement of PUC results and above 85% marks</td>
                    <td>10% + 5% = 15% of the fees</td>
                </tr>

                <tr>
                    <td>Within 3 days of the announcement of PUC results and above 95% marks</td>
                    <td>10% + 15% = 25% of the fees</td>
                </tr>
            </table>


            <Link href="/" className='border-opacity-100 text-indigo-900 bg-yellow-600' >Here to apply!!</Link>
        </div>
        </>
     );
}
 
export default Admissions;