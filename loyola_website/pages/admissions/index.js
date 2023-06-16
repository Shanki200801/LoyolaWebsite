import Link from 'next/link';
import styles from '../../styles/Form.module.css'
const Admissions = () => {
    
    return ( 
        <>
        <div className="bg-slate-300 w-full"><br/>
            <h1 className=" text-4xl font-bold pb-5 text-indigo-900 text-center">ADMISSIONS</h1>
            <br /><br />
            <br />
            <h2 className=" text-2xl font-bold pb-5 text-indigo-900 ml-24">ELIGIBILITY</h2>
            <div className="text-black mx-40 font-medium leading-relaxed ">
                B.Com  It is mandatory that the candidate scores a minimum of 55% in the previous board examination.<br />
                B.A  It is mandatory that the candidate scores a minimum of 45% in the previous board examination. <br /><br /><br />
            </div><br />
            <div>
                <h2 className="  text-2xl font-bold pb-5 text-indigo-900 ml-24">GENERAL INSTRUCTIONS</h2>
                <li>
                <ol className="text-black mx-48 font-medium leading-relaxed list-decimal">
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

            <h2 className=" text-2xl font-bold pb-5 text-indigo-900 ml-24">ADMISSION SCHOLARSHIP INSTRUCTIONS</h2><br/>
            <table className="ml-80 bg-slate-300 text-black border-collapse border-2 border-black">
  <thead>
    <tr>
      <th className='border-2 border-black'>Criteria</th>
      <th className='border-2 border-black'>Scholarship</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td className='border-2 border-black'>Within 3 days of the announcement of PUC results</td>
      <td className='border-2 border-black'>10% of the fees</td>
      
    </tr>
    <tr>
      <td className='border-2 border-black'>Within 3 days of the announcement of PUC results and above 85% marks</td>
      <td className='border-2 border-black'>10% + 5% = 15% of the fees</td>
      
    </tr>
    <tr>
      <td className='border-2 border-black'>Within 3 days of the announcement of PUC results and above 95% marks</td>
      <td className='border-2 border-black'>10% + 15% = 25% of the fees</td>
    </tr>
  </tbody>
</table><br/><br/>
            <Link href="/admissions/form" className={styles.inputsubmit2} >Click here to apply!!</Link><br/>
        </div>
        </>
     );
}
 
export default Admissions;