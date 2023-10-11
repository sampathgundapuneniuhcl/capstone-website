import { Grid, Typography,List,ListItem   } from '@mui/material';
import * as React from 'react';


const tileData = [
     {
       link: 'https://docs.google.com/document/d/1Iooqg-0OOBnOUMvFpFlOrbU-hnSfMgj7/edit?usp=drive_link&ouid=103607813084617282950&rtpof=true&sd=true',
        Id: '1',
       name: 'Week 1',
    },
    {
      link:'https://docs.google.com/document/d/10gUF7wORLkARbVcRDDj_B2HHg3bWRJ5y/edit?usp=drive_link&ouid=103607813084617282950&rtpof=true&sd=true',
       Id: '2',
      name: 'Week 2',
   },
   {
    link: 'https://docs.google.com/document/d/1dYh5okmeNnVdja-Xq3XDLlg6MDN20Ap_/edit?usp=drive_link&ouid=103607813084617282950&rtpof=true&sd=true',
     Id: '3',
    name: 'Week 3',
    },
    {
      link: '    https://docs.google.com/document/d/1BChYhMgyZ-m56EERg304AmvJGA2grsma/edit?usp=drive_link&ouid=103607813084617282950&rtpof=true&sd=true',
       Id: '4',
      name: 'Week 4',
      },
      {
        link: 'https://docs.google.com/document/d/1ca7i32bX-d3kK_k0c3FMAYAGUHqEhzub/edit?usp=drive_link&ouid=103607813084617282950&rtpof=true&sd=true',
         Id: '5',
        name: 'Week 5',
      },
      // {
      //   link: '',
      //      Id: '3',
      //     name: 'Week 3',
      //     },
      //     {
      //       link: '',
      //        Id: '3',
      //       name: 'Week 3',
      //       }

  ];

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
                {tileData.map((tile) => 
                <ListItem style={{ height: '70px', width:'50%', marginBottom:'5px', backgroundColor:'#eaecef'}}>
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