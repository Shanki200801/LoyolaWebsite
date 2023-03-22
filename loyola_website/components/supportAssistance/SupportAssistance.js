import React from 'react'
import Image from 'next/image'
import Icon from '../../Assets/GitHub-Mark.png'


// const SupportAssistance = () => {
//   return (
//   <>
//     <h1>Support and Assistance</h1>
//     <div className='flex flex-col'>
//       <div className = 'flex flex-row'>
//         <Image src={Icon} height={100} width={100}/>
//         <Image src={Icon} height={100} width={100}/>
//         <Image src={Icon} height={100} width={100}/>
//       </div>
//     </div>
//   </>
    
//   )
// }

const SupportAssistance = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Support and Assistance</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center
transition-transform duration-300 transform hover:-translate-y-1">
          <Image src={Icon} height={50} width={50} alt="Campus
Facilities" className="h-16 w-16 mb-2" />
          <div className="font-semibold">Campus Facilities</div>
        </div>
        <div className="flex flex-col items-center justify-center
transition-transform duration-300 transform hover:-translate-y-1">
          <Image src={Icon} height={50} width={50} alt="Clubs and
Associations" className="h-16 w-16 mb-2" />
          <div className="font-semibold">Clubs and Associations</div>
        </div>
        <div className="flex flex-col items-center justify-center
transition-transform duration-300 transform hover:-translate-y-1">
          <Image src={Icon} height={50} width={50} alt="Mid Day Meals" 
className="h-16 w-16 mb-2" />
          <div className="font-semibold">Mid Day Meals</div>
        </div>
        <div className="flex flex-col items-center justify-center
transition-transform duration-300 transform hover:-translate-y-1">
          <Image src={Icon} height={50} width={50} alt="Scholarships"
className="h-16 w-16 mb-2" />
          <div className="font-semibold">Scholarships</div>
        </div>
      </div>
    </div>
  );
};



export default SupportAssistance