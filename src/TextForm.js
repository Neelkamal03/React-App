import React, {useState} from 'react'


export default function TextForm(props) {
    //react states
    //setText("New text");//setText is basically like a function to update text.
    //console.log(text);
    const handleUpClick1=()=>{
        console.log("uppercase was click"+text);
        //setText("You clicked on handle");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleUpClick2=()=>{
        console.log("uppercase was click"+text);
        //setText("You clicked on handle");
        let newText=text.tolowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log("On change");
    }
    const handleDelete=()=>{
        setText(""); 
    }
    const [text, setText]=useState("Enter text here"); 
  return (
    <>
    <div>
        <h1>{props.heading}</h1> 
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
</div>

  <button className="btn btn-primary" onClick={handleUpClick1}>To Uppercase</button>
  <button className="btn btn-primary mx-4" onClick={handleUpClick2}>To lowercase</button>
  <button className="btn btn-secondary mx-4" onClick={handleDelete}>Delete Content</button>
    </div>
   
   <div className="container my-4">
     <h1>Your Text Summary</h1>
     <p>{text.split(" ").length} Words and {text.length} characters</p>
     <p>{0.008*text.split(" ").length} Minutes read</p>
   </div>
   <h2>Preview</h2>
   <p>{text}</p>

    </>
  )
}

