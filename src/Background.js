import React from 'react'
import Wave from 'react-wavify'
import './Style/ocean.css'
import beach from './Graphics/beach.png'
import { useState, useEffect } from "react";

import SaC from './SignandChest.js'




const Background = ({setVis, curVis}) => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [beachHeight,setBeachHeight] = useState(0);
  const [beachWidth,setBeachWidth] = useState(100);


  function alterBeachHeight(){
  //this default height is guessed when the beach is at a wide size
  let defaultWidth = 1250;
  //the width that looks good is about 1250 pixels which gives it a height of about 120 pixels

  //first lets make it so for every pixel lost is gains a pixel in height
  setBeachHeight(Math.max((1250-(window.innerWidth)),0)/6);
  setBeachWidth(Math.max(((defaultWidth-window.innerWidth)/10+100),100));
}
  useEffect(() => {
    // Call the function initially to set the values
    alterBeachHeight();

    // Add event listener for window resize
    window.addEventListener('resize', alterBeachHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', alterBeachHeight);
    };
  }, []);


  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   useEffect(() => {
    alterBeachHeight();
  }, [windowWidth]);

  return (


    <div className="ocean">
      {window.innerWidth<768 ?<Wave fill='#2095dd'
        paused={false}
        style={{ display: 'flex', position: 'absolute',
           bottom:0, width: '100%', height: '95%',zIndex:50, opacity:1,pointerEvents:"none",
          }}
          //  Couldn't get the style to work by wra pper
          //So I'm forced to add it this way
        options={{
          height: 20,
          amplitude: 10,
          speed: 0.15,
          points: 3
        }}
  /> :<Wave fill='#2095dd'
        paused={false}
        style={{ display: 'flex', position: 'absolute',
           bottom:0, width: '100%', height: '95%',zIndex:50, opacity:1,pointerEvents:"none",
          }}
          //  Couldn't get the style to work by wra pper
          //So I'm forced to add it this way
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  /> }
      
  <Wave fill='#2095dd'
        paused={false}
        style={{ display: 'flex', position: 'absolute',
           bottom:0, width: '100%', height: '95%',zIndex:70, opacity:0.1,pointerEvents:"none", }}
          //  Couldn't get the style to work by wra pper
          //So I'm forced to add it this way
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
    <div className='beach'>
      <div className="chestsAlign">
          <SaC title={"About Me"} fSize={1.1} rotation={6} setVis={setVis} visIndex={0} curVis={curVis} />
          <SaC title={"Projects"} fSize={1.2} setVis={setVis} visIndex={1} curVis={curVis} />
          <SaC title={"Experience"}fSize={0.9} topPercent={-15} setVis={setVis} visIndex={2} curVis={curVis} />
          <SaC title={"Links"} rotation={-6} setVis={setVis} visIndex={3} curVis={curVis} />
        </div>
      <img src={beach} alt="beach" className="beachImage" style={{ width: `${beachWidth}%`}} />
      <div className="beachRaise" style={{height:beachHeight}}>
      </div>
    </div>
    </div>




    
  )
}

export default Background