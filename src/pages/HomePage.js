import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Skills } from '../components/skills';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-eyebrow">Software Engineer</div>
        <h1 className="hero-name">
          Audrey<br /><em>Flanders</em>
        </h1>
        <p className="hero-tagline">
          Full-stack engineer with a passion for building
          systems that are thoughtful, reliable, and well-designed.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => navigate('/projects')}>
            View Projects
          </button>
          <a
            className="btn-ghost"
            href="https://github.com/aflanders7"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="btn-ghost"
            href="https://www.linkedin.com/in/audreyflanders/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="hero-meta">
          <div className="hero-stat">
            <span className="hero-stat-num">2</span>
            <span className="hero-stat-label">Degrees</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">4.0</span>
            <span className="hero-stat-label">CS GPA</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section">
        <div className="section-label">Background</div>
        <div className="about-grid">
          <div className="about-body">
            <p>
              I'm a software engineer with dual degrees in
              <strong> Computer Science</strong> (Oregon State, 4.0) and 
              <strong> Biology</strong> (Georgia Tech, 3.92). I bring an
              analytical, research-oriented mindset to engineering work.
            </p>
            <p>
              My experience spans full-stack development, data engineering, and
              customer solutions. From building ETL pipelines and APIs at
              PACCAR with AWS, Snowflake, and Airflow, to shipping
              full-stack features at Asure Software
              using C#/.NET, JavaScript, and Azure SQL.
            </p>
            <p>
              Outside engineering I enjoy running, sewing, and
              trying new recipies.
            </p>
          </div>
          <div className="about-right">
            <div className="about-card">
              <div className="about-card-label">Current Role</div>
              <div className="about-card-value">Software Engineer · Asure Software</div>
            </div>
            <div className="about-card">
              <div className="about-card-label">Education</div>
              <div className="about-card-value">
                B.S. Computer Science, Oregon State University<br />
                B.S. Biology, Georgia Institute of Technology
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-label">Contact</div>
              <div className="about-card-value">audrey.flanders117@gmail.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="section-label">Experience</div>
        <div className="exp-list">
          <div className="exp-item">
            <div className="exp-date">Mar 2025 – Present</div>
            <div>
              <div className="exp-role">Software Engineer</div>
              <div className="exp-company">Asure Software (formerly Lathem Time)</div>
              <ul className="exp-desc">
                <li>Full-stack MVC development with C#/.NET, JavaScript, and Azure SQL</li>
                <li>Built and extended backend routes, controllers, and application logic</li>
                <li>Partnered with customers to gather requirements and deliver customized solutions</li>
                <li>Agile scrum team — sprint planning, stand-ups, and code reviews</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-date">Jun – Sep 2024</div>
            <div>
              <div className="exp-role">Data Engineer Intern</div>
              <div className="exp-company">PACCAR</div>
              <ul className="exp-desc">
                <li>Designed an API microservice automating comparisons across 400+ databases</li>
                <li>Built ETL pipelines with AWS, S3, Airflow, Snowflake, Python, and SQL</li>
                <li>Presented findings to senior management and stakeholders</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-date">Sep – Dec 2024</div>
            <div>
              <div className="exp-role">Capstone Project</div>
              <div className="exp-company">Levrum Data Technologies</div>
              <ul className="exp-desc">
                <li>Django/React app using predictive modeling for first-responder resource allocation</li>
                <li>Time-series forecasting, geospatial modeling, and EMS call pattern analysis</li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-date">Jan – Mar 2023</div>
            <div>
              <div className="exp-role">Web Developer (Contract)</div>
              <div className="exp-company">WayFinder Data LLC</div>
              <ul className="exp-desc">
                <li>Next.js/TypeScript frontend for a project management analytics application</li>
                <li>Data tables and UI components for analysis and visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <div className="section-label">Technical Skills</div>
        <div className="skills-grid">
          {Skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-type">{skill.type}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;