import React from 'react'
import '../Style/InfoPage.css'
import '../Style/experience.css';
import SkillBlock from '../SkillBlock';
import { useState, useEffect } from "react";
import close from "../Graphics/x.png"

import terminalMon from "../Graphics/terminalmonopoly.gif"
import ops from "../Graphics/ops.png"

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
      <div className="inside"style={{borderWidth:`${(offset/2)}px`}}>
      <h1 style={{textAlign:'center'}}>Experience</h1>
            <h3 style={{textAlign:'center'}}>Technical Skills</h3>
        <div className="skillsFlex">
          <div className="skillItem">
              <p><b><u>Front-End</u></b></p>
              <p className="skillBlock">React</p>
              <p className="skillBlock">Svelte</p>
              <p className="skillBlock">JavaScript</p>
              <p className="skillBlock">Typescript</p>
          </div>
          <div className="skillItem">
              <p><b><u>Back-End</u></b></p>
          </div>
          <div className="skillItem">
              <p><b><u>Programming</u></b></p>
              <p className="skillBlock">Java</p>
              <p className="skillBlock">C++</p>
              <p className="skillBlock">React</p>
              <p className="skillBlock">Python</p>
               <p className="skillBlock">Koitlin</p>
          </div>
          <div className="skillItem">
              <p><b><u>Misc</u></b></p>
              <p className="skillBlock">Github</p>
              <p className="skillBlock">Blockbench</p>
              <p className="skillBlock">Texture Art</p>
          </div>

        </div>
            <h3 style={{textAlign:'center'}}>Extra Curriculars</h3>
            <div className='clubSpacing'>

              <h4  style={{margin:"0"}}><u>Open Source Club &#40;Fall 2024 - Spring 2025&#41;</u></h4>
              <div style={{display:"flex",flexWrap:"wrap",}}>
                 <p className='clubText'>Worked on Terminal Monopoly, 
                  an online version of monopoly created with ASCII art. Created a mini-game called Space Trucker, a 
                  parody of asteroid where you have to survive increasingly difficult random events 
                  <br></br>Written in Python
                  </p>
                 
                  
              <img className='clubImages'
              src={terminalMon} alt="Terminal Monopoly, Writing in ASCII art"></img>
              </div>


              <h4  style={{margin:"0",marginTop:"2%"}}><u>Open Project Space &#40;Fall 2024 - Spring 2025&#41;</u></h4>
              <div style={{display:"flex",flexWrap:"wrap",}}>
                 <p className='clubText'> A weekly club offered by IEEE to learn electrical engineering
                  concepts without taking the elcetrical engineering classes proper. Learned how to utilize
                  and program micro-controllers alongside various circuits
                  <br></br>&nbsp;&nbsp;&nbsp;&nbsp;Created weekly hardware  projects for the class, with a final
                  project of me and my partner recreating doodle jump!
                  </p>
                 
                  
              <img className='clubImages'
              src={ops} alt="Image saying the words OPS"></img>
              </div>
             
            </div>

        
        
      </div>
    </div>
  )
}

export default InfoPage