import * as React from 'react';
import './Mentor.css';

function Mentors() {
   const mentorImg = 'https://i.postimg.cc/nLysMs9j/mentor.jpg';
    return (
      <div>
      <div className="container" style={{marginLeft: '10%'}}> 
        <div className="image">
           <img src={mentorImg} className="app-logo" alt="logo"></img>
        </div>
        <div className="text" style={{marginLeft: '5%'}}>
           <h1> Dr. Pradeep Buddaraju</h1> 
           <h4> Dr. Pradeep, our esteemed Assistant Professor, brings a wealth of experience and expertise to our institution. With a strong academic background, including a PhD and MS in Computer Science from the University of Houston, he has excelled in research areas spanning mobile computing, biometrics, and machine learning. Dr. Pradeep's achievements, including the Best PhD Award and Outstanding Paper Award, reflect his dedication to advancing the field of computer science. His contributions to prestigious journals and his recognition as a Best Teaching Assistant underscore his commitment to academic excellence. We are privileged to have Dr. Pradeep as part of our team.</h4>
        </div>   
      </div>
  </div>
      );

}

export { Mentors };