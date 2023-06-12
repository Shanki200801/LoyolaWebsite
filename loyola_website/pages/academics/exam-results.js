import * as React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Josefin_Sans } from 'next/font/google';

const raleway = Josefin_Sans({subsets:['latin']});

const Exam = ()=>{
    return(
        <div className='bg-white'>
            <h1 className={`text-black text-6xl p-5 ${raleway.className} font-bold underline`}>Exam Results</h1>
            <div id="examBody" className='flex justify-center items-center h-96'>
                <NoResAlrt msg="No results to display. Please check back later!"/>
            </div> 
        </div>
    );
}

const NoResAlrt = (props)=>{
    return(
        <div className={`flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-3/5 h-1/3 items-center ${raleway.className}`} role="alert">
            <InfoIcon style={{fontSize: '2.5rem'}}/>
            <div className='text-4xl ml-4'>
                {props.msg}
            </div>
        </div>
    );
}

export default Exam;