import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [sol, setSol] = useState("");
  const handleclick =() =>{
    let line = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    setSol(line);
  }
  return (
    <div id="main">
      <button id = "click" onClick = {handleclick}></button>
      {sol ? <p id="para">{sol}</p> : ""}
    </div>
  );
}


export default App;

