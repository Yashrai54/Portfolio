import React from 'react'
import Dropdown from '../assets/dropdown.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactMe = () => {
    const navigate=useNavigate()
    const [openContact, setOpenContact] = useState(false)
    const [open, setOpen] = useState(false)
    const str="#sendBtn"
 function handleContactDropdown(){
    setOpenContact(!openContact)
    console.log(openContact)
  }
  function handleDropdown(){
    setOpen(!open)
    console.log(open)
  }
  function handleSubmit(e){
         e.preventDefault();
         console.log("navigating...")
         navigate("/submit")
  }
  return (
    <div className='about-container'>
        <div className='about'>
            <div className='contact-info'>
                      <p className='about-heading' onClick={()=>handleContactDropdown()}> <img src={Dropdown} alt="" className='img-dropdown' height={20} width={20}/>contact-info</p>
                     {openContact &&(
                     <ul className='about-list'>
                       <li>raiyash582@gmail.com</li>
                        <li>+917015032481</li>
                      </ul>)}
                  </div>
            <div className='contact-info'>
                      <p className='about-heading' onClick={()=>handleDropdown()}> <img src={Dropdown} alt="" className='img-dropdown' height={20} width={20}/>find-me-also-in</p>
                     {open &&(
                     <ul className='about-list'>
                       <li><a href="www.linkedin.com/in/yash-rai-05874b369">Linkedin</a></li>
                      </ul>)}
                  </div>
        </div>
        <div className='about-description'>
            <form onSubmit={handleSubmit} className='form'>
                <p className='paragraph'>_name:</p>
                <input type="text" name="name" id="" placeholder='name' className='form-input'/>
                <p className='paragraph'>_email:</p>
                <input type="text" name="email" id="" placeholder='email' className='form-input'/>
                <p className='paragraph'>_message:</p>
                <textarea name="message" id="message" placeholder='message' className='form-input'></textarea>
                <div></div>
              <button type='submit' className='button'>submit-message</button>
            </form>
        </div>
          <div className="code-box">
      <p>
        <span className="keyword">const</span> button = document.
        <span className="function">querySelector</span>
        (<span className="string">"#sendBtn"</span>);
      </p>
      <p>
        <span className="keyword">const</span> message = {'{'}
      </p>
      <p className="indent">
        name: <span className="string">"Jonathan Davis"</span>,
      </p>
      <p className="indent">
        email: <span className="string">""</span>,
      </p>
      <p className="indent">
        message: <span className="string">""</span>,
      </p>
      <p className="indent">
        date: <span className="string">"Thu 21 Apr"</span>
      </p>
      <p>{'}'}</p>
      <p>
        button.<span className="function">addEventListener</span>
        (<span className="string">"click"</span>, () =&gt; {'{'} form.
        <span className="function">send</span>(message); {'}'});
      </p>
    </div>
    </div> 
  )
}

export default ContactMe