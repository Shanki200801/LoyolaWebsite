import React from 'react'
import Image from 'next/image';
import styles from "./news-events-page.module.css";


const NewsFeatureCard = ({ image, title, description }) => {
    
        return (
          <div className= {`${styles.cardcontainer}`}>
            {/* Image */}
            <div className={`${styles.eventimage} odd:float-right`}>
              <Image src={image} alt="News"  className={`${styles.image}`} />
            </div>
            
            {/* Content */}
            <div className={`${styles.eventinfo}`}>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        );
    };


export default NewsFeatureCard