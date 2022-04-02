import React from 'react'

const Contact = () => {
  return (
    <div className='con'>

    <div class="contact">
        <div class="first">
            <h1>Lets contact</h1>
            <div className='con-info'>
            <p> <i class="fab fa-linkedin pic2 icon" ></i>https://www.linkdin.com/in/meghana-thul-7293b5200</p><br/>
            <p><i class="fa-solid fa-envelope icon"></i> meghanathul123@gmail.com</p><br/>
            <p><i class="fa-solid fa-phone-flip icon"></i>7875888385</p><br/>
            <p><i class="fab fa-github pic2 icon"></i>https://github.com/meghanathul</p><br/>
            <p><i class="fas fa-map-marker-alt pic2 icon"></i>Amravati-444607,Maharashtra,India</p>

            </div>
        </div>
        
        <div class="second">
            <h1>Send me a message!</h1>
            <label for="">Full Name *</label><br/>
            <input type="text"/><br/><br/>
            <label for="">Phone number *</label><br/>
            <input type="text"/><br/><br/>
            <label for="">Email Address *</label><br/>
            <input type="text"/><br/><br/>
            <label for="">Message</label><br/>
            <textarea name="" id="textarea" cols="30" rows="10" placeholder="write here.."></textarea>
            <button>Send message</button>
        </div>

    </div>
    </div>
  )
}

export default Contact