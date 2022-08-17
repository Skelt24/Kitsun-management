import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './index.css';
import Carousel from '../carousel/index';
import CustomizedTimeline from '../timeline/index';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { styled } from '@material-ui/core/styles';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#d55200',
  borderColor: '#d55200',
  textDecoration: 'none',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#ff7a26',
    borderColor: '#ff7a26',
    boxShadow: 'none',
    textDecoration: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#ff7a26',
    borderColor: '#ff7a26',
    textDecoration: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(213,82,0,.5)',
    textDecoration: 'none',
  },
});

const Main = () => {
     
  return (
    <div className="Main">
      <div className="welcome">
        <span>WELCOME TO</span>
        <h1>
          KIT
          <span id='Sletter'
            
          >
            S
          </span>
          UNE
        </h1>
        <span>
          A long time ago, few humans found some powerful Kitsunes deep in the
          lost country side of Japan. Kitsunes are Japanese foxes that possess
          paranormal abilities that increase as they get older and wiser.
        </span>
      </div>
      <div className="Story" id="Story">
        <Paper
          elevation={5}
          style={{
            width: 'auto',
            maxWidth: 525,
            backgroundColor: 'rgba(0, 1, 3, 0.8)',
            margin: 10,
            color: 'white',
            padding: 25,
            borderRadius: 10,
          }}
        >
          <h3>THE STORY</h3>
          <span>
            <p>A long time ago, few humans found some powerful Kitsunes deep in the
            lost country side of Japan. Kitsunes are Japanese foxes that possess
            paranormal abilities that increase as they get older and wiser.</p> <p>The
            Humans related with the Kitsunes and the Kitsunes showed selected
            Humans their mystical powers to be used in battles and self
            protection.</p><p> During fights, the Humans transform into their powerful
            Kitsune masks to get the mystical power.</p><p> The Kitsune Fighters used
            their magical powers to help create a peaceful world where Kitsunes
            and humans live in harmony, devoting all their energy to constantly
            improving this sacred connection.</p>
          </span>
          <div className="button">
            
          </div>
        </Paper>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
      <CustomizedTimeline />
    </div>
  );
};

export default Main;
