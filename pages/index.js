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
            <h1>Hi! Im Dylan Greene,</h1>
           <p>and this is my portfolio of all the hard work I have done.</p>
          </Col>
          <Col md={4} className="text-center">
            <img src="/profile.png" alt="Jeffrey Dylan Greene" className="img-fluid profile-img" />
          </Col> <Button variant="primary" href="/about">Learn More About Me</Button>
        </Row>
      </Container>
      <Footer />
      
    </>
  );
}