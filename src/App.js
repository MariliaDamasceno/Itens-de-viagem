
import React from 'react';
import './App.css';
import Wellcome from './componentes/Wellcome/Wellcome';
import BeachInfo from './componentes/BeachInfo/BeachInfo';
import BeachPackingList from './componentes/BeachPackingList/BeachPackingList';


function App() {
  return (
    <div className="App">
      <Wellcome nome="Marília" />
      
      <BeachInfo>
        Não se esqueça de levar protetor solar, toalha, óculos de sol e muita disposição para aproveitar o sol e o mar!
      </BeachInfo>

      <BeachPackingList />

    </div>
  );
}

export default App;

