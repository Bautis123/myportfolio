import { PROJECTS } from './data.js';

class ProjectsGrid extends HTMLElement {
  connectedCallback() {
    const cards = PROJECTS.map((project) => `
      <article class="project-card ${project.featured ? 'featured' : ''} reveal">
        <div class="project-top">
          <div class="p-icon ${project.image ? 'p-icon--image' : ''}">
            ${project.image ? `<img src="${project.image}" alt="${project.name} logo">` : project.icon}
          </div>
          <span class="p-badge">${project.badge}</span>
        </div>
        <div class="p-name">${project.name}</div>
        <div class="p-desc">${project.description}</div>
        <div class="p-stack">
          ${project.stack.map((tech) => `<span class="p-tag">${tech}</span>`).join('')}
        </div>
        ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="p-link">View ${project.link.includes('github.com') ? 'on GitHub' : 'live'} &rarr;</a>` : ''}
      </article>
    `).join('');

    this.classList.add('projects-grid');
    this.innerHTML = cards;
  }
}

export default ProjectsGrid;
