import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@material-ui/core/Button';
import Twitter from '../../assets/twit.png';
import Discord from '../../assets/discord.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import Menu from '../../assets/icons8-circled-menu-100.png';

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  height: 40,
  width: 170,
  lineHeight: 1.5,
  backgroundColor: 'rgba(255, 39, 121, 0.6)',
  borderColor: 'rgba(255, 39, 121, 1)',
  textDecoration: 'none',
  fontFamily: [
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgba(255, 39, 121, 1)',
    borderColor: 'rgba(255, 39, 121, 1)',
    boxShadow: 'none',
    textDecoration: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'rgba(255, 39, 121, 0.6)',
    borderColor: '#ff7a26',
    textDecoration: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(255, 39, 121, 0.5)',
    textDecoration: 'none',
  },
});

function NavBar() {
  return (
    <Navbar bg="" expand="lg" style={{ backgroundColor: 'transparent', paddingTop:25, paddingBottom:15 }} collapseOnSelect variant="dark">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ border: 'none' }}
        >
          <img src={Menu} alt="Menu icon" width={30} height={30} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="linkgroup">
          <Nav className="me-auto" style={{ color: 'white' }}>
            <Nav.Link
              style={{
                fontFamily: 'Baskerville',
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 14,
              }}
              className="Navlink"
              href="/"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              style={{
                fontFamily: 'Baskerville',
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 14,
              }}
              className="Navlink"
              href="/#Story"
            >
              STORY
            </Nav.Link>
            <Nav.Link
              style={{
                fontFamily: 'Baskerville',
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 14,
              }}
              className="Navlink"
              href="/#Roadmap"
            >
              ROADMAP
            </Nav.Link>
            <Nav.Link
              style={{
                fontFamily: 'Baskerville',
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 14,
              }}
              className="Navlink"
              href="/#Team"
            >
              TEAM
            </Nav.Link>
            <Nav.Link
              style={{
                fontFamily: 'Baskerville',
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 14,

                '&:hover': {
                  color: 'red',
                },
              }}
              className="Navlink"
              href="/#FAQ"
            >
              FAQ
            </Nav.Link>
          </Nav>
          <div className="sociallogo">
            <a
              href="https://twitter.com/foxysquadnft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Twitter}
                alt="Twitter"
                height={28}
                width={28}
                style={{}}
              ></img>
            </a>
          </div>
          <div className="sociallogo">
            <a
              href="https://discord.com/invite/foxysquad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Discord} alt="discord" height={32} width={32}></img>
            </a>
          </div>
          <Link to="/Mint" style={{ textDecoration: 'none' }}>
            <BootstrapButton>MINT YOURS</BootstrapButton>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
