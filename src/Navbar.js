import React from 'react'
import {  NavLink } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <div>
    <header>
        <nav className="navbar">
            <div className='img'>
            <div className='image' />
            <h1>Meghana Thul</h1>
            <p>Full Stack Developer</p>
            </div>
              
            
                    
            <ul>
                
                <li><NavLink 
                style={({isActive})=>{
                    return{
                        color: isActive ? 'white' : 'black' ,
                    }
                }
                    
                }
                to="/home"
                 className='link'>Home</NavLink></li>
                <li><NavLink   style={({isActive})=>{
                    return{
                        color: isActive ? 'white' : 'black' ,  
                    }
                }
                    
                }to="/about"
                className='link'>About</NavLink></li>
                <li><NavLink style={({isActive})=>{
                    return{
                        color: isActive ? 'white' : 'black',
                          
                    }
                }
                    
                } to="/portfolio" className='link'>Portfolio</NavLink></li>
                <li><NavLink style={({isActive})=>{
                    return{
                        color: isActive ? 'white' : 'black' ,
                    }
                }
                    
                } to="/resume" className='link'>Resume</NavLink></li>
                <li><NavLink style={({isActive})=>{
                    return{
                        color: isActive ? 'white' : 'black',  
                    }
                }
                    
                } to="/contact" className='link'>Contact</NavLink></li>

            </ul>
        </nav>
    </header>
    
            
    </div>
  )
}

export default Navbar