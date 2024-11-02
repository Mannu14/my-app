import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';

export default function ForCartview() {
  return (
    <div>
      <main id="projects" className="project-section">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techTechStack={project.techTechStack}
            details={project.details}
            url={project.url}
            Name={project.Name}
          />
        ))}
      </main>
    </div>
  );
}
