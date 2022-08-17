import React from 'react';
import './index.css';
import img1 from '../../assets/slide/8.png';
import img2 from '../../assets/slide/708.png';
import img3 from '../../assets/slide/200.png';

const Team = () => {
  return (
    <div className="Team" id="Team">
      <div className="Titles">
        <h3>TEAM</h3>
        <h1>Meet The Team</h1>
      </div>
      <div className="Members">
      <div className="TeamCard Team1" id="Team1">
        <img src={img3} alt="Team"  className="Teamimg" />
        <h2>Nathaniel</h2>
        <h4>Marketer</h4>
        <p>
        A designer passionate about branding and marketing. Creator of ideas, concepts and client experiences. Experience in: B2B marketing, event management, processes and design concepts
        </p>
      </div>
      <div className="TeamCard Team2" id="Team2">
        <img src={img1} alt="Team"  className="Teamimg" />
        <h2>Splurgey</h2>
        <h4>Founder</h4>
        <p>
        Founder and seed investor of multiple Crypto ventures around the globe. based in Germany
        </p>
      </div>
      <div className="TeamCard Team3" id="Team3">
        <img src={img2} alt="Team"  className="Teamimg" />
        <h2>Dennison</h2>
        <h4>Developer</h4>
        <p>
        Self-taught , talented developer from Seychelles, based in United States. Web3 enthusiast!!
        </p>
      </div>
      </div>
    </div>
  );
};

export default Team;
