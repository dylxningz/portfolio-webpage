import Head from 'next/head';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import projects from '../../models/projectModel'; // Adjust the path as necessary

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container className="mt-5">
        <h1 className="mb-4">Projects</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.type} Project</Card.Text>
                  <Card.Text>Language: {project.language}</Card.Text>
                  <Link href={`/projects/${project.id}`} passHref>
                    <Button variant="primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProjectsPage;