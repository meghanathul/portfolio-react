import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import PagenotFound from './PagenotFound'
import Portfolio from './Portfolio'
import Resume from './Resume'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<PagenotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App