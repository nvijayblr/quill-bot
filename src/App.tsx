import React from "react";
import "@fontsource/open-sans";
import "./App.scss";
import Navigations from "./componenets/Navigations/Navigations";
import Movies from "./componenets/Movies/Movies";

const App = () => {
  return (
    <div className="App">
      <Navigations />
      <Movies />
    </div>
  );
};

export default App;
