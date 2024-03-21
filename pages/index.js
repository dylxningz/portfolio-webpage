import Head from 'next/head';
import Header from '../components/Header';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeffrey Dylan Greene's Portfolio</title>
        <meta name="description" content="Welcome to Jeffrey Dylan Greene's personal portfolio website." />
      </Head>


      <Header />
      <Container className="my-5 cont-main">
        <Row className="align-items-center">
          <Col md={8} className="welcome-message">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm Jeffrey Dylan Greene, a software developer with a passion for building impactful projects. Explore my work and get in touch!</p>
            <Button variant="primary" href="/about">Learn More About Me</Button>
          </Col>
          <Col md={4} className="text-center">
            <img src="/profile.png" alt="Jeffrey Dylan Greene" className="img-fluid profile-img" />
          </Col>
        </Row>
      </Container>
      <Footer />
      
    </>
  );
}