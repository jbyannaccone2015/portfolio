import React from 'react'
import './Summary.css'
import image from './JUSTIN.JPG'

function Summary() {
    return (
        <div class="container">
            {/* <div class="name">
                <div class="title">JUSTIN YANNACCONE</div>
            </div> */}
           <div class="summary">
               <h1 className="title">ABOUT ME</h1>
               <p className="para">
           Dedicated and driven frontend developer who is a quick learner with a passion for technology.  
           Eager to work in a collaborative software development environment to create intuitive and engaging user interfaces.
           Strong work ethic and a self learner who is quick to pick up new skills. As well as has a 
           variety of experience in a vast array of different development work environments and languages and 
           a diverse set of work experiences. 
           </p>
            </div> 
            <div class="image">
                <img class= "sideimg" src= {image} alt="placeholder" />
            </div>
        </div>
    )
}

export default Summary
