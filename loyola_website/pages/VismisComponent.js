import React, { useEffect, useRef } from 'react';

const VismisComponent = () => {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const visionElement = visionRef.current;
    const missionElement = missionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateX(0)';
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateX(-50px)';
          }
        });
      },
      {
        root: null,
        threshold: 0.3, // Adjust this threshold value as needed
      }
    );

    if (visionElement) {
      observer.observe(visionElement);
    }

    if (missionElement) {
      observer.observe(missionElement);
    }

    return () => {
      if (visionElement) {
        observer.unobserve(visionElement);
      }

      if (missionElement) {
        observer.unobserve(missionElement);
      }
    };
  }, []);

  return (
    <div className="grid h-screen bg-slate-300">
      <div className="text-justify text-black mx-48 font-medium text-lg leading-relaxed">
        <div>
          <h1
            className="text-3xl font-bold pb-5 text-indigo-900"
            style={{
              marginTop: '50px',
              opacity: 0,
              transform: 'translateX(-50px)',
              transition: 'opacity 0.5s, transform 0.5s',
            }}
            ref={visionRef}
          >
            <span className="font-bold text-yellow-600">OUR</span> VISION
          </h1>
        </div>
        <p>Our Vision: is to empower the students to be men and women for others.</p>

        <div>
          <h1
            className="text-3xl font-bold pb-5 text-indigo-900"
            style={{
              marginTop: '50px',
              opacity: 0,
              transform: 'translateX(-50px)',
              transition: 'opacity 0.5s, transform 0.5s',
            }}
            ref={missionRef}
          >
            <span className="font-bold text-yellow-600">OUR</span> MISSION
          </h1>
        </div>
        <p>
          The educational objective of Loyola Degree College is to prepare men and women for the service of the Nation.
          The College provides students with plentiful opportunities to critically understand society and its structures
          so that education becomes a tool to work for a humane and just society. Stress is laid on academic excellence,
          character formation, social concern, and human development.
        </p>
      </div>
    </div>
  );
};

export default VismisComponent;
