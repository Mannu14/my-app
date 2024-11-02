"use client";
import projects from '../data/projectsData';
import { LinkPreviewDemo } from './LinkPreviewDemo';
export default function MainFooter() {
  const firstSixProjects = projects.slice(0, 6);
  const remainingProjects = projects.slice(6, projects.length);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Projects</h2>
          {firstSixProjects.map((project, index) => (
            <div key={index}>
              <LinkPreviewDemo url={project.url} Name={project.title} />
            </div>
          ))}
        </div>
        <div className="footer-section">
          <h2>Projects</h2>
          {remainingProjects.map((project, index) => (
            <div key={index}>
              <LinkPreviewDemo url={project.url} Name={project.title} />
            </div>
          ))}
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: +1 (234) 567-890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>

      <style jsx>{`
          .footer {
            background-color: #0a0909;
            color: #e0e0e0;
            padding: 40px 0;
            text-align: center;
          }
          .footer-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          .footer-section {
            flex: 1;
            min-width: 200px;
            margin: 10px 0;
          }
          .footer-section h2 {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: #fff;
          }
          .footer-section p {
            margin: 5px 0;
            color: #e0e0e0;
            cursor: pointer;
            transition: color 0.3s;
            font-size: 12px;
          }
          .footer-section p:hover {
            color: #50b3a2;
          }
          .footer-bottom {
            border-top: 1px solid #333;
            padding-top: 20px;
            margin-top: 20px;
          }
        `}</style>
    </footer>
  );
}
