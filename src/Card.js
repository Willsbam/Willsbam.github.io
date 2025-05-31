import React from 'react'
import './Style/card.css'
import { useRef } from 'react';

const Card = ({background,children}) => {
  const textRef = useRef(null);
  
  // Function to reset scroll position when hover ends
  const handleMouseLeave = () => {
    if (textRef.current) {
      textRef.current.scrollTop = 0;
    }
  };
  return (

    
    <div className='card' style={{backgroundImage:`url(${background})`}}
    onMouseLeave={handleMouseLeave}>
            <div className='cardText'   ref={textRef}>
              {children}
            </div>
          </div>
  )
}

export default Card