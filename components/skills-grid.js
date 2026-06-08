import { SKILL_BLOCKS } from './data.js';

class SkillsGrid extends HTMLElement {
  connectedCallback() {
    const blocks = SKILL_BLOCKS.map((block) => `
      <div class="skill-block">
        <div class="skill-block-title">${block.title}</div>
        <div class="skill-pills">
          ${block.items.map((item) => `<span class="pill">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');

    this.classList.add('skills-wrap');
    this.innerHTML = blocks;
  }
}

export default SkillsGrid;
