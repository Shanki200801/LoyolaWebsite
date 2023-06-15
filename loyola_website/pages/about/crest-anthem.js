import React from 'react';
import CrestparaComponent from '@/components/crest-anthem/CrestparaComponent';
import AnthemComponent from '@/components/crest-anthem/AnthemComponent';


const App = () => {
  return (
    <div className="bg-slate-300">
      <div className="grid h-screen place-items-center">
      <CrestparaComponent />
    </div>
    <div>
    <AnthemComponent />
    </div>
    </div>
  );
};

export default App;
