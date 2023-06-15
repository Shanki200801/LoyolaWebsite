import React from 'react'
import NewsList from '@/components/news-events-page/NewsList'
import EventList from '@/components/news-events-page/EventList'
import CalenderComponent from '@/components/news-events-page/CalenderComponent'


const news_events = ({eventDataExport}) => {
  return (
    <div className='bg-gradient-to-tr from-slate-200 to-fuchsia-100'>
    <h1 className='bg-slate-300 text-navbar-theme font-semibold  text-3xl font-serif text-center py-6'>NEWS AND EVENTS</h1>
    <div className='flex flex-row  justify-center'>
      <div className='w-full my-4px'><NewsList eventDataExport={eventDataExport}/></div>
      {/* <div className='w-1/4'><CalenderComponent/></div> */}
      
    </div>
    </div>
  )
}
export async function getServerSideProps()   {
  const url = 'http://localhost:3000/api/event-data'; 
  const res = await fetch(url);
  const eventDataExport = await res.json();
  return {props: {eventDataExport}};
}
export default news_events