import Link from 'next/link';
import admissionsImg from '@/public/admissionsImg/admissions.webp'
import Image from 'next/image';
import { Allerta_Stencil } from 'next/font/google';
import { Inter, Oswald} from 'next/font/google';

const headingText = Allerta_Stencil({subsets: ['latin'], weight: '400'})
const bodyText = Inter({subsets: ['latin']});
const subheading = Oswald({subsets: ['latin']});   

const Admissions = () => {
    
    return ( 
        <div className='bg-white text-black'>
          <h1 className={`${headingText.className} lg:flex lg:justify-center lg:text-6xl lg:pt-8`}>Admissions</h1>
          <EligibilitySub/>
          <div className={`lg:grid lg:grid-cols-2 lg:px-32 lg:mt-32 lg:gap-10`}>
            <Image src={admissionsImg} className='lg:w-auto lg:h-full lg:object-cover hidden lg:block lg:visible'/>
            <InstructionsSub/>
          </div>
              
                  <h2>ADMISSION SCHOLARSHIP INSTRUCTIONS</h2>
              <table>
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
              <Link href="/admissions/form">Click here to apply!!</Link><br/>
            </div>     
     );
}

const EligibilitySub = ()=>{
  return (
    <section className={`lg:mt-16 lg:px-32`}>
      <h2 className={`${subheading.className} lg:text-4xl lg:underline lg:underline-offset-8`}>ELIGIBILITY</h2>
              <div className={` ${bodyText.className} lg:mt-10 lg:text-xl`}>
                <ul className={`lg:text-xl lg:space-y-5`}>
                  <li>B.Com  It is mandatory that the candidate scores a minimum of 55% in the previous board examination.</li>
                  <li>B.A  It is mandatory that the candidate scores a minimum of 45% in the previous board examination.</li>
                </ul>
              </div>
    </section>
  );
}

const InstructionsSub = ()=>{
  return(
    <section>
      <h2 className={` ${subheading.className} lg:text-4xl lg:underline lg:underline-offset-8`}>GENERAL INSTRUCTIONS</h2>
                <ol className={`list-decimal lg:mt-5`}>
                    <li>Application must be submitted online only.</li>
                    <li>The applicant should have a valid e-mail id and mobile number. </li>
                    <li>After submitting the application online, take a printout of the same and submit it to the college office on the same or next day. Applying online does not guarantee your seat in the college.</li>
                    <li>The college does not authorize any individual or organisation to process its admissions on its behalf. Candidates are advised to avoid SMS, email, WhatsApp messages and phone calls from unauthorised persons on or off its campus.</li>
                    <li>The registration and application fee are Rs 300, which is to be paid on the day of the submission of the hardcopy of the application and is non-refundable.</li>
                    <li>All admission is provisional, subject to the approval of Bangalore University.</li>
                    <li>The following documents to be carried along with the hard copy of the application form:</li>
                    <ol>
                       <li>The photocopies of the Marks card of Class X (PUC/Class XII Marks card and Transfer certificate to be submitted, if you have received only)</li>
                        <li>Photocopy of Aadhar card.</li>
                       <li>Photocopy of Caste and Income certificate.                    </li>
                        <li>Photocopy of Migration certificate (applicable to the students of other states only)</li>
                       <li>Four passport size photos</li>
                    </ol>
                </ol>
    </section>
  );
}
 
export default Admissions;