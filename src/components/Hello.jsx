import React from 'react'
import { ReactTyped } from 'react-typed'
import { Code2, ArrowRight, Sparkles, Download } from 'lucide-react'
import resume from '../assets/YashRai_Resume.pdf'

const Hello = () => {
  const projects = [
    { id: 1, title: "Bite-XP", tech: "React, Node.js, MongoDB, ExpressJS, Spoonacular API" ,LiveLink:"https://bite-xp.vercel.app/"},
    { id: 2, title: "DailyCode", tech: "EJS, Node.js, ExpressJS, MongoDB" ,LiveLink:"https://dailycode-b2vi.onrender.com/"},
  ]

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '3rem',
    padding: '4rem 2rem',
    color: 'white',
    background: '#0F172B',
    fontFamily: "'Fira Code', monospace",
    minHeight: '100vh',
    overflow:'scroll'
  }

  const buttonHover = e => {
    e.target.style.borderColor = '#43D9AD'
    e.target.style.color = '#43D9AD'
  }
  const buttonLeave = e => {
    e.target.style.borderColor = '#314158'
    e.target.style.color = '#90A1B9'
  }

  return (
    <div style={containerStyle}>
      {/* Left Section */}
      <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'rgba(67, 217, 173, 0.1)',
          border: '1px solid rgba(67, 217, 173, 0.3)',
          borderRadius: '50px',
          width: 'fit-content'
        }}>
          <Sparkles size={16} color="#43D9AD" />
          <span style={{ color: '#43D9AD', fontSize: '0.9rem', fontWeight: '600' }}>
            Available for work
          </span>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: '600', lineHeight: '1.4' }}>
          My skills are in{' '}
          <span style={{ color: '#43D9AD' }}>
            <ReactTyped
              strings={["MERN Stack", "Java", "C/C++", "DSA", "SQL"]}
              typeSpeed={40}
              backSpeed={30}
              backDelay={1000}
              loop
            />
          </span>
        </h1>
        <a href={resume} style={{textDecoration:"none"}}>
           <button
          style={{
            padding: '0.875rem 2rem',
            background: 'transparent',
            color: '#90A1B9',
            border: '2px solid #314158',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
        >
          <Download size={18} />
          Download Resume
        </button>
        </a>
       
      </div>

      {/* Right Section */}
      <div style={{ flex: '1', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{
          color: '#90A1B9',
          fontSize: '1.2rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>
          <Code2 size={20} color="#43D9AD" />
          Featured Projects
        </h3>

        {projects.map((project, idx) => (
          <div
            key={project.id}
            style={{
              padding: '1.5rem',
              background: 'rgba(15, 23, 43, 0.6)',
              border: '2px solid #314158',
              borderRadius: '12px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              animation: `scaleIn 0.6s ease-out ${0.4 + idx * 0.1}s backwards`
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#43D9AD'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#314158'}
            onClick={()=>window.open(project.LiveLink,"_blank")}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <h4 style={{
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: '600',
                margin: 0
              }}>
                {project.title}
              </h4>
              <ArrowRight size={18} color="#43D9AD" style={{ opacity: 0.7 }} />
            </div>

            <p style={{
              color: '#64748B',
              fontSize: '0.9rem',
              marginBottom: '0.75rem'
            }}>
              {project.tech}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['React', 'MongoDB', 'Express.js', 'Node.js'].map((tag, i) => (
                <span key={i} style={{
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(67, 217, 173, 0.1)',
                  border: '1px solid rgba(67, 217, 173, 0.2)',
                  borderRadius: '4px',
                  color: '#43D9AD',
                  fontSize: '0.75rem'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hello
