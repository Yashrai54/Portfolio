import React, { use, useState } from 'react'
import blog from '../assets/blog.png'
const Projects = () => {
  const AllProjects=[
    {'name':'Spring Boot Blog' ,'langs':['Java','HTML','CSS','JavaScript']},
    {'name':'bot guide site','langs':['HTML','CSS','JavaScript']},
    {'name':'gacha-bot','langs':['JavaScript']},
    {'name':'Round-robin coupons','langs':['JavaScript']},
    {'name':'BlogMonger','langs':['ejs','JavaScript']},
    {'name':'world-atlas','langs':['JavaScript','CSS','HTML']},
    {'name':'Hotel-website','langs':['JavaScript','CSS','HTML']},
    {'name':'EduEra','langs':['JavaScript','CSS','HTML']},
    {'name':'Placement-Cell','langs':['HTML','PHP']},
    {'name':'URL-Shortener','langs':['ejs','JavaScript']},
    {'name':'Weather-Report','langs':['JavaScript','CSS','HTML']},
    {'name':'Spotify-Clone','langs':['JavaScript','CSS','HTML']}
  ]
  const projectsDescription = [
  {
    name: "Spring Boot Blog",
    langs: ["Java", "HTML", "CSS", "JavaScript"],
    description: "A full-stack blogging platform built with Spring Boot and MySQL where users can write, edit, and manage blogs.",
    features: [
      "User authentication & role-based access",
      "CRUD operations for blog posts",
      "Responsive UI for better readability",
      "Persistent storage with MySQL"
    ]
  },
  {
    name: "bot guide site",
    langs: ["HTML", "CSS", "JavaScript"],
    description: "A website to guide users on setting up and using bots effectively.",
    features: [
      "Step-by-step tutorials",
      "Clean responsive design",
      "Interactive UI for navigation"
    ]
  },
  {
    name: "gacha-bot",
    langs: ["JavaScript"],
    description: "A Discord bot that simulates gacha pulls with rarity-based outcomes.",
    features: [
      "Randomized gacha mechanics",
      "Customizable commands",
      "Fun interactive bot responses"
    ]
  },
  {
    name: "Round-robin coupons",
    langs: ["JavaScript"],
    description: "A coupon distribution system using round-robin scheduling.",
    features: [
      "Fair coupon assignment",
      "Dynamic queue management",
      "Lightweight and efficient logic"
    ]
  },
  {
    name: "BlogMonger",
    langs: ["ejs", "JavaScript"],
    description: "A blogging web app using Node.js and EJS templates for rendering.",
    features: [
      "Add, edit, delete blog posts",
      "Dynamic content rendering",
      "Simple user interface"
    ]
  },
  {
    name: "world-atlas",
    langs: ["JavaScript", "CSS", "HTML"],
    description: "Interactive atlas showing details about countries with API data.",
    features: [
      "Country details with population, region, and flags",
      "Search and filter functionality",
      "Responsive design"
    ]
  },
  {
    name: "Hotel-website",
    langs: ["JavaScript", "CSS", "HTML"],
    description: "A static hotel booking website demo with modern UI.",
    features: [
      "Homepage with featured rooms",
      "Booking form",
      "Responsive layout for mobile and desktop"
    ]
  },
  {
    name: "EduEra",
    langs: ["JavaScript", "CSS", "HTML"],
    description: "An educational platform prototype with courses and resources.",
    features: [
      "Course listing and categorization",
      "Clean educational layout",
      "Responsive design"
    ]
  },
  {
    name: "Placement-Cell",
    langs: ["HTML", "PHP"],
    description: "A placement cell management system for students and admins.",
    features: [
      "Student registration and login",
      "Admin panel to manage companies",
      "Placement result updates"
    ]
  },
  {
    name: "URL-Shortener",
    langs: ["ejs", "JavaScript"],
    description: "A web app to shorten long URLs using Node.js backend.",
    features: [
      "Generate short unique links",
      "Track redirects",
      "Minimalist interface"
    ]
  },
  {
    name: "Weather-Report",
    langs: ["JavaScript", "CSS", "HTML"],
    description: "A weather app fetching real-time data from APIs.",
    features: [
      "Search weather by city",
      "Current temperature and conditions",
      "Simple clean UI"
    ]
  },
  {
    name: "Spotify-Clone",
    langs: ["JavaScript", "CSS", "HTML"],
    description: "A Spotify-inspired music player web clone.",
    features: [
      "Play/pause/skip controls",
      "Playlist UI",
      "Responsive design"
    ]
  }
];
  const [selected,setSelected]=useState([])
  const [filtered,setFiltered]=useState([])
  const [selectedProject,setSelectedProject]=useState('');
  const filtereddesc=projectsDescription.filter(p=>p.name==selectedProject)
  function handleCheckBox(event){
      const{name,checked}=event.target;
      setFiltered(AllProjects)
      let updated;
      if(checked){
        updated=[...selected,name]
      }
      else{
        updated=selected.filter(lang=>lang!=name)
      }
      setSelected(updated)

      const result=AllProjects.filter(p=>updated.length==0 || p.langs.some(lang=>updated.includes(lang)))
      setFiltered(result)
  }
  function handleClick(name){
    setSelectedProject(name)
  }
  return (
    <div className='about-container'>
       <div className='about'>
        <ul className='about-list'>
          <li><input type="checkbox" name="JavaScript" id="" className='checkbox' onChange={handleCheckBox}/>JavaScript</li>
           <li><input type="checkbox" name="PHP" id="" className='checkbox' onChange={handleCheckBox}/>PHP</li>
           <li><input type="checkbox" name="CSS" id="" className='checkbox' onChange={handleCheckBox}/>CSS</li>
           <li><input type="checkbox" name="ejs" id="" className='checkbox' onChange={handleCheckBox}/>EJS</li>
           <li><input type="checkbox" name="Java" id="" className='checkbox' onChange={handleCheckBox}/>Java</li>
        </ul>
           
       </div>
       <div className='project'>
         <ul className='project-list'>
        {filtered.map(p => (
          <li key={p.name} onClick={()=>handleClick(p.name)}><img src={blog} alt="" height={120} width={200}/>//_{p.name}</li>
        ))}
      </ul>
       </div>
       <div className='project-details'>
           <p>
               <ul className='project-list'>
                    {filtereddesc.map(p=>
                    <li key={p.name} className='project-list-items'><p className='paragraph'>_name:</p>{p.name}
                    <li className='project-list-items'><p className='paragraph'>_description:</p>{p.description}</li>
                    <li className='project-list-items'><p className='paragraph'>_features:</p>{p.features.map(e=>(<li>{e}</li>))}</li></li>)}
               </ul>
           </p>
       </div>
    </div>
  )
}

export default Projects