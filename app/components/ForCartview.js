import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';

export default function ForCartview() {
  return (
    <div>
      <main id="projects" className="project-section">
        <h1>Personal Projects & Ventures</h1>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techTechStack={project.techTechStack}
            technologies={project.technologies}
            keyPoints={project.keyPoints}
            details={project.details}
            url={project.url}
            GithubUrl={project.Github}
            YoutubeUrl={project.Youtube}
            websiteImage={project.websiteImage}
            RandomImages={project.RandomImages}
            Name={project.Name}
          />
        ))}
      </main>
    </div>
  );
}
