import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { HomeTab } from './HomeTab';
import { Mentors } from './Mentors';
import { Team } from './Team';
import { Meetings } from './Meeting';
import { MileStones } from './MileStone';
import { Videos } from './Videos';
import Logo from './assets/Logo.jpg';
import { Avatar } from '@mui/material';

function Home() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      console.log(newValue);
      setValue(newValue);
    };
    let content_array = [<HomeTab />, <Mentors />, <Team />, <Meetings />, <MileStones />, <Videos />];
    return (
        <div>
        <Avatar alt="Remy Sharp" src={`${Logo}`}  sx={{width: 50, height: 60, marginLeft: '3%', marginTop: '1%', position: 'absolute'}}/>
        <Box sx={{ marginLeft:'50%', height: '60px' }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            <Tab label="Home" />
            <Tab label="Mentors" />
            <Tab label="Team" />
            <Tab label="Meetings" />
            <Tab label="MileStones" />
            <Tab label="Videos" />
          </Tabs>
        </Box>
        <div>
            {content_array[value]}
        </div>
        </div>
      );

}

export { Home };