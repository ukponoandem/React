import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Navbar from './component/Navbar';
import './App.css';
import Footer from "./component/Footer";
 function App(){
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/Project" element={<Project />}/>
        <Route path="/Experience" element={<Experience />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
 }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App />
)



