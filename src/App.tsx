import React from "react";
import "./App.css";

import GlobalStyle from "./style";
import {SignIn} from "./pages/sigin/sigin";
import Dashboard from "./pages/dashbord/dashboard";

function App() {
  return (
    <div className="App">
      {/* //estilo global da pagina */}
      <GlobalStyle />
      {/* <Dashboard /> */}
      <SignIn/>
    </div>
  );
}

export default App;
