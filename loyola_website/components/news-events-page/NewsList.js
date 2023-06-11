import React from 'react'
import NewsFeatureCard from './NewsFeatureCard';
import TestImg from '@/Assets/clubs.png';
import styles from '../../styles/news-events-page.module.css';
const NewsList = () => {
  
    const eventObject =
    [
        {
            id: 1,
            image: TestImg,
            title: "This is the tAnthony Ferullo Named a CFO of the Yearitle give to an element",
            description: "Vice President of Finance and Chief Operating Officer Anthony Ferullo will be honored in July for his overall exceptional work and commitment at."
        },
        {
            id: 2,
            image: TestImg,
            title: "This is the tAnthony Ferullo Named a CFO of the Yearitle give to an element",
            description: "Vice President of Finance and Chief Operating Officer Anthony Ferullo will be honored in July for his overall exceptional work and commitment at."

        },
        {
            id: 3,
            image: TestImg,
            title: "This is the tAnthony Ferullo Named a CFO of the Yearitle give to an element",
            description: "Vice President of Finance and Chief Operating Officer Anthony Ferullo will be honored in July for his overall exceptional work and commitment at."
        }
    ]

    const eventListJSX = eventObject.map((event) => {
        return <NewsFeatureCard key={event.id} image={event.image} title={event.title} description={event.description} />
    })

    return (
    <div className={`${styles.pagecontainer}`}>
        {eventListJSX}
    </div>

  )
}

export default NewsList