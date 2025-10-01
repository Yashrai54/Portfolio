import React from 'react'
import { useState } from 'react';
import Carbon from '../assets/carbon.png'

const Home = () => {
    const sign='>';
    function handleClick(){
        document.querySelector('.startgame').style.display='none';
        document.querySelector('.game').style.backgroundColor='#50fa7b';
        document.querySelector('.label').style.display='inline';
    } 
  return (
    <div className='home'>
        <div>
            <p className='paragraph'>Hi all.I am <h1>Yash Rai</h1>
            <h2>{sign}Full Stack Developer</h2>
            </p>
              <p className='paragraph'>//find my profile on Github:</p>
              <b className='a'>const <span className='span'>githublink=</span><a href='https://github.com/Yashrai54'>"https://github.com/Yashrai54";</a></b>
        </div>
        <div className='image-container'>
           <img src={Carbon} alt="" height={200} width={400} className='img1'/>
           <img src={Carbon} alt="" height={200} width={400} />
           <img src={Carbon} alt="" height={200} width={400} className='img1'/>
        </div>
    </div>
  )
}

export default Home