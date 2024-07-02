import React, { useEffect } from 'react';
import "../styles/Home.css";  

// import TextAnimation from './TextAnimation';




 function  Home (){
      
 return( 
  <div className="home" >
 <div className="about">
 <h1>Hi,my name is Ukpono</h1>
 <div className="promt">
    <p>I'm a software developer who love coding</p>
  <p>A software developer with a passion for learning and creating..</p>
 </div>
 </div>
 <div className="skills">
   <h2>Skills </h2>
   
   </div>
    <ol className="list">
    <li className="item">
        <h3>Front-End</h3>
        <span>
            Html,Css,Bootsrap,Reactjs,Jquery,Nextjs
        </span>
    </li>
    
    
    <li className="item">
        <h3>Language</h3>
        <span>
     Javascript,Python,Nodejs,C++
        </span>
    </li>

 </ol>
  </div>
  
 ) 

 
 }

 export default Home