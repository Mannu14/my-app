import { useState,useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';
import Loading from '../components/Loading';

export default function ForCartview() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    if(projects){
        setLoading(false);
      }
  });
  if(loading){
    return <div style={{
      width: '100%',
      height: '300px',
      textAlign: 'center',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    }}><Loading/></div>
  }
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
