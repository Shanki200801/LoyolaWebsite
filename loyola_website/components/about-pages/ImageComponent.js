import React from 'react';

const ImageComponent = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.25%' }}>
      <img
        src="http://bjes.org/institutions/loyola_pu.JPG"
        alt="Top Image"
        style={{ position: 'absolute', top: '-400px', left: '0', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ImageComponent;
