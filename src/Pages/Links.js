import React from 'react'
import '../Style/InfoPage.css'
import '../Style/links.css'
import { useState, useEffect } from "react";
import close from "../Graphics/x.png";
import githubIcon from  "../Graphics/github.png";
import gmailIcon from "../Graphics/email.png";
import linkedInIcon from "../Graphics/linkedin.png"
const InfoPage = ({setVis}) => {
  

    const [borderWidth,setBorderWidth] = useState(0);
     const [borderHeight,setBorderHeight] = useState(0);
 
    const offset=16;
   function pixelSpacing(){
   const insideDiv=document.querySelector('.inside').getBoundingClientRect();
   const verticalOutline=document.querySelector('.verticalOutline');
   const horizontalOutline=document.querySelector('.horizontalOutline');
   
   setBorderHeight(insideDiv.height+offset);
   setBorderWidth(insideDiv.width+offset);
  
 }

   useEffect(() => {
     // Call the function initially to set the values
     pixelSpacing();
 
     // Add event listener for window resize
     window.addEventListener('resize', pixelSpacing);
 
     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener('resize', pixelSpacing);
     };
   }, []);

  return (
    <div className="main">
      <div className="verticalOutline" style={{height:`${borderHeight}px`,top:`${-(offset/2)}px`}}></div>
      <div className="horizontalOutline" style={{width:`${borderWidth}px`,left:`${-(offset/2)}px`}}></div>
      <img src={close} alt="Close" className="closeButton" onClick={() => setVis(-1)}/>
      <div className="inside"style={{borderWidth:`${(offset/2)}px`,textAlign:'center'}}>
            <h1>Links</h1>

        <div className="icons">
          <a href='https://github.com/Willsbam'>
          <img className="icon" src={githubIcon} alt="Github Icon"  ></img>
          </a>
          <a href="mailto:wlbramley@gmail.com">
            <img className="icon" src={gmailIcon} alt="Gmail Icon" ></img>
          </a>
         <a href="https://www.linkedin.com/in/william-bramley-7b9ab3333/">
            <img className="icon" src={linkedInIcon} alt="LinkedIn Icon" ></img>
         </a>
          

        </div>
      </div>
    </div>
  )
}

export default InfoPage