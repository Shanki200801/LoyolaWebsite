import React from 'react';

const ImageComponent = () => {
  return (
    <img
      src="http://bjes.org/institutions/loyola_pu.JPG"
      alt="Top Image"
      style={{
        width: '100%',
        height: 'auto',
        top: '-400px',
        left: '0',
        zIndex: '1',
      }}
    />
  );
};

export default ImageComponent;