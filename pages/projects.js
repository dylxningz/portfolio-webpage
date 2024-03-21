import Head from 'next/head';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projects from '../models/projectModel'; // Adjust the path as necessary

function Project() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Header />
      <Container className="mt-5">
        <Row xs={1} md={2} lg={4} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.type} Project</Card.Text>
                  <Card.Text>Language: {project.language}</Card.Text>
                  <Button variant="primary" href={project.link}>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Project;