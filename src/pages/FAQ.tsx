import { Container, ListGroup, Row, Col } from "react-bootstrap";

function FAQ() {
  return (
    <Container>
      <h1 className="text-center my-4 font-edwardian">Frequently Asked Questions</h1>
      <ListGroup className="" style={{ paddingBottom: '20px' }}>


        <Row>
          <Col  className="">
          <ListGroup.Item className="about-us-text">
            <h4>Helpful hints and tips</h4>

            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>What if I'm a butt plug?</summary>
                <span className="faq-answers">It's ok Nobodys perfect. Don't bring AI Generated Art or we'll kill you.</span>
            </details>
            <details className="flex-fill" style={{ marginBottom: '10px' }}>
            <summary>What if I've Never had a Tattoo before?</summary>
                <span className="faq-answers">It's going to hurt like a bastard so you better bring your mommy.</span>
            </details>
         </ListGroup.Item>
          </Col>
 
        </Row>
      </ListGroup>
    </Container>
  )
}

export default FAQ;