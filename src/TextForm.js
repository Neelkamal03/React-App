import React, {useState} from 'react'


export default function TextForm(props) {
    //react states
    //setText("New text");//setText is basically like a function to update text.
    //console.log(text);
    const handleUpClick=()=>{
        console.log("uppercase was click"+text);
        setText("You clicked on handle");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log("On change");
    }
    const [text, setText]=useState("Enter text here"); 
  return (
    <div>
        <h1>{props.heading}</h1> 
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
</div>

  <button className="btn btn-primary" onClick={handleUpClick}>Convert</button>
    </div>
  )
}

