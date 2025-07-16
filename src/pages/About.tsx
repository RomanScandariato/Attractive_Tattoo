import { Container, ListGroup, Row, Col } from "react-bootstrap";
//import { useRef } from 'react';

//const bioRef = useRef(null);
//const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

function About() {
  return (
    <Container>
      <h1 className="text-center my-4 font-edwardian">About Us</h1>
      <ListGroup className="" style={{ paddingBottom: '20px' }}>


        <Row>
          <Col  className="">
          <ListGroup.Item className="about-us-text">
            <h4>Attractive Tattoo</h4>
            <p>Established 2002</p>
            <img src="images/front-left.jpg" className="about-us-image" />
            
            <p>Blissful nostalgia returns with that crisp, organic musicianship – Maypo Deluxe keep authenticity alive, with the heartfelt and evocative new soft-rock single If I Only Knew.</p>
            <p>Featuring a humble melody and ever-enchanting array of guitars, If I Only Knew presents some of Maypo Deluxe’ most imaginative and inspiring lyrics yet. The whole thing sets the mood in the way that nineties indie once did, but softens the vibe for its breathy and comforting melody, and proceeds to weave in a poetic storyline that grips you from start to finish.</p>
            <p>To then consider the easy resolve of that chorus, this relatable moment of self-reflection, the song humbly reaches a rather anthemic status – its perfectly crafted four minutes and thirty-eight seconds building up the anticipation beautifully throughout. There’s also a consistency of lyrical imagery and ideas forever maintaining the intrigue and dreamy appeal of the writing.</p>
            <p>Given the shorter length of most mainstream tracks, it’s always an impressive pleasure when a true master of the craft returns to embrace listeners with a purposeful, intentional groove, story, and level of substance. In my view, If I Only Knew delivers precisely the warmth and escapism expected from that fine balancing of qualities.</p>
          </ListGroup.Item>
          </Col>
 
        </Row>
      </ListGroup>
    </Container>
  )
}

export default About;