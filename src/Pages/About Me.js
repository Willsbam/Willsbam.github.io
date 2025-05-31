import React from 'react'
import '../Style/InfoPage.css'
import '../Style/aboutme.css'
import { useState, useEffect } from "react";
import close from "../Graphics/x.png"
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
        <div></div>
          <div className="flexbox"> 
            <img 
              className="profilePic"
              src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=2048x2048&w=is&k=20&c=wydysVEp52o1ULrj9XWI_f8M2lZ06qm8xlBl6GmjTSQ="
              alt="William Bramley"
            />
            <div className="bio">
              <h1>William Bramley</h1>
              <p>
                Hiya! I'm currently a undergraduate at the University of Florida working
                towards a Bachelors Degree in Computer Science alongside a minor in Geology
              </p>
            </div>
          </div>

          <div className="info">
            <p>This is my personal website, a fun project I gave myself that was inspired by &nbsp; 
             <a href="https://www.youtube.com/watch?v=_tWh4cYCTv0">Shar!</a> &nbsp;</p>
             <p>I'm an  programmer that tries to make every day memorable, and in that spirit
              some notable and fun things I've done are:
              </p>
              <ul>
                <li>Licensed Scuba Diver</li>
                <li>Eagle Scout</li>
                <li>GIAC Information Assurance Certified</li>
              </ul>
              <p>
              Some of my hobbies and interests besides programming include:
              </p>
              <ul>
                <li>Cooking</li>
                <li>Camping <i>&#40;Bit tough in Florida...&#41;</i></li>
                <li>Weight Lifting</li>
                <li>Gaming <i>&#40;Try to do a different genre with each game&#41;</i></li>
              </ul>
              <p>
              Something I pride myself on is always being "locked in"! 
              It's simply fun to learn and do create things.
              
             </p>
             
             
             
             
             <p >
              This website was created using React, HTML,CSS, and JavaScript. and is posted publicly on my github
              The pixellated art style is one I'm incredibly fond of, and all of the art on this website was created
             by yours truly by hand.
             </p>
             


          </div>
        
      </div>
    </div>
  )
}

export default InfoPage