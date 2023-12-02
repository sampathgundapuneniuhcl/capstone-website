import * as React from 'react';
import expression_avatars from './assets/avatars_expressions.png';
import lipMovements from './assets/lip_movements.png'

function MileStones() {
    return (
        <div>
          <h1>MileStones</h1>
          <section>
          <h2 style={{color:'red'}}>MileStone 1</h2>
          <span> Converstion of text to Speech</span>

          </section>
          <section>
          <h2 style={{color:'red'}}>MileStone 2</h2>
          <span> Finding lyp Sync frequency using audio file</span>
          <img src={lipMovements} alt="lip momvements"></img>
          </section>
          <section>
          <h2 style={{color:'red'}}>MileStone 3</h2>
          <span> avatars generation with expressions</span>
          <img src={expression_avatars} alt="avatars with expressions"></img>
          </section>
          <section>
          <h2 style={{color:'red'}}>MileStone 4</h2>
          <span> animation of avatars using lyp sync frequency</span>

          </section>

          
        </div>
      );

}

export { MileStones };