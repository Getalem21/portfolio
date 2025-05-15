import React from 'react';
import { BrowserRouter as Router, Route , Routes, useLocation } from 'react-router-dom';
//import Header from './components/Header';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import { BrowserRouter } from 'react-router-dom';

//import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
//import Projects from './components/Projects';
//import Skills from './components/Skills';
//import Experience from './components/Experience';
//import Education from './components/Education';
import Contact from './components/Contact';
//import Footer from './components/Footer';
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery.jsx';

function App() {
  const location = useLocation();
  return (

<>
{location.pathname !== '/' && <Navbar />} 
  <Routes>
  <Route 
      path="/" element={<Home/>}>
      </Route>
      <Route 
      path="/About" element={<About/>}>
      </Route>
      <Route 
      path="/Contact" element={<Contact/>}>
      </Route>
      <Route 
      path="/Gallery" element={<Gallery/>}>
      </Route>
      </Routes>
      <Footer/> 
</>
  );
}

const MainApp = () => {
  return (
    <BrowserRouter> {/* Ensure this is imported and wrapped around App */}
      <App />
    </BrowserRouter>
  );
};
export default MainApp;
/*<Routes>
  <Route 
      path="/Home" component={<Home/>} >
      </Route>  
       <Route
        path="/Contact" component={Contact} exact >
      <Contact/>
      </Route>  
       <Routes path="/About" component={About} exact >
      <About/>
      </Routes>

  </Routes>*/