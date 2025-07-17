import { useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Landing() {
  const handleButtonClick = () => {
    window.open('/upcomingevents', '_blank');
    // go to events page
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      const response = await fetch('https://formspree.io/f/xrbgvday', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert('Subscription successful!');
        form.reset();
      } else {
        alert('Subscription failed. Please try again.');
      }
    }
  };

  const bioRef = useRef(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const mailingListRef = useRef(null);
  const videoSectionRef = useRef(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    paragraphRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    if (mailingListRef.current) {
      observer.observe(mailingListRef.current);
    }

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    videoRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (bioRef.current) {
        observer.unobserve(bioRef.current);
      }
      paragraphRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      if (mailingListRef.current) {
        observer.unobserve(mailingListRef.current);
      }
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
      videoRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" className="p-0">
          <div className="video-wrapper">
            <video className="landing-hero-video" autoPlay loop muted>
              <source src="/videos/Attractive-Movie-Background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
        <Col xs="12" className="landing-text-container">
          <h1 className="text-center landing-text font-edwardian">Attractive Tattoo</h1>
          <h3 className="text-center landing-text-two">Check Out Our Upcoming Event!</h3>
          <div className="d-flex justify-content-center">
            <button onClick={handleButtonClick} className="btn custom-button initial-load mt-3">Next Event</button>
          </div>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col md="8">
          <div className="d-flex flex-column bio-padding fade-in" ref={bioRef}>
            <h1 className="mt-5 custom-underline font-edwardian">Our Team</h1>
            <p className="bio-paragraph">
              <img src="/images/Lee.jpg" alt="Lee" className="bio-image" />
              Lee is the founders. He established the company in 2005. Wwith instruments instead of samples, feel instead of sterile perfection.
              <p className="bio-instalink">
              <a
              href="https://www.instagram.com/chickenthec/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="Instagram"
            >Instagram</a>
            </p>
            
            </p>

            <p className="bio-paragraph">
              <img src="/images/raquel.jpg" alt="Raquel" className="bio-image" />
              Raquel Raquel Raquel Raquel Raquel Raquel Raquel Maypo Deluxe is a band that manages
              to craft their sound with instruments instead of samples, Raquel of sterile perfection.
              <p className="bio-instalink">
              <a
              href="https://www.instagram.com/scands3/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="Instagram"
            >Instagram</a>
            </p>
            
            </p>

             <p className="bio-paragraph">
              <img src="/images/Austin.jpg" alt="Austin" className="bio-image" />
              Austin Austin Austin Austin Austin Austin Austin pler era, Maypo Deluxe i Austin Austin s a band that manages
              to craft their sound with instruments instead of samples, feel instead of sterile perfection.
              <p className="bio-instalink">
              <a
              href="https://www.instagram.com/monsterhigh/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="Instagram"
            >Instagram</a>
            </p>
            
            </p>

            <p className="bio-paragraph">
              <img src="/images/Johnny.jpg" alt="Johnny Scan" className="bio-image" />
              Johnny Scan is a Johnny scan is a Johnny Scan is a kid in a band that manages
              to craft their sound with instruments instead of samples, feel instead of sterile perfection.
              <p className="bio-instalink">
              <a
              href="https://www.instagram.com/scands3/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="Instagram"
            >Instagram</a>
            </p>
            
            </p>                       

          </div>
        </Col>
        <Col md="4" className="d-flex align-items-center justify-content-center">
          <img src="/images/Attractive-logo.png" alt="Bio Image" className="img-fluid img-padding-right" />
        </Col>
      </Row>
      <Row className="mt-5 fade-in" ref={videoSectionRef}>
        <Col>
          <div className="d-flex flex-column bio-padding">
            <h1 className="text-center mt-5 font-edwardian">Tattoos and Piercing</h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={6} className="d-flex justify-content-center fade-in" ref={(el: HTMLVideoElement | null) => (videoRefs.current[0] = el)}>

            <img src="/images/front-left.jpg" alt="landing-left-image" />

  
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center fade-in" ref={(el: HTMLVideoElement | null) => (videoRefs.current[1] = el)}>

            <img src="/images/front-right.jpg" alt="landing-right-image" />
            

        </Col>
        <div className="mt-5">
        </div>
      </Row>
      <Row className="mt-5 fade-in" ref={mailingListRef}>
        <Col xs="12">
          <h1 className="text-center newsletter-header font-edwardian">Mailing List</h1>
          <p className="text-center newsletter-extra">Subscribe for upcoming events, shows, releases, and more!</p>
          <Form ref={formRef} onSubmit={handleSubmit} className="newsletter-form">
            <Form.Group controlId="formEmail">
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Control type="text" name="location" placeholder="Enter your location" required />
            </Form.Group>
            <Button type="submit">Subscribe</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;