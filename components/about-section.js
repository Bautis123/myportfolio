import { ABOUT_COLUMNS } from './data.js';

class AboutSection extends HTMLElement {
  connectedCallback() {
    const columns = ABOUT_COLUMNS.map((paragraphs, index) => `
      <div class="about-text ${index === 1 ? 'about-text--secondary' : ''}">
        ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      </div>
    `).join('');

    this.innerHTML = `<div class="about-grid">${columns}</div>`;
  }
}

export default AboutSection;
