import { useEffect } from 'react';
import { useRouter } from 'next/router';
import projects from '../../data/projectsModel'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image'; 

function ProjectPage({ project }) {


  if (!project) {
    return <div>Project not found</div>;
  }

  // Helper function to render a single section
  const renderSection = (section, index) => {
    if (section.type === "image") {
      // Use the Next.js Image component for image sections
      return (
        <div key={index} style={{ flex: 1 }}>
          <Image
            src={section.src}
            alt=""
            layout="responsive"
            width={700} // Adjust based on your design
            height={400} // Adjust based on your design
          />
        </div>
      );
    } else if (section.type === "text") {
      return <p key={index} style={{ flex: 1 }} className="project-description-text">{section.content}</p>;
    }
    return null;
  };
  
  const renderSectionPair = (sectionA, sectionB, index) => {
    const isEven = index % 4 === 0;
    const firstSection = isEven ? sectionA : sectionB;
    const secondSection = isEven ? sectionB : sectionA;
  
    return (
      <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '20px' }}>
        {renderSection(firstSection, index)}
        <hr />
        {renderSection(secondSection, index + 1)}
      </div>
    );
  };
  
  const renderSectionsInPairs = () => {
    const sectionPairs = [];
    for (let i = 0; i < project.details.length; i += 2) {
      sectionPairs.push(renderSectionPair(project.details[i], project.details[i + 1], i));
    }
    return sectionPairs;
  };
  
  

  return (
    <>
      <Header />
      <div className="container">
        <h1 className='head-title'>{project.title}</h1>
        {renderSectionsInPairs()}
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  // Find the project by ID
  const project = projects.find((p) => p.id === params.pid);

  // Pass project data to the page via props
  return { props: { project } };
}

// This function gets called at build time on server-side.
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on projects
  const paths = projects.map((project) => ({
    params: { pid: project.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default ProjectPage;