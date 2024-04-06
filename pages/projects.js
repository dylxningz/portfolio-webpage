import Link from 'next/link';
import projects from '../data/projectsModel';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ProjectsPage() {
  const router = useRouter();
  const { tag } = router.query; // Access the "tag" query parameter

  // Filter projects based on the "tag" query parameter, if present, in a case-insensitive manner
  const filteredProjects = tag
    ? projects.filter(project => project.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase()))
    : projects;

  return (
    <>
      <Header />
      <div className="container">
        <h1 className='head-title'>{tag ? `${tag.charAt(0).toUpperCase() + tag.slice(1)} Projects` : 'Projects'}</h1>
        <div className="row">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="card-subtle"> <strong>Type:</strong> {project.type}</p>
                    <p className="card-subtle"> <strong>Tags:</strong> {project.tags.join(', ')}</p>
                    <div className="card-footer">
                    <a href={`/project/${project.id}`} className="btn btn-primary card-btn">Github</a>
                    <a href={`/project/${project.id}`} className="btn btn-primary card-btn">View</a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No projects to display.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}