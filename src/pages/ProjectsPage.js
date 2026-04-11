import React, { useState } from 'react';
import { Projects } from '../components/projects';

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  const placeholders = {
    '01': '📊', '02': '🗂️', '03': '🎮', '04': '📖',
    '05': '💰', '06': '🏗️', '07': '🧠', '08': '⚙️',
  };

  return (
    <div className="project-item">
      <div className="project-img-wrap">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-placeholder">
            {placeholders[project.num]}
          </div>
        )}
      </div>
      <div className="project-body">
        <div>
          <div className="project-header">
            <div>
              <div className="project-title">{project.title}</div>
              <div className="project-tech">{project.technology}</div>
            </div>
            <div className="project-num">{project.num}</div>
          </div>
          <p className="project-desc">{project.description}</p>
        </div>
        <div className="project-links">
        {project.github && (
          <a
            className="proj-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Code ↗
          </a>
        )}
          {project.demo && (
            <a
              className="proj-link demo"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <>
      <div className="projects-intro">
        <div className="section-label">Work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          A collection spanning full-stack applications, data engineering, and
          ML-driven tools.
        </p>
      </div>

      <div className="projects-grid">
        {Projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>

      <div style={{ height: '5rem' }} />
    </>
  );
}

export default ProjectsPage;