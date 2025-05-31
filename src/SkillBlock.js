import './Style/skillblock.css'


import React from 'react'

const SkillBlock = ({skill="null", percentage=50}) => {
  return (
    <div className='skillGrouping'>
        <p className="skillBlock">{skill}</p>
        <div className='percentageOutline'>
            <div className="percentageFill" style={{width:percentage+"%"}}></div>
        </div>
    </div>
    
  )
}

export default SkillBlock