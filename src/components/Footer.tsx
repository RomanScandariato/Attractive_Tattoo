import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light footer-text">
      <Container className="py-4">
        <Row className="align-items-center">
          <Col xs="auto">
            <img src="images/Attractive-logo-black.png" alt="Footer Logo" className="Attractive Tattoo Logo" width="80px" />
          </Col>
          <Col>
            <p className="mb-0">
              &copy; {currentYear} - All Rights Reserved
            </p>
            <p className="mb-0">
              Dev & Design by Roman Scandariato
            </p>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <a
              href="https://www.instagram.com/maypodeluxe/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-dark"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.facebook.com/maypodeluxe"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-dark"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://open.spotify.com/artist/3QKzy5QsFJh68sQdD7lm0c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
              aria-label="Spotify"
            >
              <FontAwesomeIcon icon={faSpotify} size="lg" />
            </a>
          </Col>
          <Col xs="auto">
            <img src="images/Attractive-logo-black.png" alt="Attractive Tatto Logo" width="80px" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;