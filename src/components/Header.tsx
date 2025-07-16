import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { client } from '../main';

function Header() {
  const textStyle = { color: 'white' };

  return (
    <Container className="navbar-style">
      <Navbar className="text-white" style={{ ...textStyle }}>
        <Container className="nav-wrap">
          <Navbar.Brand as={NavLink} to="/" style={textStyle}><img src="/images/Attractive-logo.png" alt="Attractive Tattoo" width="100px" /></Navbar.Brand>
          <Nav className="ms-auto text-white">
            <Nav.Link as={NavLink} to="/" style={textStyle}>Home</Nav.Link>
              <>
                <Nav.Link as={NavLink} to="/about" style={textStyle}>About</Nav.Link>
                <Nav.Link as={NavLink} to="/gallery" style={textStyle}>Gallery</Nav.Link>
                <Nav.Link as={NavLink} to="/upcomingevents" style={textStyle}>Events</Nav.Link>
                <Nav.Link as={NavLink} to="/contact" style={textStyle}>Contact</Nav.Link>
              </>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header;
