import * as React from 'react';
import videoInt from './assets/integration_1.mp4'
import ReactPlayer from 'react-player';

function Videos() {
    return (
        <div>
            <h1>Videos</h1>

        <div style={{maxHeight: '500px', maxWidth: '650px', marginLeft:'25%'}}>
          <span style={{fontSize:25}}>integration of lypsync input with animation </span>
            <ReactPlayer url={videoInt}  controls={true} />
          </div>
        </div>
      );

}

export { Videos };