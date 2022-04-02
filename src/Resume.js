import React from 'react'

const Resume = () => {
    const education=[{h2:'10th',h3:'Nootan Kanya School Amravati',btn:'complited'},
{h2:'12th',h3:' Ramkrishna krida vidhyalay Amravati',btn:'compited'},
{h2:'Degree(BE)',h3:'INFORMATION TECHNOLOGY Prof. Ram Meghe Institude of Technology and Research Badnera, Amravati',btn:'complited'}]
  
const course=[{h2:'Python',h3:'OBDURATE',btn:'complited'},{h2:'Prepbytes',h3:'Elivation Academy',btn:'Persuing'}]

return (
    <div>
        <div className="resume" id="resumestop">

        <h4>Education</h4>
        <div className='education'>
            
        {
             education.map((e)=>{
                return(
                    
                    <div className='edu'>
                        <div className='circle'>
                        <i class="fas fa-graduation-cap deg"></i>
                        </div>
                        <h2>{e.h2}</h2>
                <button className='complited'>{e.btn}</button>
                <hr/>
               
                <h3>{e.h3}</h3>
                </div>
                )
             })
            }
        </div>
        <h4>Courses</h4>
        <div className='course'>
     
            {
                 course.map((e)=>{
                    return(
                        <div className='cou'>
                               <div className='circle'><i class="fas fa-graduation-cap  deg"></i></div>
                    <h2>{e.h2}</h2>
                    <button className='complited'>{e.btn}</button>
                    <hr/>
                   
                    <h3>{e.h3}</h3>
                    </div>
                    )
                 })
                }
            </div>

    </div>
    </div>
    
  )
}

export default Resume