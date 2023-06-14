import React from 'react'
import Image from 'next/image';
import styles from "../../styles/news-events-page.module.css";
import Link from 'next/link';


const NewsFeatureCard = ({id, image, title, description, longdescription, imagefolder, eventroute }) => {
      console.log('id is '+ title);      
      const eventlink = `/news_events/${id}`
        return (
          <div className= {`${styles.cardcontainer} my-4`}>
            {/* Image */}
            <div className={`${styles.eventimage} odd:float-right`}>
              <Image src={image} alt="News"  className={`${styles.image}`} />
            </div>
            
            {/* Content */}
            <div className={`${styles.eventinfo}` }>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div className="text-gray-600">{description}
                
                </div>
                <Link  href={`/news_events/${eventroute}`} className='relative  right-0 bottom-0'>read more..</Link>
            </div>
          </div>
        );
    };


export default NewsFeatureCard