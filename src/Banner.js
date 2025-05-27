import React from 'react'
import './Style/Banner.css'
import parchment from './Graphics/parchment.png'
import parchmentSide from './Graphics/parchmentleft.png'
import parchmentCenter from './Graphics/parchmentcenter.png'
const Banner = () => {
  return (
    <div className='banSpacing'>
        <div></div>
            {/* <img src={parchment} alt="banner" className='banner' /> */}
            <div className="banner">
              <img src={parchmentSide} alt="banner left" className='bannerLeft' />
              <img src={parchmentCenter} alt="banner center" className='bannerCenter' />
              <img src={parchmentSide} alt="banner right" className='bannerRight' />
              <h1 className="welcome">Welcome!</h1>
            </div>
        <div></div>


    </div>
  )
}

export default Banner