import React, { act, use } from 'react'
import Dropdown from '../assets/dropdown.png'
import { useState } from 'react'
import  Folder from '../assets/folder.png'
import SpringBoot from '../assets/SpringBoot.png'
import bot from '../assets/bot.png'
import php from '../assets/php.png'

const About = () => {
  const [open, setOpen] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const [active,setActive]=useState('')

  function handleDropdown(){
    setOpen(!open)
    console.log(open)
  }
  function handleContactDropdown(){
    setOpenContact(!openContact)
    console.log(openContact)
  }
  function handleClick(input){
     setActive(input)
  }
  return (
    <div className='about-container'>
    <div className='about'>
      <div className='personal-info'>
          <p className='about-heading' onClick={()=>handleDropdown()}><img src={Dropdown} alt="" height={20} width={20} className='img-dropdown'/>personal-info</p>
         {open &&(
         <ul className='about-list'>
           <li onClick={()=>handleClick('bio')}><img src={Folder} alt="" height={20} width={20} className='img-list-dropdown' />bio</li>
           <li onClick={()=>handleClick('interests')}><img src={Folder} alt="" height={20} width={20} className='img-list-dropdown' />interests</li>
           <li onClick={()=>handleClick('education')}><img src={Folder} alt="" height={20} width={20} className='img-list-dropdown' />education</li>
         </ul>)}
      </div>
      <div className='contact-info'>
          <p className='about-heading' onClick={()=>handleContactDropdown()}> <img src={Dropdown} alt="" className='img-dropdown' height={20} width={20}/>contact-info</p>
         {openContact &&(
         <ul className='about-list'>
           <li>raiyash582@gmail.com</li>
            <li>+917015032481</li>
          </ul>)}
      </div>
    </div>
     <div className='about-description'>
       {active =='bio' &&
         <div>
            <p className='paragraph'>/** I am Yash Rai </p>
              <p className='paragraph'>*a Full-Stack Developer</p>
              <p className='paragraph'>*who loves building smooth user experiences</p>
              <p className='paragraph'>*and solving tough problems with clean code.</p>
              <p className='paragraph'>*Skilled in React, Node.js, and modern web tech.</p> 
              <p className='paragraph'>*Always learning, always shipping.</p>
              <p className='paragraph'>*I am currently an Intern at HighRadius Technologies where i debug implementation issues to deal with real world clients</p>
              <p className='paragraph'>*HighRadius helps the client to automate the O2C cycle by using their software</p>  
              <p className='paragraph'>*My job there involves providing hypercare to the clients after implementation by using technical skills like SQL and problem solving*/</p>
          </div>
       }
       {
        active=='interests' &&
        <div className='paragraph'>
           <p className='paragraph'>/**Outside of coding,</p><p className='paragraph'>*I got a few things that keep me going.</p><p>*I’m big into anime and manga</p><p> *— stories that hit hard and twist your brain,</p><p>*stuff like Attack on Titan or Baccano! really stick with me.</p> <p>*Football is another passion, keeps me sharp and disciplined.</p><p>*I love solving tough problems in DSA, kinda like puzzles but with real impact.</p><p> *When I need to chill, you’ll catch me gaming or diving into novels that make me think twice about everything.*/</p>
          </div>
       }
       {
        active=='education' && 
        <div className='paragraph'>
          <p>/**I’m currently pursuing my Bachelor of Engineering in Computer Science and Engineering at Chandigarh University.</p><p>* Being in my 3rd year, I’ve focused on building a strong foundation in Data Structures & Algorithms while also working on full-stack web development projects.</p><p>*Beyond coursework, I’ve been sharpening my skills through personal projects, internships, and problem-solving challenges to stay industry-ready.</p>
          <p className='paragraph'>*During my coursework, i have also done a training for Blockchain and JavaScript through Metacrafters and have recieved certificates for both which showcases my skills in this modern tech*/</p>
          </div>
       }

     </div>
     <div className='code-snippets'>
        <p className='paragraph'>//Code snippet showcase:</p>
        {active=='bio' &&
        <div>
           <img src={SpringBoot} alt="" height={200} width={300} className='snippet' />
        </div>}
        {active=='bio' && 
        <p className='paragraph'>
          <p>This code snippet is from the project which i was making during my college for spring boot .</p><p>I initially used to make my backend projects in node</p> <p>but when i first used spring boot for my project i realised how 
          immensely better it was compared to other libraries .</p> <p> Spring boot gave that edge by using annotations</p> <p>for removing repetitive work like connecting the DB</p><p> ,configuring the same things for the 100th time</p>
        </p>}
        {active=='interests' &&
        <div>
           <img src={bot} alt="" height={200} width={500} className='snippet' />
        </div>}
        {active=='interests' && 
        <p className='paragraph'>
          <p>This code snippet is from the project which i was made for fun.</p><p>It was basically a gamebot for pulling cards Just like pokemons but not on that grand level 
          i made it in Node js </p> <p>The project was even used by a group having around 300 members </p> <p>I even stored the data of users in DB and had them get points and better cards through those points </p><p>The json was not available anywhere to pull the data from so i learned bit of web scraping to pull the data from sites</p>
        </p>}
          {active=='education' &&
        <div>
           <img src={php} alt="" height={200} width={400} className='snippet' />
        </div>}
        {active=='education' && 
        <p className='paragraph'>
          <p>This code snippet is from the project i made for college project </p><p>It was a full stack project which is basically used as a bridge between college placement cell and companies
          </p> <p>The project was given a solid A+ by the evaluators</p> <p>It had functionalities of multiple user view for admins,companies and students</p><p></p>
        </p>}
     </div>
    </div>
  )
}

export default About