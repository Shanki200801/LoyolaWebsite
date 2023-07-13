import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const EventInfo = ({ eventDataExport }) => {
  const router = useRouter();
  const { eventroute } = router.query;
  const [longdescription, setLongdescription] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [eventtitle, setEventtitle] = useState("");
  const [hasPhotos, setHasPhotos] = useState(false);

  //setting local states as the correct data from the json
  useEffect(() => {
    if (!router.isReady) return;
    eventDataExport.map(function (item) {
      if (item.eventroute === eventroute) {
        setLongdescription(item.longdescription);
        setPhotos(item.photos);
        setEventtitle(item.title);
        if (item.photos.length > 0) {
          setHasPhotos(true);
        }
      }
    });
  }, [router.query.eventroute, router.isReady]);

  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgTwo.webp')] bg-bottom bg-fixed w-full`}
    >
      <div className={`bg-blue-100/90 px-4`}>
        <h1 className="text-navbar-theme text-2xl font-extrabold text-center pt-6 pb-12 font-serif">
          {eventtitle}
        </h1>
        {longdescription.map((paragraph) => {
          return (
            <p className="text-gray-700 lg:mx-24 text-justify pb-6 ">
              {paragraph}
            </p>
          );
        })}
        {hasPhotos && (
          <h1 className="text-navbar-theme text-lg font-bold text-center py-6 ">
            PHOTOS
          </h1>
        )}
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 lg:place-content-around place-items-center py-2 lg:py-6">
          {photos.map((image) => {
            return (
              <Image
                src={image}
                width={400}
                height={400}
                className="lg:my-4 mx-8"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;

//SSP
export async function getServerSideProps() {
  const url = "https://loyola-website.vercel.app/api/event-data";
  const res = await fetch(url);
  const eventDataExport = await res.json();
  return {
    props: { eventDataExport },
  };
}
