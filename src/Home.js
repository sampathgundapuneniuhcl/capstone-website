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

function Home() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    let content_array = [<HomeTab />, <Mentors />, <Team />, <Meetings />, <MileStones />, <Videos />];
    return (
        <div>
        <Box sx={{ width: '100%' }}>
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