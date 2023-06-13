import React from 'react';

const VismisComponent = () => {
  return (
    <div className="grid h-screen bg-slate-300">
      <div className="text-justify text-black mx-48 font-medium text-lg leading-relaxed">
        <div>
          <h1 className="text-3xl font-bold pb-5 text-indigo-900" style={{ marginTop: '50px' }}>
            <span className="font-bold text-yellow-600">OUR</span> VISION
          </h1>
        </div>
        <p>Our Vision: is to empower the students to be men and women for others.</p>

        <div>
          <h1 className="text-3xl font-bold pb-5 text-indigo-900" style={{ marginTop: '50px' }}>
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
