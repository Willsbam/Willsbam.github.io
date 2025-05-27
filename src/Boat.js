import React from 'react'
import './Style/Boat.css'
import boat from './Graphics/boat.gif'
const Boat = () => {
  return (
    <div className='boatSpacing'>
    <img className='boat' src={boat}></img>
    </div>
  )
}

export default Boat