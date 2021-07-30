import React from "react";
import "./App.css";
import Welcome from "./component/Welcome";

function App() {
  document.title = "Love Calculator.";
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
