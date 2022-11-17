import Navbar  from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ProductDetails from './Components/ProductDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />  
            <Route path="/about" element={<About/>} />  
            <Route path="/contact" element={<Contact/>} />  
            <Route path="/Products/:id" element={<ProductDetails/>} /> 
          </Routes>
        </div>        
    </div>
    </Router>
  );
}

export default App;
