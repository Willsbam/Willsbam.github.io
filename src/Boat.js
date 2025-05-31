import React from 'react'
import './Style/Boat.css'
import boat from './Graphics/boat.gif'
import sun from './Graphics/sun.png'
const Boat = () => {
  return (
    <div className='boatSpacing'>
    <img className='boat' src={boat}></img>
    <img className="sun" src={sun}></img>
    </div>
  )
}

export default Boat