
import React from 'react'
import './App.css'
const About = () => {
  return (
    <div>
      <div className="container1" id="container1stop">
       <h1> About Me</h1>
       {/* <hr/> */}
       <div className='info'>
            <span className='title'>Name:</span>
            <span className='title1'>Meghana</span>
            <br/>
            <span className='title'>Age:</span>
            <span className='title1'>24</span><br/>
            <span className='title'>Qualification:</span>
            <span className='title1'>B.E(Information Technology)</span><br/>
            <span className='title'>Post:</span>
            <span className='title1'>Full Stack Developer</span><br/>
            <span className='title'>Language:</span>
            <span className='title1'>Marathi</span><br/>

        </div>
        
        <div className="sub-div">
            <h4>Language/Library/Technolohgy</h4>
            <i className="fab fa-html5 pic"></i>
            <i className="fas fa-file-code pic"></i>
            <i className="fab fa-js-square pic"></i>
            <i className="fab fa-react pic"></i>
            <i className="fas fa-database pic"></i>
        </div>

    </div>

    </div>
  )
}

export default About