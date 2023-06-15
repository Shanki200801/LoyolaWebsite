import React from 'react';
import ImageComponent from '@/components/about-pages/ImageComponent';
import ParagraphComponent from '@/components/about-pages/ParagraphComponent';
import VismisComponent from '@/components/about-pages/VismisComponent';


const App = () => {
  return (
    <div className="bg-slate-300">
      <div>
      
          <ParagraphComponent />
          <VismisComponent/>
       
      </div>
    </div>
  );
};

export default App;
