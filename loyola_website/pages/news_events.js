import React from 'react'
import NewsList from '@/components/news-events-page/NewsList'
import EventList from '@/components/news-events-page/EventList'
import CalenderComponent from '@/components/news-events-page/CalenderComponent'


const news_events = () => {
  return (
    <>
    <h1 className='bg-slate-300 text-navbar-theme text-3xl font-bold text-center py-6'>NEWS AND EVENTS</h1>
    <div className='flex flex-row  justify-center'>
      <div className='w-full my-4px'><NewsList/></div>
      {/* <div className='w-1/4'><CalenderComponent/></div> */}
      
    </div>
    </>
  )
}

export default news_events