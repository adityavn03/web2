import { useState } from "react";
import "./App.css";

export default function App(){
  console.log("hi");
  const[count,setCount1]=useState(0);
  
  function onclick(){
    setCount1(count+1);
  }
  return(
    <div>
      <button id="one" onClick={onclick}>counter{count}</button>
    </div>
  )
}