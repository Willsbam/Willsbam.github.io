import React from 'react'
import '../Style/InfoPage.css'
import '../Style/aboutme.css'
import { useState, useEffect } from "react";
const InfoPage = () => {
  

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
      <div className="inside">
        <div className="innerBorder" style={{borderWidth:`${(offset/2)}px`,height:`${borderHeight-2*offset}px`,width:`${borderWidth-2*offset}px`}}>
          
          
        </div>
      </div>
    </div>
  )
}

export default InfoPage