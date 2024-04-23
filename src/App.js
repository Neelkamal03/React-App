import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import { useState } from 'react';
import Alert from './Alert';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  //Functional based components.
  //Class based components.
  //props:properties
  //let greet=<b>Good Morning"</b>
  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

  const [mode, setMode]=useState('tertiary');
  const togglebutton=()=>{
    if(mode==='tertiary')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode turned on", "success")
    }
    else{
      setMode('tertiary');
      document.body.style.backgroundColor='white';
      showAlert("Light mode turned on", "danger")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={
          <>
        <Navbar title="My Website" mode={mode} toggle={togglebutton}/>
        <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to modify"/>
        <Alert alert={alert} />
        </>
        }/>
      <Route exact path='/About' element={
      <>
      <Navbar title="My Website" mode={mode} toggle={togglebutton}/>
      <About mode={mode}/>
      </>
      }/>
    </Routes>
    </BrowserRouter>


     
     {/* <Alert alert={alert} />
     <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to modify"/>
     <About/> */}
    </>
  );
}

export default App;
