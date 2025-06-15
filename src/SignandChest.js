import React from 'react'
import './Style/SaC.css'

import closedChest from './Graphics/closedchest.png'
import openChest from './Graphics/openchest.png'

import sign from './Graphics/sign.png'
import { useState, useEffect } from "react";


const SignandChest = ({title, fSize=1.3, topPercent=-20, rotation=0, setVis,visIndex,curVis}) => {
const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
     <div className='SandC' style={{rotate:`${rotation}deg`}} onClick={() =>setVis(visIndex)}>
                <img className="sign" src={sign}/>
                {(visIndex===curVis) ? <img className="chest" src={openChest}/> :<img className="chest" src={closedChest}/>}
                {(windowWidth > 768) 
                ? <p className="signTxt" style={{fontSize:`${fSize}vw`,top:`${topPercent}%`}}>{title}</p> : 
                <p className="signTxt" style={{}}>{title}</p>}
                
      </div>
  )
}

export default SignandChest