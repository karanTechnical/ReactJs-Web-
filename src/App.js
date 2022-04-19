import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Error from './Error';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  return (

    
    <>
   
    <Router>
    <Navbar/>

    <Routes>
    <Route path = "/" element= {<Home/>}/>
    <Route path = "/contact" element= {<Contact/>}/>
    <Route path = "/about" element= {<About/>}/>
    <Route path = "/service" element= {<Service/>}/>
    <Route path='/*' element={<Error/>} />
    
    </Routes>
    
     
      </Router>
      <Footer/>
     </>
    
   

  )
}

export default App;
