import * as React from 'react';
import './Mentor.css';
import Mentor from "./assets/mentor.jpg";
function Mentors() {
    return (
      <div>
      <div className="container"> 
        <div className="image">
           <img src={Mentor} className="app-logo" alt="logo"></img>
        </div>
        <div className="text">
           <h1> Dr. Pradeep Buddaraju</h1> 
           <h4> Dr. Pradeep, our esteemed Assistant Professor, brings a wealth of experience and expertise to our institution. With a strong academic background, including a PhD and MS in Computer Science from the University of Houston, he has excelled in research areas spanning mobile computing, biometrics, and machine learning. Dr. Pradeep's achievements, including the Best PhD Award and Outstanding Paper Award, reflect his dedication to advancing the field of computer science. His contributions to prestigious journals and his recognition as a Best Teaching Assistant underscore his commitment to academic excellence. We are privileged to have Dr. Pradeep as part of our team.</h4>
        </div>   
      </div>
  </div>
      );

}

export { Mentors };