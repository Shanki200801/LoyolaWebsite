import React from 'react';
import ImageComponent from '@/components/about-pages/ImageComponent';
import ParagraphComponent from '@/components/about-pages/ParagraphComponent';
import VismisComponent from '@/components/about-pages/VismisComponent';


const App = () => {
  return (
    <body className="bg-slate-300">
      <div>
        <ImageComponent />
        <div className="grid h-screen place-items-center">
          <ParagraphComponent />
          <VismisComponent/>
        </div>
      </div>
    </body>
  );
};

export default App;
