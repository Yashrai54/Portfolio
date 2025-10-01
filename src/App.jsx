import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import {Routes,Route} from 'react-router'
import About from './components/About'
import Projects from './components/Projects'
import Hello from './components/Hello'
import ContactMe from './components/ContactMe'
import Submit from './components/Submit'

const App = () => {
  return (
     <div className='app'>
      <Navbar />
      <main>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/hello' element={<Hello/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/projects' element={<Projects/>}/>
           <Route path='/contacts' element={<ContactMe/>}></Route>
           <Route path='/submit' element={<Submit/>}/>
        </Routes>
      </main>
      <Footer />
     </div>
  )
}

export default App