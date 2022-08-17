import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.css';

const Timeline = () => {
  return (
    <div className="Timediv" id="Roadmap">
      <div className="Title">
        <span>OUR MISSION TO MOON</span>
        <h1>ROADMAP</h1>
      </div>
      <VerticalTimeline className="Timelinesec">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(145, 43, 2)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(145, 43, 2)' }}
          iconStyle={{ background: 'rgb(145, 43, 2)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            10% of the Project
          </h3>
          <ul>
            <li>
              <p>NFT Planning and building the Brand.</p>
            </li>
            <li>
              <p>
                Twitter and Discord account Set up, Preparation and teaming up
                with NFT & Crypto Based Engineers, Artists and Designer
                Professionals World Wide.
              </p>
            </li>
            <li>
              <p>Promotions, Business plan and Marketing Plan Set Up.</p>
            </li>
            <li>
              <p> Realistic Roadmap Plannification.</p>
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(145, 43, 2)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            35% of the Project
          </h3>
          <ul>
            <li>
              <p>NFT Preparation.</p>
            </li>
            <li>
              <p>Creative Kitsune Foxes’ based Artwork.</p>
            </li>
            <li>
              <p>Official Kitsune Website Establishment.</p>
            </li>
            <li>
              <p>OG and WL distribution and building of the community.</p>
            </li>
            <li>
              <p>Connecting Kitsune Foxes’ Squad to official Crypto Wallets.</p>
            </li>
            <li>
              <p>Introducing Kitsune Foxes publicly to get more exposure.</p>
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(145, 43, 2)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            70% of the Project
          </h3>
          <ul>
            <li>
              <p>Minting and Staking starts.</p>
            </li>
            <li>
              <p>$KITS Launch</p>
            </li>
            <li>
              <p>Raffles and Auctions coming to the staking website.</p>
            </li>
            <li>
              <p>Funds Pool get launched.</p>
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(145, 43, 2)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            100% of the Project
          </h3>
          <ul>
            <li>
              <p>Streetwear Brand and Merchandise gets launched.</p>
            </li>
            <li>
              <p>Partnerships and collaborations with big Companies.</p>
            </li>
            <li>
              <p>
                Missions to get more $KITS and Special Rewards get launched.
              </p>
            </li>
            <li>
              <p>IRL Event.</p>
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
