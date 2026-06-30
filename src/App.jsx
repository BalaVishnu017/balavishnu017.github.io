import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Globe, 
  Code2, 
  Cpu, 
  Briefcase, 
  Award, 
  Database,
  ChevronRight,
  Mail,
  Copy,
  CheckCircle2,
  Terminal,
  Cloud,
  FileCode
} from 'lucide-react';

const Card = ({ icon: Icon, title, subtitle, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="card">
      <div className="card-icon">
        <Icon size={20} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      <ChevronRight size={18} className="card-arrow" />
    </a>
  );
};

function App() {
  const [copied, setCopied] = useState(false);
  const email = 'balavishnu017@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container">
      <header className="profile-header">
        <div className="avatar">
          {/* We will use initials until photo is available */}
          BV
        </div>
        <h1 className="profile-name">Bala Vishnu Vardhan Goud</h1>
        <p className="profile-bio">
          Full-Stack Developer & AI Engineer | Building Scalable & Intelligent Systems
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">
          <Globe size={18} /> Connect with me
        </h2>
        <div className="card-list">
          <Card 
            icon={Linkedin} 
            title="LinkedIn Profile" 
            subtitle="Let's connect professionally" 
            href="https://www.linkedin.com/in/balavishnuvardhan/" 
          />
          <Card 
            icon={Github} 
            title="GitHub Profile" 
            subtitle="Explore my open source projects" 
            href="https://github.com/BalaVishnu017" 
          />
          <Card 
            icon={Terminal} 
            title="Portfolio Website" 
            subtitle="View my full resume and projects" 
            href="#" 
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          <Code2 size={18} /> Featured Projects
        </h2>
        <div className="card-list">
          <Card 
            icon={Cloud} 
            title="Weather-Based Event Planning" 
            subtitle="React.js, Node.js, Weather APIs" 
            href="https://github.com/BalaVishnu017" 
          />
          <Card 
            icon={Cpu} 
            title="InfraVision AI" 
            subtitle="OpenCV, Computer Vision, Pothole Detection" 
            href="https://github.com/BalaVishnu017" 
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          <FileCode size={18} /> Coding Profiles
        </h2>
        <div className="card-list">
          <Card 
            icon={Code2} 
            title="LeetCode" 
            subtitle="Data Structures & Algorithms" 
            href="#" 
          />
          <Card 
            icon={Code2} 
            title="CodeChef" 
            subtitle="Competitive Programming" 
            href="#" 
          />
          <Card 
            icon={Code2} 
            title="HackerRank" 
            subtitle="Problem Solving & SQL" 
            href="#" 
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          <Briefcase size={18} /> Work Experience
        </h2>
        <div className="card-list">
          <Card 
            icon={Briefcase} 
            title="Marvel Geospatial Solutions" 
            subtitle="Software Development Intern • Jun 2023 - Nov 2023" 
            href="#" 
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          <Award size={18} /> Verified Certifications
        </h2>
        <div className="card-list">
          <Card 
            icon={Award} 
            title="Python Programming" 
            subtitle="Certification" 
            href="#" 
          />
          <Card 
            icon={Database} 
            title="Database Management Systems" 
            subtitle="Advanced Relational Models" 
            href="#" 
          />
          <Card 
            icon={Cpu} 
            title="AI/ML Virtual Internship" 
            subtitle="Artificial Intelligence Program" 
            href="#" 
          />
          <Card 
            icon={FileCode} 
            title="Node.js, Express.js and MongoDB" 
            subtitle="Backend Development" 
            href="#" 
          />
        </div>
      </section>

      <section className="section">
        <div className="contact-card">
          <div>
            <h3>Get In Touch</h3>
            <p>
              Have an interesting project, internship, or full-stack opportunity? 
              Let's connect and build together.
            </p>
          </div>
          
          <a href={`mailto:${email}`} className="btn-primary">
            <Mail size={18} /> Send an Email
          </a>
          
          <button onClick={copyEmail} className="btn-secondary">
            {copied ? (
              <><CheckCircle2 size={18} className="text-green-500" /> Copied to clipboard</>
            ) : (
              <><Copy size={18} /> Copy Email address</>
            )}
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>Designed by Bala Vishnu • &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
