import { Grid, Typography,List,ListItem   } from '@mui/material';
import * as React from 'react';
import { meetingsData } from './constants';

function Meetings() {
    return (
        <div>
          <div style={{marginLeft: '18%', height: '80%'}}>
          <Typography variant="title" style={{marginLeft: '-20%'}}>
              Meetings 
            </Typography>
          <Grid item xs={12} md={6}>
            <div style={{marginLeft: '20%'}}>
              <List>
                {meetingsData.map((tile) => 
                <ListItem key={tile} style={{ height: '70px', width:'50%', marginBottom:'5px', backgroundColor:'#eaecef'}}>
                  <a href={tile.link} target='_blank' rel="noreferrer" style={{width:'100%', height:'100%', paddingTop:'25px', textAlign:'center'}}>{tile.name}</a>
                </ListItem>
                )}
              </List>
            </div>
          </Grid>
         </div>
        </div>
      );
}

export { Meetings };