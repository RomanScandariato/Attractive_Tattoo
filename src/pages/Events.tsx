import { Container, ListGroup, Row, Col } from "react-bootstrap";

function UpcomingEvents() {
  return (
    <Container>
      <h1 className="text-center my-4 font-edwardian">Upcoming Events</h1>
      <ListGroup className="" style={{ paddingBottom: '20px' }}>
        <Row>
        <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Flash Sale</h4>
            <p>Feb 13th 2026</p>
            <img src="images/If_I_Only_Knew.png" className="img-fluid mb-3 w-50" />

            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Details</summary>
                <p>Fifty Dollar Specials</p>
                <p>Our artist prepair a wide range of Items for Friday the 13th</p>
                
            </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Tattoo Convention</h4>
            <p>November 15th, 2025</p>
            <img src="images/free.png" className="img-fluid mb-3 w-50" />

            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Details</summary>
                <p>Coming Soon</p>
              </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Some Cool Event</h4>
            <p>Coming Soon</p>
            <img src="images/long_way.png" className="img-fluid mb-3 w-50" />
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Details</summary>
                <p>Details to Follow</p>
              </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Some Event</h4>
            <p>Event Date: December 12th 2025</p>
            <img src="images/Weedzie.png" className="img-fluid mb-3 w-50" />
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Details</summary>
                <p>Anything we want to say about this event goes here!!!
                </p>

            </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Another Event</h4>
            <p>January 1st, 2026</p>
            <img src="images/Weedzie.png" className="img-fluid mb-3 w-50" />

            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Details</summary>
                <p>Details coming soon</p>
              </details>
          </ListGroup.Item>
          </Col>
          <Col xs={12} md={4} className="mb-4">
          <ListGroup.Item className="song-item">
            <h4>Halloween</h4>
            <p>October 31st, 2025</p>
            <img src="images/lonely_road.png" className="img-fluid mb-3 w-50" />
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>Details</summary>
                <p>Free Skulls for eveyone</p>
              </details>
          </ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
    </Container>
  )
}

export default UpcomingEvents;