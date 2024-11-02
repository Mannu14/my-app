// components/ProjectCard.js
"use client";
import { useState } from 'react';
import { LinkPreviewDemo } from './LinkPreviewDemo';

export default function ProjectCard({ title, description, techTechStack, details, url, Name }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="project-card">
            <h3>{title} <LinkPreviewDemo url={url} Name={Name} /></h3>
            <p>{description}
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? '' : 'Show More'}
                </button>
            </p>
            {showMore &&
                <p className='details'>
                    {details?.map((detail, index) => {
                        const parts = detail.split(':');
                        const label = parts[0].trim();
                        const description = parts.slice(1).join(':').trim();
                        return (
                            <p key={index}>
                                <span style={{ fontSize: '0.9rem', color: '#b0cee2' }}>
                                    – {label}:
                                </span>
                                {description && <span>  {description}</span>}
                            </p>
                        );
                    })}
                    <p>
                        {techTechStack?.map((TechStack, index) => {
                            const parts = TechStack.split(':');
                            const label = parts[0].trim();
                            const description = parts.slice(1).join(':').trim();
                            return (
                                <p key={index}>
                                    <span style={{ fontSize: '0.9rem', color: '#b0cee2' }}>
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
                </p>}
        </div >
    );
}
