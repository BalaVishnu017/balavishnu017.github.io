import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaGraduationCap, FaBrain, FaExternalLinkAlt, FaGlobe, FaCode, FaTrophy, FaCertificate } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

const LinkCard = ({ icon: Icon, title, subtitle, href, isPrimary = false }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`link-card ${isPrimary ? 'primary' : ''}`}>
      <div className="link-card-content">
        <div className="link-icon">
          <Icon size={20} />
        </div>
        <div className="link-text">
          <span className="link-title">{title}</span>
          <span className="link-subtitle">{subtitle}</span>
        </div>
      </div>
      <ChevronRight className="link-arrow" size={20} />
    </a>
  );
};

function App() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container">
        {/* Profile Header */}
        <div className="profile-hub">
          <div className="avatar-wrapper">
            <div className="avatar-ring">
              <div className="avatar-inner">
                {/* Using GitHub Avatar temporarily as requested */}
                <img src="https://avatars.githubusercontent.com/u/115676280?v=4" alt="Bala Vishnu" />
              </div>
            </div>
            <div className="status-badge">
              <span className="pulse-dot"></span>
              Available for Hire
            </div>
          </div>
          <h1>Dontha Bala Vishnu</h1>
          <p>Full-Stack Developer & AI Engineer. Architecting scalable systems and intelligent applications.</p>
        </div>

        {/* Links Funnel */}
        <div className="links-container">
          
          {/* Primary Call to Action */}
          <LinkCard 
            icon={FaGlobe} 
            title="View Full Engineering Portfolio" 
            subtitle="My case studies, resume, and skills." 
            href="https://balavishnu017.vercel.app" 
            isPrimary={true}
          />

          <div className="section-label">Connect & Professional</div>
          
          <LinkCard 
            icon={FaLinkedin} 
            title="LinkedIn" 
            subtitle="Let's connect professionally" 
            href="https://www.linkedin.com/in/balavishnuvardhan/" 
          />
          <LinkCard 
            icon={FaGithub} 
            title="GitHub" 
            subtitle="Explore my open source repositories" 
            href="https://github.com/BalaVishnu017" 
          />
          <LinkCard 
            icon={FaEnvelope} 
            title="Email Me" 
            subtitle="balavishnu017@gmail.com" 
            href="mailto:balavishnu017@gmail.com" 
          />

          <div className="section-label">Featured Case Studies</div>

          <LinkCard 
            icon={FaBriefcase} 
            title="Smart Placement System" 
            subtitle="Full-Stack Node/React Architecture" 
            href="https://github.com/BalaVishnu017/smart-placement-management-system" 
          />
          <LinkCard 
            icon={FaBrain} 
            title="InfraVision AI" 
            subtitle="Computer Vision Pothole Detection" 
            href="https://github.com/BalaVishnu017/Infravision-AI---Pothole-detection-and-automated-reporting-system" 
          />
          <LinkCard 
            icon={FaGlobe} 
            title="Weather System" 
            subtitle="Predictive Planning via API Integration" 
            href="https://github.com/BalaVishnu017/Weather-Based-Event-Planning-System" 
          />

          <div className="section-label">Coding Profiles</div>
          
          <LinkCard 
            icon={FaCode} 
            title="LeetCode" 
            subtitle="Problem Solving & DSA" 
            href="https://leetcode.com/u/BalaVishnu017/" 
          />
          <LinkCard 
            icon={FaTrophy} 
            title="HackerRank" 
            subtitle="Algorithms & Data Structures" 
            href="#" 
          />

          <div className="section-label">Verified Certifications</div>
          
          <LinkCard 
            icon={FaCertificate} 
            title="Full Stack Web Development" 
            subtitle="View Credential" 
            href="#" 
          />
          <LinkCard 
            icon={FaCertificate} 
            title="Machine Learning & AI" 
            subtitle="View Credential" 
            href="#" 
          />

        </div>

        <div className="footer">
          &copy; {new Date().getFullYear()} Dontha Bala Vishnu. Built with React & Vite.
        </div>
      </div>
    </>
  );
}

export default App;
