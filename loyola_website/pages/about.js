import React from 'react';
import ImageComponent from './ImageComponent';
import ParagraphComponent from './ParagraphComponent';
import VismisComponent from './VismisComponent';


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
