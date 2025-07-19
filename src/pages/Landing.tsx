import { useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


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
              <h1 className="font-edwardian">Lee</h1>
              <img src="/images/Lee-new.jpg" alt="Lee" className="bio-image" />
              Our founder, Lee, established the business in [2005]. For customers wanting realism and black and grey, Lee cannot be recommended enough. Lee specializes in everything from writing and signatures, to full sleeves that pop, and lifelike portraits. He’s able to help with any and all piercing or tattoo questions, and is our residential dermal piercer! Be sure to keep an eye on his work!
              <p className="bio-instalink">
              <a
              href="https://www.instagram.com/attractivetattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              aria-label="Instagram"
            >
            <FontAwesomeIcon icon={faInstagram} size="2xs" style={{ fontSize: '40px', color: '#E1306C' }} />
            <div className="bio-instalink-text">
              Instagram
            </div>
            </a>
            </p>
            
            </p>

            <p className="bio-paragraph">
              <h1 className="font-edwardian">Raquel</h1>
              <img src="/images/raquel-new.jpg" alt="Raquel" className="bio-image" />
              Here since 2015, Raquel remains our go-to artist for large full color work. Raquel excels in all tattoos involving nature, animals, and myth. She truly has a passion for neo-traditional and Japanese traditional, while able to replicate any styles you can bring in. She is always ready to start more manga, anime, and cartoon tattoos, and has plenty of fun panels of flash to choose from!
              <p className="bio-instalink">
              <a
              href="https://www.instagram.com/normalpeoplescareme_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="Instagram"
            >
            <FontAwesomeIcon icon={faInstagram} size="2xs" style={{ fontSize: '40px', color: '#E1306C' }} />
            <div className="bio-instalink-text">
              Instagram
            </div>
            </a>
            </p>
            
            </p>

             <p className="bio-paragraph">
              <h1 className="font-edwardian">Austin</h1>
              <img src="/images/austin-new.jpg" alt="Austin" className="bio-image" />
              With us since 2021, Austin always keeps his flash fresh. His tattoo designs range from video games, pop culture, all the way to yokai and snarling monsters! Character design and creative composition are his forte, so wether you bring in some fun custom ideas or have a favorite character, Austin is ready to go!
              <p className="bio-instalink">
              <a
              href="https://www.instagram.com/w1tchbolt/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="Instagram"
            >
            <FontAwesomeIcon icon={faInstagram} size="2xs" style={{ fontSize: '40px', color: '#E1306C' }} />
            <div className="bio-instalink-text">
              Instagram
            </div>
            </a>
            </p>
            
            </p>

            <p className="bio-paragraph">
              <h1 className="font-edwardian">Johnny</h1>
              <img src="/images/Johnny.jpg" alt="Johnny Scan" className="bio-image" />
              Johnny Scandariato invites you to showcase your work to his tattoo artists, who specialize in realism, full sleeves, lifelike portraits, and various styles including manga, anime, and cartoon tattoos.             <p className="bio-instalink">
              <a
              href="https://www.instagram.com/scands3/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              aria-label="Instagram"
            >
            <FontAwesomeIcon icon={faInstagram} size="2xs" style={{ fontSize: '40px', color: '#E1306C' }} />
            <div className="bio-instalink-text">
              Instagram
            </div>
            </a>
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