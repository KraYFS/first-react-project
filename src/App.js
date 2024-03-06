import React from "react";
import Header from "./Components/Header/Header";
import MainPage from "./Components/Main-page/Main-page"
// import TitleBlock from "./Components/titleBlock/TitleBlock";
// import game from './images/game.png'

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      {/* <div style={{width: '100%'}}>
        <img src={game} alt="sdfg" />
      </div> */}
      <TitleBlock />
    </div>
  );
}

export default App;
