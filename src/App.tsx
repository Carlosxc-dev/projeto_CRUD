import React from "react";
import "./App.css";

import GlobalStyle from "./style";
import Sigin from "./pages/sigin/sigin";
import Dashboard from "./pages/dashbord/dashboard";

function App() {
  return (
    <div className="App">
      {/* //estilo global da pagina */}
      <GlobalStyle />
      {/* <Sigin/> */}
      <Dashboard />
    </div>
  );
}

export default App;
