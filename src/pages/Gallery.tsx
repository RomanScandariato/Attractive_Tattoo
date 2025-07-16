import { Container, ListGroup, Row, Col } from "react-bootstrap";

function Gallery() {
  return (
    <Container>
      <h1 className="text-center my-4 font-edwardian">Gallery</h1>
      <ListGroup className="" style={{ paddingBottom: '20px' }}>
        <Row>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">
                <img src="images/download.jpg" className="photo-image" />
                <p>Line Art</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">

            <ListGroup.Item className="photo-item">
                <img src="images/rose.jpg" className="photo-image" />
                <p>Rose</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/kitty.jpg" className="photo-image" />
                <p>Kitty Kat</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/arm.jpg" className="photo-image" />
                <p>Super Heros</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/Hand-Tattoo.jpg" className="photo-image" />
                <p>Hand Tatto</p>
            </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <ListGroup.Item className="photo-item">      
                <img src="images/delicate-rose.jpg" className="photo-image" />
                <p>Delicate Rose & Face</p>
            </ListGroup.Item>
          </Col> 
                             

        </Row>
      </ListGroup>      
    </Container>
  );
}

export default Gallery;