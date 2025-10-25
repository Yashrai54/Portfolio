import React, { useState } from 'react';
import { ChevronDown, ChevronRight, User, Heart, GraduationCap, Mail, Phone } from 'lucide-react';
import atlas from '../assets/atlas.png'
import bot from '../assets/gachabot.png'
import eduera from '../assets/eduera.png'

// Import your images
// import Dropdown from '../assets/dropdown.png'
// import Folder from '../assets/folder.png'
// import SpringBoot from '../assets/SpringBoot.png'
// import bot from '../assets/bot.png'
// import php from '../assets/php.png'

export default function EnhancedAbout() {
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [active, setActive] = useState('');

  return (
    <div className='about-container' style={{
      display: 'flex',
      minHeight: '85vh'
    }}>
      <style>{`
        .sidebar-item {
          transition: all 0.3s ease;
        }
        .sidebar-item:hover {
          background: rgba(67, 217, 173, 0.05);
          color: #43D9AD !important;
        }
        .dropdown-list {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 300px;
          }
        }
      `}</style>

      {/* Sidebar - Keep your original structure */}
      <div className='about'>
        <div className='personal-info'>
          <p className='about-heading sidebar-item' onClick={() => setOpen(!open)}>
            {open ? <ChevronDown size={20} style={{ marginRight: '8px', position: 'relative', top: '4px' }} /> : <ChevronRight size={20} style={{ marginRight: '8px', position: 'relative', top: '4px' }} />}
            personal-info
          </p>
          {open && (
            <ul className='about-list dropdown-list'>
              <li onClick={() => setActive('bio')} style={{
                background: active === 'bio' ? 'rgba(67, 217, 173, 0.1)' : 'transparent',
                color: active === 'bio' ? '#43D9AD' : 'white',
                borderLeft: active === 'bio' ? '3px solid #43D9AD' : 'none',
                paddingLeft: active === 'bio' ? '17px' : '20px'
              }}>
                <User size={16} style={{ marginRight: '8px', position: 'relative', top: '3px' }} />
                bio
              </li>
              <li onClick={() => setActive('interests')} style={{
                background: active === 'interests' ? 'rgba(67, 217, 173, 0.1)' : 'transparent',
                color: active === 'interests' ? '#43D9AD' : 'white',
                borderLeft: active === 'interests' ? '3px solid #43D9AD' : 'none',
                paddingLeft: active === 'interests' ? '17px' : '20px'
              }}>
                <Heart size={16} style={{ marginRight: '8px', position: 'relative', top: '3px' }} />
                interests
              </li>
              <li onClick={() => setActive('education')} style={{
                background: active === 'education' ? 'rgba(67, 217, 173, 0.1)' : 'transparent',
                color: active === 'education' ? '#43D9AD' : 'white',
                borderLeft: active === 'education' ? '3px solid #43D9AD' : 'none',
                paddingLeft: active === 'education' ? '17px' : '20px'
              }}>
                <GraduationCap size={16} style={{ marginRight: '8px', position: 'relative', top: '3px' }} />
                education
              </li>
            </ul>
          )}
        </div>

        <div className='contact-info'>
          <p className='about-heading sidebar-item' onClick={() => setOpenContact(!openContact)}>
            {openContact ? <ChevronDown size={20} style={{ marginRight: '8px', position: 'relative', top: '4px' }} /> : <ChevronRight size={20} style={{ marginRight: '8px', position: 'relative', top: '4px' }} />}
            contact-info
          </p>
          {openContact && (
            <ul className='about-list dropdown-list'>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#43D9AD" />
                raiyash582@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#43D9AD" />
                +917015032481
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Main Content - Keep your original content */}
      <div className='about-description'>
        {active === 'bio' && (
  <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
    <p className='paragraph'>/** I am Yash Rai</p>
    <p className='paragraph'>* a Full-Stack Developer</p>
    <p className='paragraph'>* who loves crafting smooth user experiences</p>
    <p className='paragraph'>* and solving complex problems with clean, efficient code.</p>
    <p className='paragraph'>* Skilled in React, Node.js, and modern web technologies.</p>
    <p className='paragraph'>* Always learning, always building.</p>
    <p className='paragraph'>* Currently interning at HighRadius Technologies,</p>
    <p className='paragraph'>* where I debug and resolve real-world client implementation issues.</p>
    <p className='paragraph'>* HighRadius automates the O2C cycle through its AI-driven products,</p>
    <p className='paragraph'>* and my role involves providing post-implementation hypercare using SQL and problem-solving. */</p>
  </div>
)}
        {active === 'interests' && (
  <div className='paragraph' style={{ animation: 'fadeIn 0.5s ease-out' }}>
    <p className='paragraph'>/**Outside of coding,</p>
    <p className='paragraph'>* a few things keep me going.</p>
    <p className='paragraph'>* I’m into anime and manga — stories that hit hard and twist your brain,</p>
    <p className='paragraph'>* stuff like Attack on Titan or Baccano! really stick with me.</p>
    <p className='paragraph'>* Football is another passion; it keeps me sharp and disciplined.</p>
    <p className='paragraph'>* I love tackling tough DSA problems, like puzzles with real impact.</p>
    <p className='paragraph'>* When I need to chill, you’ll catch me gaming or diving into novels that make me think twice. */</p>
  </div>
)}

        {active === 'education' && (
  <div className='paragraph' style={{ animation: 'fadeIn 0.5s ease-out' }}>
    <p>/** I am currently pursuing a Bachelor of Engineering in Computer Science at Chandigarh University.</p>
    <p>* In my 3rd year, I have focused on building a solid foundation in Data Structures & Algorithms while also developing full-stack web projects.</p>
    <p>* Beyond coursework, I enhance my skills through personal projects, internships, and problem-solving challenges to stay industry-ready.</p>
    <p>* Additionally, I have completed training in Blockchain and JavaScript via Metacrafters, earning certificates that demonstrate my proficiency in modern technologies. */</p>
  </div>
)}

      </div>

      {/* Code Snippets - Keep your original structure with slight enhancement */}
      <div className='code-snippets'>
        
        {active === 'bio' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{
              padding: '10px',
              background: 'rgba(49, 65, 88, 0.2)',
              borderRadius: '8px',
              border: '1px solid #314158',
              marginBottom: '15px'
            }}>
              {/* Replace with: <img src={SpringBoot} alt="" height={200} width={300} className='snippet' /> */}
              <div style={{
                height: '200px',
                width: '100%',
                background: 'linear-gradient(135deg, #6DB33F, #5A9E2E)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}><img src={atlas} style={{width: '100%',
                height: 'auto',
                maxHeight: '250px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid #314158',
                background: '#1e1e1e',
                padding: '10px'
}}></img></div>
            </div>
            <p className='paragraph' style={{ lineHeight: '1.6' }}>
              This project is my World Atlas built using React 19. It’s an interactive web app that lets users explore detailed information about countries across the globe — including flags, population, regions, and more. While building it, I focused on creating a smooth and dynamic user experience using React’s latest features like server components and optimized rendering. The project gave me a solid grasp of API integration, efficient state management, and how to present large datasets in a clean, intuitive way.
            </p>
          </div>
        )}

        {active === 'interests' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{
              padding: '10px',
              background: 'rgba(49, 65, 88, 0.2)',
              borderRadius: '8px',
              border: '1px solid #314158',
              marginBottom: '15px'
            }}>
              {/* Replace with: <img src={bot} alt="" height={200} width={500} className='snippet' /> */}
              <div style={{
                height: '200px',
                width: '100%',
                background: 'linear-gradient(135deg, #FFB86A, #FF8C42)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}><img src={bot} style={{width: '100%',
                height: 'auto',
                maxHeight: '250px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid #314158',
                background: '#1e1e1e',
                padding: '10px'}}></img></div>
            </div>
            <p className='paragraph' style={{ lineHeight: '1.6' }}>
              This project is a One Piece-themed game bot built with Node.js. Users can perform random card pulls, battle, and earn points to upgrade their collections. I implemented a leaderboard for a group of 300+ members, storing user data in a database and managing progression. Since no public JSON data was available, I also used web scraping to gather the card data, which taught me practical data handling and automation skills.
            </p>
          </div>
        )}

        {active === 'education' && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{
              padding: '10px',
              background: 'rgba(49, 65, 88, 0.2)',
              borderRadius: '8px',
              border: '1px solid #314158',
              marginBottom: '15px'
            }}>
              {/* Replace with: <img src={php} alt="" height={200} width={400} className='snippet' /> */}
              <div style={{
                height: '200px',
                width: '100%',
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}><img src={eduera} style={{
                width: '100%',
                height: 'auto',
                maxHeight: '250px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid #314158',
                background: '#1e1e1e',
                padding: '10px'
              }}></img></div>
            </div>
            <p className='paragraph' style={{ lineHeight: '1.6' }}>
              This project, EduEra, is an educational platform I built while learning Tailwind CSS for the first time. I applied it to design a clean and responsive interface, experimenting with modern layouts, cards, and interactive components. The project helped me understand practical UI design, responsive styling, and how to structure a site for multiple user roles effectively
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}