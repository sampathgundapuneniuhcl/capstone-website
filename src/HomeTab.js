import * as React from 'react';
import './HomeTab.css';
function HomeTab() {

  const logoImg = 'https://i.postimg.cc/4yrpg8vM/Logo.jpg';
    return (
        <div>
            <div className="container"> 
              <div className="image">
                 <img src={logoImg}  alt="logo"></img>
              </div>
              <div className="text">
                 <h1> Humanoid ChatBot</h1> 
                 <h2> This project aims to develop a cutting-edge Humanoid Chatbot capable of engaging users in natural language conversations. It will synchronize facial expressions with spoken words through advanced lip syncing technology. Additionally, users will have precise control over the chatbot's emotional expressions, ensuring a personalized and emotionally resonant interaction experience.</h2>
              </div>   
            </div>
        </div>
      );

}

export { HomeTab };