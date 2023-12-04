import * as React from 'react';
import ReactPlayer from 'react-player';
import expression_avatars from './assets/avatars_expressions.png';
import lipMovements from './assets/lip_movements.png';
import audio_generation from './assets/milestone_1.png';

function MileStones() {
    return (
        <div>
          <h1>MileStones</h1>
          <section>
          <h2 style={{color:'red'}}>MileStone 1</h2>
          <span> Converstion of text to Speech</span>
          <img src={audio_generation} alt="text to speech" style={{height:'700px'}}></img>
          </section>
          <section>
          <h2 style={{color:'red'}}>MileStone 2</h2>
          <span> Finding lyp Sync frequency using audio file</span>
          <img src={lipMovements} alt="lip momvements" style={{height:'700px'}}></img>
          </section>
          <section>
          <h2 style={{color:'red'}}>MileStone 3</h2>
          <span> avatars generation with expressions</span>
          <img src={expression_avatars} alt="avatars with expressions" ></img>
          </section>
          <section>
          <h2 style={{color:'red'}}>MileStone 4</h2>
          <span> animation of avatars using lyp sync frequency</span>
          <div style={{maxHeight: '500px', maxWidth: '650px', marginLeft:'25%'}}>
          <span style={{fontSize:25}}>integration of lypsync input with animation </span>
            {/* <ReactPlayer url={videoInt}  controls={true} /> */}
          </div>
          </section>

          
        </div>
      );

}

export { MileStones };