import * as React from 'react';
import './Team.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const fizalImg = 'https://i.postimg.cc/W1DbrNvM/fs.jpg';
const sampathImg = 'https://i.postimg.cc/8ztX86nS/sampath.jpg';
const raginiImg = 'https://i.postimg.cc/MHSmf6r5/ragini.jpg';
const mohanImg = 'https://i.postimg.cc/nr95Rzky/mohan.jpg';

const itemData = [
  {
    img: sampathImg,
    title: 'Sampath',
    author1: 'Software Engineer',
  },
  {
    img: raginiImg,
    title: 'Ragini',
    author1: 'Software Developer',
  },
  {
    img: fizalImg,
    title: 'Faisal Alnounou',
    author1: 'Software Engineer / Highschool Teacher',
  },
  {
    img: mohanImg,
    title: 'Mohan',
    author1: 'Software Developer',
  },
]

function Team() {
    return (
      <div>
        <div className='container'>
        <ImageList sx={{ width: '90%', height: 500, paddingLeft: '4%', paddingRight: '4%' }} cols={4}>
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