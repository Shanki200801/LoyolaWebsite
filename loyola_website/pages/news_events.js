import React from 'react'
import NewsList from '@/components/news-events-page/NewsList'
import EventList from '@/components/news-events-page/EventList'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import CalenderComponent from '@/components/news-events-page/CalenderComponent'


const news_events = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-row  justify-center'>
      <div className='w-full my-4px'><NewsList/></div>
      {/* <div className='w-1/4'><CalenderComponent/></div> */}
      
    </div>
    <Footer/>
    </>
  )
}

export default news_events