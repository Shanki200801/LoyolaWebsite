import React from 'react'
import Image from 'next/image'
import Icon from '../../Assets/GitHub-Mark.png'

const SupportAssistance = () => {
  return (
  <>
    <h1>Support and Assistance</h1>
    <div className='flex flex-col'>
      <div className = 'flex flex-row'>
        <Image src={Icon} height={100} width={100}/>
        <Image src={Icon} height={100} width={100}/>
        <Image src={Icon} height={100} width={100}/>
      </div>
    </div>
  </>
    
  )
}

export default SupportAssistance