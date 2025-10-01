import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <ul className='nav-links'>
                <Link to ="/"><li className='list-items'>yash-rai</li></Link>
                <Link to="/hello"><li className='list-items'>_hello</li></Link>
                <Link to="/about"><li className='list-items'>_about-me</li></Link>
                <Link to="/projects"><li className='list-items'>_projects</li></Link>
            </ul>
        </div>
        <div>
          <Link to='/contacts' className='contact-link'>_contact_me</Link>
        </div>
    </div>
  )
}

export default Navbar