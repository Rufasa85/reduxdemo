import React, {useState,useContext} from "react"
import First from "./components/First";
import CounterProvider, { CounterContext } from "./utils/CounterContext";
function App() {
  

  return (
    <div>
      <CounterProvider>
      <h1>Hello</h1>
      <First />
      </CounterProvider>
    </div>
  );
}

export default App;
