import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';

const EventInfo = ({eventDataExport}) => {
    const router = useRouter();
    const {eventroute} = router.query;
    const [longdescription, setLongdescription ] = useState([])
    const [photos, setPhotos] = useState([]);
    const [eventtitle, setEventtitle] = useState('');
    
  
  //setting local states as the correct data from the json
    useEffect(()=>{
      if (!router.isReady) return;
      eventDataExport.map(function (item){
        if(item.eventroute === eventroute){
          setLongdescription(item.longdescription);
          setPhotos(item.photos);
          setEventtitle(item.title);
        }
      });

    }, [router.query.eventroute, router.isReady])


    return (
        <div className='bg-slate-300 w-full'>
          <h1 className='text-navbar-theme text-2xl font-bold text-center pt-6 pb-12'>{eventtitle}</h1>
          {longdescription.map((paragraph) => {
            return <p className='text-gray-700 mx-16 pb-6 '>{paragraph}</p>
          })} 
          <h1 className='text-navbar-theme text-lg font-bold text-center py-6 '>Images</h1>
          
          <div className= 'grid grid-cols-3 place-content-around place-items-center'>
              {photos.map((image) => {
                return <Image src={image} width={200} height={200}/>
              })}
          </div>
        </div>
  )
}


export default EventInfo


//SSP
export async function getServerSideProps(){
  const url = 'http://localhost:3000/api/event-data';
  const res = await fetch(url);
  const eventDataExport = await res.json();
  return {
    props: {eventDataExport}
  };
}