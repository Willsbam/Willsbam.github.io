import React from 'react'
import './Style/SaC.css'

import closedChest from './Graphics/closedchest.png'
import sign from './Graphics/sign.png'


const SignandChest = ({title, fSize=1.3, topPercent=-20, rotation=0, setVis,visIndex }) => {

  return (
     <div className='SandC' style={{rotate:`${rotation}deg`}} onClick={() =>setVis(visIndex)}>
                <img className="sign" src={sign}/>
                <img className="chest" src={closedChest}/>
                {(window.innerWidth > 768) 
                ? <p className="signTxt" style={{fontSize:`${fSize}vw`,top:`${topPercent}%`}}>{title}</p> : 
                <p className="signTxt" style={{}}>{title}</p>}
                
      </div>
  )
}

export default SignandChest