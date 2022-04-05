import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super();
  
    this.state = {
       header:false
    }
  }
  render(){
    return (
      <div>
       <div className="container" id="homestop">
       <button id='menu' onClick={()=>this.setState({demo:!this.state.header})}>show</button>
        
          <h2>Hi, I am Meghana Thul</h2>
          <div className="para">
              <p>I am beginner in Full Stack Development having experience of 4 months. I also have knowledge to build
                  website .I can work on Windows and I have basic knowledge Linux OS.</p>
              <p className='para1'> My hobbies are reading,and listening music.I like solving problems , whenever I've
                  faced problems I've always tried to solve them on my own which has made me Learn more new things and I apply this
                  habit in all situations.</p>
          </div>
      <Link to='/about'  className="button">About Me  <i class="fa-solid fa-arrow-right-long" style={{color:'white',marginLeft:'20px'}}></i></Link>
      
      </div>
  
       
      </div> 
      
    )
  }
}

export default Home