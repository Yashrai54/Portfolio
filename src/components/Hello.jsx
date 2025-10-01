import React from 'react'
import errorcodesnippet from '../assets/carbon (3).png'
import { ReactTyped } from 'react-typed'

const Hello = () => {
  return (
    <div className='hello'>
       <div className='error-text'>
            <ReactTyped strings={["404","just joking ! Hello There"]} typeSpeed={40} backSpeed={50} backDelay={1000} ></ReactTyped>
       </div>
       <div className='error-snippet image-container'>
           <img src={errorcodesnippet} alt="" height={200} width={400} className='img1' />
           <img src={errorcodesnippet} alt="" height={250} width={400} />
           <img src={errorcodesnippet} alt="" height={200} width={400} className='img1'/>
       </div>
    </div>
  )
}

export default Hello