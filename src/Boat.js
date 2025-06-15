import React from 'react'
import './Style/Boat.css'
import boat from './Graphics/boat.gif'
import sun from './Graphics/sun.png'
import island1 from './Graphics/island1.png'
import cloud1 from './Graphics/cloud1.png'
import cloud2 from './Graphics/cloud2.png'

import { useState,useEffect } from 'react'

const Boat = () => {
  const [cloud1X,setCloud1X] = useState(0);
  const [cloud2X,setCloud2X] = useState(-500);


  function handleClouds()
  {
  
    setCloud1X(prevX => {
        const nextX=prevX + 1;
        if(nextX>window.innerWidth)
        {
          return -40;
        }
        return nextX;
    });
    setCloud2X(prevX => {
        const nextX=prevX + 1;
        if(nextX>window.innerWidth)
        {
          if(window.innerWidth<768)
          {
            return -150;
          }
          return -40;
        }
        return nextX;
    });
   


  }
  
  useEffect(() => {
    const id = setInterval(handleClouds,25);

    return () => {
      clearInterval(id);
    };
  }, []);


  return (
    <div className='boatSpacing'>
    <img className='boat' src={boat}></img>
    <img className="sun" src={sun}></img>
    <img className='island1' src={island1}></img>
    <img className='island2' src={island1}></img>

    <img className='cloud1' src={cloud1} style={{left:cloud1X+'px'}}></img>
    <img className='cloud2' src={cloud2} style={{left:cloud2X+'px'}}></img>


    </div>
  )
}

export default Boat