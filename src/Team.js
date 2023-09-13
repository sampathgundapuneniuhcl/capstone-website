import * as React from 'react';
import './Team.css';
// import Team1 from "./assets/mentor.jpg";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Avatar } from '@mui/material';
import { borderColor } from '@mui/system';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Sampath',
    author1: 'Abc',
    author2: 'sdsfs',
    author3: 'dskfs',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Ragini',
    author: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Faisal',
    author: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Mohan',
    author: '',
  },
]

function Team() {
    return (
      <div>
        <div className='container'>
        <ImageList sx={{ width: '90%', height: 300, paddingLeft: '4%', paddingRight: '4%' }} cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{borderRadius:'20px', marginLeft:'3%', width: '90%'}}
            />
            <ImageListItemBar
              sx={{marginTop:'5%', fontSize: '50px'}}
              title={item.title}
              subtitle={
                <div>
                  <span>{item.author1}</span>
                  <span>{item.author2}</span>
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