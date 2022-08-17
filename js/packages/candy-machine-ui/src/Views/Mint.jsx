import React from 'react';
import Main from '../components/Main/index';
import App from '../App';
import NFT from '../assets/gifKit.gif';
import './Mint.css';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { MintCountdown } from '../MintCountdown';

const Mint = () => {
  return (
    <section>
    <div className="Mint">
      
      <div class="content">
        <img src={NFT} alt="Kitsun" width="300" className="gif" />
        <Paper
              elevation={5}
              style={{
                padding: 15,
                backgroundColor: '#151A1F',
                borderRadius: 6,
                color: 'white',
                marginTop:20,
                
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Chip label="Phase 1 : OG Mint" color="primary" size="small" />
                  <br/>
                  <CalendarToday style={{  marginRight: 5 }} />
                  <Typography style={{verticalAlign:"bottom"}} variant="2">27/08/2022 - 2:00 pm GMT+1</Typography>
                </Grid>
                <Grid item xs={6} justifyContent="flex-end">
                  
                </Grid>
              </Grid>
              <Typography style={{ marginTop: 10, fontSize:14 }}>
                OG MINT PHASE • Price 0.5 ◎
              </Typography>
            </Paper>
            <Paper
              elevation={5}
              style={{
                padding: 15,
                backgroundColor: '#151A1F',
                borderRadius: 6,
                color: 'white',
                marginTop:20,
                
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Chip label="Phase 2 : WL Mint" color="primary" size="small" />
                  <br/>
                  <CalendarToday style={{  marginRight: 5 }} />
                  <Typography style={{verticalAlign:"bottom"}} variant="2">27/08/2022 - 5:10 pm GMT+1</Typography>
                </Grid>
                <Grid item xs={6} justifyContent="flex-end">
                  
                </Grid>
              </Grid>
              <Typography style={{ marginTop: 10, fontSize:14 }}>
                WHITELIST MINT • Price 0.75 ◎
              </Typography>
            </Paper>
            <Paper
              elevation={5}
              style={{
                padding: 15,
                backgroundColor: '#151A1F',
                borderRadius: 6,
                color: 'white',
                marginTop:20,
                
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Chip label="Phase 3 : Public" color="primary" size="small" />
                  <br/>
                  <CalendarToday style={{  marginRight: 5}} />
                  <Typography style={{verticalAlign:"bottom"}} variant="2">27/08/2022 - 8:20pm GMT+1</Typography>
                </Grid>
                <Grid item xs={6} justifyContent="flex-end">
                  
                </Grid>
              </Grid>
              <Typography style={{ marginTop: 10, fontSize:14 }}>
                PUBLIC MINT • Price 1 ◎
              </Typography>
            </Paper>
            <App/>
            
      </div>
    </div>
    </section>

  );
};

export default Mint;
