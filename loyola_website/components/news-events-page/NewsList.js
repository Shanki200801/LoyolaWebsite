import React from "react";
import NewsFeatureCard from "./NewsFeatureCard";
import styles from "../../styles/news-events-page.module.css";

const NewsList = ({ eventDataExport }) => {
  return (
    <div className={`${styles.pagecontainer}`}>
      {eventDataExport.map((event) => {
        return (
          <NewsFeatureCard
            key={event.id}
            thumbnail={event.thumbnail}
            title={event.title}
            description={event.description}
            longdescription={event.longdescription}
            imagefolder={event.imagefolder}
            eventroute={event.eventroute}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
