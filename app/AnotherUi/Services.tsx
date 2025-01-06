"use client";
import React from "react";
import { Code2, BookOpen, Briefcase } from "lucide-react";
import { Star, StarHalf } from "lucide-react";
import { ComponentType } from 'react';

type ServiceCardProps = {
  icon: ComponentType<React.SVGProps<SVGSVGElement>>; // Specifies that the icon is a React component that accepts SVG props
  title: string;
  description: string;
  link?: string;
  images?: string;
};

const ServiceCard = ({ icon: Icon, title, description, link, images }: { icon: React.ComponentType<any>; title: string; description: string; link?: string, images?: string }) => {
  // Determine the star fill logic based on the title
  let filledStars = 0;
  if (title === "Full Stack Developer") {
    filledStars = 4.5;
  } else if (title === "DSA Expertise & Competitive Programming") {
    filledStars = 4;
  } else if (title === "Internship at Sublimity Software Pvt Ltd") {
    filledStars = 5;
  }

  const getStarStyles = (index: number) => {
    if (index + 1 <= Math.floor(filledStars)) {
      // Fully filled star (gold)
      return { color:'gold',fill: "gold" };
    } else if (index + 1 === Math.ceil(filledStars) && filledStars % 1 !== 0) {
      // Half-filled star (gold for half, gray for the rest)
      return {
        color:'gold',
        fill: "gold",
        background: "linear-gradient(to right, gold 50%, gray 50%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };
    } else {
      // Empty star (gray)
      return { color:'gold',fill: "gray" };
    }
  };

  return (
    <div className="service-card">
      <div className="icon-container">
        {!images ?
          <Icon className="icon" /> :
          <img
            src={`/Images/${images}`} // Ensure favicon.ico is in the public folder
            alt='Project Image'
            style={{ width: '100%', borderRadius: '8px' }}
          />
        }
      </div>
      <div style={{ display: 'flex' }}>
        {[...Array(5)].map((_, index) => {
          if (index + 1 <= Math.floor(filledStars)) {
            // Display a full star
            return <Star key={index} style={{ fontSize: "30px", ...getStarStyles(index) }} />;
          } else if (index + 1 === Math.ceil(filledStars) && filledStars % 1 !== 0) {
            // Display a half star
            return <StarHalf key={index} style={{ fontSize: "30px", ...getStarStyles(index) }} />;
          } else {
            // Display an empty star
            return <Star key={index} style={{ fontSize: "30px", fill: "gray" }} />;
          }
        })}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {link && (
        <div className="service-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title === "DSA Expertise & Competitive Programming" ? "GeeksforGeeks" : "LinkedIn"}
          </a>
        </div>
      )}
      <style jsx>{`
        .service-card {
          padding: 24px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          transition: background-color 0.3s ease;
        }
        .service-card:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .icon-container {
          width: 48px;
          height: 48px;
          background-color: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .icon {
          width: 24px;
          height: 24px;
          color: #6b46c1;
        }
        .service-link {
          margin-top: 12px;
        }
        .service-link a {
          color: #6b46c1;
          text-decoration: none;
          font-size: 16px;
        }
        .service-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .service-description {
          color: #b0b0b0;
        }
      `}</style>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Proficient in React.js, Node.js, Next.js, MongoDB, Express.js, HTML, CSS, and JavaScript.",
    },
    {
      icon: BookOpen,
      title: "DSA Expertise & Competitive Programming",
      description: "Solved 200+ DSA problems on GeeksforGeeks using Python and 190+ CP questions on CodeChef.",
      link: "https://www.geeksforgeeks.org/user/rjtiger10/",
      images: "gfg-gg-logo.svg",
    },
    {
      icon: Briefcase,
      title: "Internship at Sublimity Software Pvt Ltd",
      description: "Worked on full-stack projects, enhancing business applications with modern web technologies.",
      link: "https://www.linkedin.com/in/manish-yadav-sikar/",
      images: "SublimitySoftwaresPrivateLimited.jpg",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Here&apos;s a brief overview of my skills and experiences.
          </p>
        </div>
        {/* College Info Section */}
        <div className="college-info">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://iiitranchi.ac.in/images/logo.png" alt="College Logo" className="college-logo" />
            <div style={{ marginLeft: '15px', textAlign: 'left' }}>
              <h3 className="college-name">Indian Institute of Information Technology Ranchi</h3>
              <p className="branch-name">Branch: Electronics and Communication Engineering(ECE)</p>
              <p className="cgpa">CGPA: 7.91/10</p>
            </div>
          </div>
          <p className="college-intro">
            I am a dedicated and passionate student in the electronics and communication engineering branch at IIIT Ranchi. I have a strong foundation in full-stack web development and am actively involved in competitive programming.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .services-section {
          padding: 80px 0;
          background-color: #1a1a1a;
          color: #fff;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .text-center {
          text-align: center;
          margin-bottom: 64px;
        }
        .section-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .section-description {
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
          .college-info {
          text-align: center;
          margin-bottom: 40px;
        }
        .college-logo {
          border-radius: 50%;
          width:100px;
          height:100px;
          margin-bottom: 20px;
        }
        .college-name {
          font-size: 24px;
          font-weight: bold;
        }
        .branch-name {
          font-size: 18px;
          margin-bottom: 8px;
        }
        .cgpa {
          font-size: 18px;
          margin-bottom: 12px;
        }
        .college-intro {
          color: #b0b0b0;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default Services;
