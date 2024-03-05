import React from "react";
import Header from "./Components/Header/Header";
import MainPage from "./Components/Main-page/Main-page"
// import game from './images/game.png'
import PageProgress from "./Components/pageProgress/PageProgress";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      {/* <div style={{width: '100%'}}>
        <img src={game} alt="sdfg" />
      </div> */}
      <PageProgress />
    </div>
  );
}

export default App;
