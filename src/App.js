import React, { useState } from "react";
import Navbar from "./navbar";
import Form from "./textArea";

function App(){
  const [color,setcolor]= useState();
  const [color1,setcolor1]= useState();

  function colorHandler(){
  const value= document.getElementById('colorBox').value;
  setcolor(value);

  document.body.style.backgroundColor=color;   
}
function colorHandler2(){
const value1= document.getElementById('colorBox1').value;
setcolor1(value1);

}

    

  return (
    <>
   
    <Navbar  color01= {color} color02={color1} fun1={colorHandler} fun2={colorHandler2} />
     <Form />
    </>
    
  )  
};

export default App;