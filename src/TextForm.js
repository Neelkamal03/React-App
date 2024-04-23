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
        props.showAlert("Coverted to upper case", 'success');
    }
    const handleUpClick2=()=>{
        console.log("lowercase was clicked"+text);
        //setText("You clicked on handle");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lower case",'warning');
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
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange}></textarea>
</div>

  <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick1}>To Uppercase</button>
  <button className="btn btn-primary mx-4" onClick={handleUpClick2}>To lowercase</button>
  <button className="btn btn-secondary mx-4" onClick={handleDelete}>Delete Content</button>
    </div>
   
   <div className="container my-4">
     <h1>Your Text Summary</h1>
     <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} characters</p>
     <p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
   </div>
   <h2>Preview</h2>
   <p>{text}</p>

    </>
  )
}

