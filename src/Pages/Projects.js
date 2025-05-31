import React from 'react'
import '../Style/InfoPage.css'
import '../Style/projects.css'
import { useState, useEffect } from "react";
import close from "../Graphics/x.png"
import websiteCard from "../Graphics/websitecard.png"
import tempMC from "../Graphics/tempmc.png"

import Card from '../Card';

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
      <div className="inside"style={{borderWidth:`${(offset/2)}px`,textAlign:"center"}}>
      <h1>Projects</h1>
      <p>Hover over or tap cards to learn more about each</p>
       <div className='cards'>


          <Card background={websiteCard}>
            <h1 style={{textAlign:'center'}}>This Website!</h1>
              <p>Used:</p>
              <ul>
                <li>React</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
              </ul>
          </Card>

          <Card background={tempMC}>
        <h1 style={{textAlign:'center'}}>Overstuffed</h1>
                <p>Used:</p>
                <ul>
                  <li>Java</li>
                  <li>Gradle/Koitlin</li>
                  <li>JSON</li>
                </ul>
                <p>Learned:</p>
                <ul>
                  <li>Networking</li>
                  <li>User Interface Design</li>
                  <li>Utilizing API's</li>
                  <li></li>
                </ul>

          </Card>
       </div>
      </div>
    </div>
  )
}

export default InfoPage