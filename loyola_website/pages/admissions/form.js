import styles from '../../styles/Form.module.css'
import { useState } from 'react';

const Form = () => {

  const [religion, setReligion] = useState("");
    
function handleReligionTypeChange(e) {
  setReligion(e.target.value);
  console.log(religion);
}
  // const testJSX = () => {<label className={styles.label} for="full-name"> <input className={styles.input} id="first-name" name="first-name" type="text" required /></label><br/>};
  return ( 
        <div className={styles.body}>
            <h1 className={styles.h1}><br/>Admission Form 2023-24</h1><br/><br/>
    <p className={styles.p}>Please fill out this form with the required information</p><br/>
    <form className={styles.form} method="post" action=''>
        <label className={styles.label} for="course">Course
          <select className={styles.select} id="course" name="course" required>
            <option value="">--Select--</option>
            <option value="1">B.Com</option>
            <option value="2">B.A Journalism, Psychology</option>
            <option value="3">B.A Journalism, Political Science</option>
          </select>
        </label>

      <fieldset className={styles.fieldset}>
        <label className={styles.label} for="full-name">1. Name (In block letters, exactly as in SSLC Marks Card). <input className={styles.input} id="first-name" name="first-name" type="text" required /></label><br/>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label} for="dob">2. Date of Birth <input id="dob" name="dob" type="date" required className={styles.input} /></label><br />
        <label className={styles.label} for="place-of-birth">Place of Birth <input className={styles.input} id="place-of-birth" name="place-of-birth" type="text" required /></label><br/>
      </fieldset>

    <fieldset className={styles.fieldset}>
      <label className={styles.label} for="gender">3. Gender
          <select className={styles.select} id="gender" name="gender" required>
            <option value="">--Select--</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Third Gender</option>
          </select>
        </label>
    </fieldset> 

      <fieldset className={styles.fieldset}>
      <label className={styles.label} for="bg">4. Blood Group
          <select className={styles.select} id="bg" name="bg" required>
            <option value="">--Select--</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="3">B+</option>
            <option value="4">B-</option>
            <option value="5">O+</option>
            <option value="6">O-</option>
            <option value="7">AB+</option>
            <option value="8">AB-</option>
          </select>
        </label>
      </fieldset>
      
      <fieldset className={styles.fieldset}>
        <label className={styles.label} for="nationality">5. Nationality <input className={styles.input} id="nationality" name="nationality" type="text" required /></label><br/>
      </fieldset>

      <fieldset className={styles.fieldset}>
      <label className={styles.label} for="religion">6. Religion
          <select className={styles.select} id="religion" name="religion" onChange={handleReligionTypeChange} >
            <option value="">--Select--</option>
            <option value="1">Sanathana Dharma/ Hinduism</option>
            <option value="2">Buddhism</option>
            <option value="3">Sikhism</option>
            <option value="4">Jainism</option>
            <option value="5">Christianity</option>
            <option value="6">Roman Catholic</option>
            <option value="7">Islam</option>
            <option value="8">Zorastrianism</option>
            <option value="9">Judaism</option>
            <option value="10">Other</option>
          </select>
        </label><br />
        <label className={styles.label} for="religion2" >Enter your religion (if not listed above) <input className={styles.input} id="religion2" name="religion2" type="text" /></label><br/>
      </fieldset>



      <fieldset className={styles.fieldset}>
        <label className={styles.label} for="caste">7. Caste <input className={styles.input} id="caste" name="caste" type="text" /></label><br/>
        <label className={styles.label} for="subcaste"> Subcaste <input id="subcaste" name="subcaste" type="text"  className={styles.input} /></label>
 
      <label className={styles.label} for="group"> Group
          <select className={styles.select} id="group" name="group">
            <option value="">--Select--</option>
            <option value="1">SC/ST</option>
            <option value="2">Category I</option>
            <option value="3">II A</option>
            <option value="4">II B</option>
            <option value="5">III A</option>
            <option value="6">III B</option>
            <option value="7">GM</option>
            <option value="8">Other</option>
          </select>
        </label><br />

        <label className={styles.label} for="group2" >Enter your group (if not listed above) <input className={styles.input} id="group2" name="group2" type="text" /></label><br/>
      </fieldset>

      <fieldset className={styles.fieldset}>
      <label className={styles.label} for="house"> 8. House No. <input className={styles.input} id="house" name="house" type="text" required /></label><br/>
      <label className={styles.label} for="street"> Street <input className={styles.input} id="street" name="street" type="text" required /></label><br/>
      <label className={styles.label} for="area"> Area <input className={styles.input} id="area" name="area" type="text" required /></label><br/>
      <label className={styles.label} for="city"> Town/City <input className={styles.input} id="city" name="city" type="text" required /></label><br/>
      <label className={styles.label} for="pincode"> Pincode <input className={styles.input} id="pincode" name="pincode" type="text" required /></label><br/>
      <label className={styles.label} for="state"> State
          <select className={styles.select} id="state" name="state" required>
            <option value="">--Select--</option>
            <option value="1">Karnataka</option>
            <option value="2">Tamil Nadu</option>
            <option value="3">Other</option>
          </select>
        </label><br/>

        <label className={styles.label} for="state2" >Enter your state (if not listed above) <input className={styles.input} id="state2" name="state2" type="text" /></label><br/>

        <label className={styles.label} for="nri">Are you a NRI/ Foreigner
          <select className={styles.select} id="nri" name="nri" required>
            <option value="">--Select--</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </label>
      </fieldset>

      <fieldset className={styles.fieldset}>
      <label className={styles.label} for="spab">9. Are you specially abled?
          <select className={styles.select} id="spab" name="spab">
            <option value="">--Select--</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </label><br/>

        <label className={styles.label} for="spab2" > If Yes, specify type <input className={styles.input} id="spab2" name="spab2" type="text" /></label><br/>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label} for="ncla">10. Name of College/Institute Last Attended <input className={styles.input} id="ncla" name="ncla" type="text" required /></label><br/>
        <label className={styles.label} for="pcla"> Place of College/Institute Last Attended <input id="pcla" name="pcla" type="text" required className={styles.input} /></label>
      </fieldset>

      <fieldset className={styles.fieldset}>
      <label className={styles.label} for="qexam">11. Name of the Examination Passed
          <select className={styles.select} id="qexam" name="qexam" required>
            <option value="">--Select--</option>
            <option value="1">ISC</option>
            <option value="2">PUC</option>
            <option value="3">CBSE</option>
            <option value="4">Other</option>
          </select>
        </label><br/>

        <label className={styles.label} for="qexam2" > If other, please specify <input className={styles.input} id="qexam2" name="qexam2" type="text" /></label><br/>

      </fieldset>

      <fieldset className={styles.fieldset}>
      <label className={styles.label} for="ymop">12. Year and Month of Passing <br/> <>(Scroll/type to select year)</> <input id="ymop" name="ymop" type="month" required className={styles.input} /></label>
      </fieldset>

      <fieldset className={styles.fieldset}>
      <label className={styles.label} for="rnqe">13. Register Number in the Qualifying Examination <input id="rnqe" name="rnqe" type="text" required className={styles.input} /></label><br/><br/>

      <table className="table-auto">
  <thead >
    <tr>
      <th className='thead'>Subject</th>
      <th className='thead'>Maximum Marks</th>
      <th className='thead'>Marks Obtained</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input className={styles.input} type="text" required/></td>
      <td><input className={styles.input} type="text" required/></td>
      <td><input className={styles.input} type="text" required/></td>
    </tr>
    <tr>
      <td><input className={styles.input} type="text"required /></td>
      <td><input className={styles.input} type="text"required /></td>
      <td><input className={styles.input} type="text"required /></td>
    </tr>
    
    <tr>
      <td><input className={styles.input} type="text" required /></td>
      <td><input className={styles.input} type="text" required /></td>
      <td><input className={styles.input} type="text" required /></td>
    </tr>

    <tr>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
    </tr>

    <tr>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
    </tr>

    <tr>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
    </tr>

    <tr>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
    </tr>
    
    <tr>
      <td>Total Marks Obtained</td>
      <td><input className={styles.input} type="text" /></td>
      <td><input className={styles.input} type="text" /></td>
    </tr>
  </tbody>
</table><br/>

    <label className={styles.label} for="op">Overall Percentage <input className={styles.input} id="op" name="op" type="text" required /></label><br/>

</fieldset>
<fieldset className={styles.fieldset}>
    <p>First Language is English. Select your preferred Second Language.</p><br/>
        <label className={styles.label} for="bg">14. Language
          <select className={styles.select} id="bg" name="bg" required>
            <option value="">--Select--</option>
            <option value="1">Additional English</option>
            <option value="2">Kannada</option>
            <option value="3">Hindi</option>
            <option value="4">Telugu</option>
            <option value="5">Malayalam</option>
            <option value="6">Tamil</option>
          </select>
        </label><br />

        <label className={styles.label} for="smob">Student's Mobile Number <input className={styles.input} id="smob" name="smob" type="text" required /></label><br/>
        <label className={styles.label} for="semail">Student's Email ID <input className={styles.input} id="semail" name="semail" type="email" required /></label><br/>
        <label className={styles.label} for="smob">Aadhar Card Number <input className={styles.input} id="smob" name="aadhaarno" type="text" required minLength={12} /></label><br/>
</fieldset>


        <fieldset className={styles.fieldset}>
        <label className={styles.label} for="mname">15. Mother's Name <input className={styles.input} id="mname" name="mname" type="text" required /></label><br/>
        <label className={styles.label} for="fname">Father's Name <input className={styles.input} id="fname" name="fname" type="text" required /></label><br/>
        </fieldset>

        <fieldset className={styles.fieldset}>
        <label className={styles.label} for="moccup">16. Mother's Occupation <input className={styles.input} id="moccup" name="moccup" type="text" required /></label><br/>
        <label className={styles.label} for="foccup">Father's Occupation <input className={styles.input} id="foccup" name="foccup" type="text" required /></label><br/>
        </fieldset>

        <fieldset className={styles.fieldset}>
        <label className={styles.label} for="pmn">17. Parent's Mobile Number <input className={styles.input} id="pmn" name="pmn" type="text" required /></label><br/>
        <label className={styles.label} for="panpan">Parent's Alternate Mobile Number <input className={styles.input} id="pan" name="pan" type="text" /></label><br/>
        <label className={styles.label} for="pemail">Parent's Email ID (if any) <input className={styles.input} id="pemail" name="pemail" type="email" /></label><br/> 
        </fieldset>

        <fieldset className={styles.fieldset}>
        <label className={styles.label} for="income">18. Annual Income of the Family in Rupees <input className={styles.input} id="income" name="income" type="text" required /></label><br/>
        </fieldset>

      <fieldset className={styles.fieldset}>
        <p>19. Local Address (For Outstation Students)</p>
      <label className={styles.label} for="osshouse">  House No. <input className={styles.input} id="osshouse" name="osshouse" type="text"  /></label><br/>
      <label className={styles.label} for="ossstreet"> Street <input className={styles.input} id="ossstreet" name="ossstreet" type="text"  /></label><br/>
      <label className={styles.label} for="ossarea"> Area <input className={styles.input} id="ossarea" name="ossarea" type="text"  /></label><br/>
      <label className={styles.label} for="osscity"> Town/City <input className={styles.input} id="osscity" name="osscity" type="text"  /></label><br/>
      <label className={styles.label} for="osspincode"> Pincode <input className={styles.input} id="osspincode" name="osspincode" type="text"  /></label><br/>
      <label className={styles.label} for="ossstate"> State
      <input className={styles.input} id="ossstate" name="ossstate" type="text"  /></label><br/>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label} for="cca"> 20. Extra Curricular/ Co Curricular Activities During PUC
            <textarea className={styles.textarea} id="cca" name="cca" rows="3" cols="30" ></textarea>
        </label>
      </fieldset>

      <fieldset className={styles.fieldsetlast}>
        <label className={styles.label} for="gn">21. Guardian Name <input className={styles.input} id="gn" name="gn" type="text"  /></label><br/>
        <label className={styles.label} for="gm">Guardian Mobile No. <input className={styles.input} id="gm" name="gm" type="text"  /></label><br/>
      </fieldset>



      <input className={styles.inputsubmit} type="submit" value="Submit" />
    </form>


        </div>
     );
}
 
export default Form;
