import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [value,setvalue] = useState(true);
  
 

  return (
    <div>
      {
        value ? <h1>Hide And Show Me</h1> : null
      }
      
    {/* <h1>Hide And Show</h1> */}
    <button onClick = {()=>setvalue(false)}>Hide</button><br/><br/>
    <button onClick = {()=>setvalue(true)}>Show</button><br/><br/>
    <button onClick = {()=>setvalue(!value)}>Toggle</button>
    </div>
  );
}
