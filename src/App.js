import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';

function App() {
  //Functional based components.
  //Class based components.
  //props:properties
  //let greet=<b>Good Morning"</b>
  return (
    <>
     <Navbar title="My Website"/>
     <TextForm heading="Enter the text to modify"/>
     <About/>
    </>
  );
}

export default App;
