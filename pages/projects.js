import Link from 'next/link';
import projects from '../data/projectsModel';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Projects</h1>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <Link href={`/project/${project.id}`} legacyBehavior>
                    <a className="btn btn-primary">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}