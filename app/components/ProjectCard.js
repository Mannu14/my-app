"use client";
import { useState, useEffect } from 'react';
import { LinkPreviewDemo } from './LinkPreviewDemo';
import { Github, Youtube } from 'lucide-react';
import Link from 'next/link';

const colorMap = {
  React: { bgColor: "#61dafb", textColor: "#000000" },
  Redux: { bgColor: "#764abc", textColor: "#ffffff" },
  CSS: { bgColor: "#2965f1", textColor: "#ffffff" },
  "Node.js": { bgColor: "#68a063", textColor: "#ffffff" },
  "Express.js": { bgColor: "#303030", textColor: "#ffffff" },
  MongoDB: { bgColor: "#4db33d", textColor: "#ffffff" },
  "Next.js": { bgColor: "#000000", textColor: "#ffffff" },
  "Chart.js": { bgColor: "#ffa500", textColor: "#000000" },
  // Add more technologies as needed
};

// Fallback colors for unknown technologies
const defaultColor = { bgColor: "rgb(160 155 211)", textColor: "#000000" };

export default function ProjectCard({
  title,
  description,
  techTechStack,
  technologies,
  keyPoints,
  details,
  url,
  GithubUrl,
  YoutubeUrl,
  websiteImage,
  RandomImages,
  Name
}) {
  const [showMore, setShowMore] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if client-side

  const techArray = technologies.split(",").map((tech) => tech.trim());
  const keyPointsArray = keyPoints.split(",").map((tech) => tech.trim());

  useEffect(() => {
    setIsClient(true); // Ensure it's running client-side
  }, []);

  // Ensure it's running client-side to avoid hydration errors
  if (!isClient) {
    return null; // Or a loading spinner for server-side rendering
  }

  return (
    <div className="project-card">
      <div className='project-card-div'>
        <div className='project-card-div-img' style={{ width: '50%' }}>
          <img src={`/Images/${websiteImage}`} style={{ width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }} alt='logo' />
        </div>
        <h3>{title}
          <div style={{ display: "flex", flexWrap: "wrap", margin: '20px 0' }}>
            {techArray.map((tech) => {
              const { bgColor, textColor } = colorMap[tech] || defaultColor;
              return (
                <span
                  key={tech}
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    padding: "0.25rem 0.75rem",
                    borderRadius: "50px",
                    margin: '5px',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    height: '27px',
                  }}
                >
                  {tech}
                </span>
              );
            })}
          </div>

          <span>Key points:</span>
          <div style={{ display: "flex", flexWrap: "wrap", margin: '20px 0' }}>
            {keyPointsArray.map((tech) => {
              const { bgColor, textColor } = colorMap[tech] || defaultColor;
              return (
                <span
                  key={tech}
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    padding: "0.25rem 0.75rem",
                    borderRadius: "50px",
                    margin: '5px',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    height: '27px',
                  }}
                >
                  {tech}
                </span>
              );
            })}
          </div>
          <span style={{color:'rgb(160 155 211)',fontSize:'15px'}}>The source code for this project is stored in a private GitHub repository.</span>
          <div className='project-card-buttons' style={{marginTop:'10px'}}>
            <div className='project-card-button'>
              <LinkPreviewDemo url={url} Name={Name} />
            </div>
            <div className='project-card-button project-card-button-2'>
              <Link href={GithubUrl} passHref>
                <Github size={22} /> Source
              </Link>
            </div>
            <div className='project-card-button project-card-button-2'>
              <Link href={YoutubeUrl} passHref>
                <Youtube size={30} color="#FF0000" /> Video
              </Link>
            </div>
          </div>
        </h3>
      </div>
      <p>{description}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </p>

      {showMore && (
        <p className='details'>
          {details?.map((detail, index) => {
            const parts = detail.split(':');
            const label = parts[0].trim();
            const description = parts.slice(1).join(':').trim();
            return (
              <p key={index} className='description-img'>
                <span style={{ width: '50%' }}>
                  <span style={{ fontSize: '0.9rem', color: '#b0cee2' }}>
                    – {label}:
                  </span>
                  <br />
                  <span style={{ display: 'flex', padding: '5px',color:'#c384ff' }}>►
                    {description && <span>{description}</span>}
                  </span>
                </span>
                {RandomImages[index] && (
                  <img
                    src={`/projects/${RandomImages[index]}`}
                    alt={`Image for ${label}`}
                    style={{ width: "30%", minHeight: '300px', borderRadius: "5px", objectFit: 'cover', margin: '30px 0' }}
                  />
                )}
              </p>
            );
          })}

          <p style={{ margin: '0' }}>
            {techTechStack?.map((TechStack, index) => {
              const parts = TechStack.split(':');
              const label = parts[0].trim();
              const description = parts.slice(1).join(':').trim();
              return (
                <p key={index}>
                  <span style={{ fontSize: '0.9rem', color: 'rgb(11 157 255)' }}>
                    – {label}:
                  </span>
                  {description && <span className='techTechStack'>  {description}</span>}
                </p>
              );
            })}
          </p>

          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : ''}
          </button>
        </p>
      )}
    </div>
  );
}
