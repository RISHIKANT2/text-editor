import React, { useState } from "react";


function Form(props){
    const [text,setText]=useState(" ");

    function ToUpperCase(){
        const text1= text.toUpperCase();
        setText(text1);
    }
    function ToLowerCase(){
        const text1= text.toLowerCase();
        setText(text1);
    }
    function ClearingText(){
        setText(" ");
    }
    function HandleCopy(){
        navigator.clipboard.writeText(text);
    }
    
    function HandleChange(event){
        setText(event.target.value);
    }

    return (
        <div className=" container my-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="10" onChange={HandleChange}></textarea>
  <button className="my-2 mx-2 btn btn-info"  onClick={ToUpperCase}>Change ToUpperCase</button>
  <button className="my-2 mx-2 btn btn-info"  onClick={ToLowerCase}>Change ToLowerCase</button>
  <button className="my-2 mx-2 btn btn-info" onClick={ClearingText}  >Clear Text</button>
  <button className="my-2 mx-2 btn btn-info" onClick={HandleCopy}  >Copy Text</button>
  <p>{text.split(" ").length-1} Number Of Words and {text.length} Number of characters </p>
  <h2>Preview</h2>
   <p>{text}</p>
</div>
    )
};

export default Form;