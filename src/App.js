import React, { useState } from "react";
import { useEffect } from "react";
import Advice from "./components/Advice";

function App() {

  const [generateAdvice, setGenerateAdvice] = useState({})
  const [newAdvice, setNewAdvice] = useState(generateAdvice)

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setGenerateAdvice(data))
  },[newAdvice])

  console.log(generateAdvice)

  return (
    <div className="App">
      <Advice generateAdvice={generateAdvice} setGenerateAdvice={setGenerateAdvice} setNewAdvice={setNewAdvice}/>
    </div>
  );
}

export default App;
