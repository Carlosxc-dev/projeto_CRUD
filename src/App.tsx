import React from 'react';
import './App.css';

import GlobalStyle from './style';
import Sigin from './pages/sigin/sigin';

function App() {
  return (
    <div className="App">
        {/* //estilo global da pagina */}
        <GlobalStyle/>
        <Sigin/>
      </div>
  );
}

export default App;
