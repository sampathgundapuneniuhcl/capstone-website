import * as React from 'react';
import './Team.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { teamData } from './constants';
import linkedin from './assets/Linkedin.png'
import email from './assets/email.png'


function Team() {
    return (
      <div>
        <div className='container'>
        <ImageList sx={{ width: '90%', height: 500, paddingLeft: '4%', paddingRight: '4%' }} cols={4}>
        {teamData.map((item) => (
          <ImageListItem key={item.img} style={{Height:'400px', maxWidth:'400px'}}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
              style={{borderRadius:'20px', marginLeft:'3%', width: '90%'}}
            />
            <ImageListItemBar
              sx={{marginTop:'5%', fontSize: '50px'}}
              title={item.name}
              subtitle={
                <div style={{height:'100px'}}>
                  <span style={{fontSize:'20px'}}>{item.description}</span>
                  <div >
                  <a href={item.linkedIn} target='_blank' rel="noreferrer">
                    <img  src={linkedin} alt='LinkedIn' style={{height:'25px', width: '40px', marginBottom:'5px'}}></img>
                  </a>
                  <a href={`mailto:${item.mail}`}>
                    <img  src={email} alt='Gmail' style={{height:'35px', width: '50px', marginLeft:'10px',paddingTop:'10px'}}></img>
                  </a>
                  </div>
              </div>}
              position="below"
            />
            
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  </div>
      );

}

export { Team };