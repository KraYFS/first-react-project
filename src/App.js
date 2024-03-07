import React from "react";
import Header from "./Components/Header/Header";
import MainPage from "./Components/Main-page/Main-page"
import OurTeam from "./Components/OurTeam/OurTeam";
import OurCapabilities from "./Components/OurCapabilities/OurCapabilities";
// import game from './images/game.png'

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      {/* <div style={{width: '100%'}}>
        <img src={game} alt="sdfg" />
      </div> */}
      <OurTeam />
      <OurCapabilities />
    </div>
  );
}

export default App;
