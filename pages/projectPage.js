// pages/project/[projectId].js



import { useRouter } from 'next/router';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

// Mock project data for demonstration purposes
// In a real scenario, you'd fetch this data based on the projectId from the URL
const projectDetails = {
    id: 1,
    title: 'Project 1',
    sections: [
        {
            imageUrl: '/path/to/image1.jpg',
            text: 'This is a description for section 1 of Project 1.',
        },
        {
            imageUrl: '/path/to/image2.jpg',
            text: 'This is a description for section 2 of Project 1.',
        },
        // Add more sections as needed
    ],
    projectLink: 'http://example.com/project1', // Actual project URL
};

const ProjectPage = () => {
    const router = useRouter();
    const { projectId } = router.query; // You can use this to fetch project details

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <Button href={projectDetails.projectLink} target="_blank">View Live Project</Button>
                </Col>
            </Row>
            
            {projectDetails.sections.map((section, index) => (
                <Row key={index} className={index % 2 === 0 ? 'flex-row-reverse' : ''}>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <Image src={section.imageUrl} fluid />
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <p>{section.text}</p>
                    </Col>
                </Row>
            ))}

            <Row className="my-4">
                <Col>
                    <Button href={projectDetails.projectLink} target="_blank">View Live Project</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectPage;