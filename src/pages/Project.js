import React, { useEffect } from 'react';
import "../styles/Project.css";  
 import proj1 from "../asset/tin dog.jpg";
 import proj3 from "../asset/proj3.jpg";
 import proj4 from "../asset/proj4.jpg";
 import proj5 from "../asset/proj5.jpg";
 

 function  Project (){
 <h1>my personal project</h1>
 return(
   <div className="Header">
      <a href=" https://ukponoandem.github.io/Tin-Dog/">
         <img src={proj1} alt="project" className="images"/>
         <img src={proj3} alt="project" className='images3'/>
         <img src={proj4} alt="project" className='images4'/>
         <img src={proj3} alt="project" className='images3'/>
         <img src={proj5} alt="project" className='images5'/>
         
         
         </a>
         </div>
 )
 }






 export default Project