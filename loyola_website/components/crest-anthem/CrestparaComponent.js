import React, { useEffect, useState } from 'react';
import Logo from '../../Assets/logo.png';
const CrestparaComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  const contentStyle = {
    flex: 1,
    marginLeft: '-200px',
  };
  const imageStyle = {
    marginLeft: '-20px',
    maxWidth: '300px', 
    maxHeight: '300px',
  };
  return (
    <div className="bg-slate-300" style={containerStyle}>
      <div style={contentStyle}>
      <div className="text-justify text-black mx-48 font-medium text-lg leading-relaxed">
      <div>
        <h1 className="text-3xl font-bold pb-5 text-indigo-900" >
          <span className="font-bold text-yellow-600">THE COLLEGE </span> CREST
        </h1>
      </div>
      <p>The college crest has a rising sun that radiates<br></br> the letters "IHS" that are inscribed in the center.<br></br>
        This is the abbreviation of the name of Jesus <br></br> (which in Greek is written as IHUS).<br></br> The name symbolizes deepest faith in God,<br></br>
        commitment to humanity, and the readiness <br></br>to sacrifice one's life for others.<br></br> This is also the logo of the Jesuits.<br></br>
        On the right side is the rock which is a bed for two trees.<br></br> The rock signifies the necessity of a strong philosophical<br></br>
        foundation on which there are two trees which signify growth <br></br> and development. It also signifies ecological concerns.<br></br>
        The bottom of the crest has the picture of the fort that<br></br> belonged to the family of Ignatius of Loyola.<br></br>
        It reminds us of the inner transformation<br></br> St. Ignatius experienced in his life,<br></br> after which he renounced his ambitions<br></br>
        of knightly glory and dedicated himself to<br></br> love and serve humanity and establish His kingdom of justice.<br></br></p>    
    </div>
      </div>
      {isClient && (
        <div style={imageStyle}>
          <img src= {Logo.src} alt="Logo"  />
        </div>    
      )}

    </div>
  );
};

export default CrestparaComponent;
