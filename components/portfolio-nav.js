import { NAV_LINKS, SITE } from './data.js';

class PortfolioNav extends HTMLElement {
  connectedCallback() {
    const links = NAV_LINKS.map((link) => `
      <li>
        <a href="${link.href}" class="${link.cta ? 'nav-cta' : ''}">${link.label}</a>
      </li>
    `).join('');

    this.innerHTML = `
      <nav aria-label="Primary navigation">
        <a href="#" class="nav-logo">
          <img src="${SITE.logo}" alt="${SITE.company} logo" class="nav-logo-mark">
          <span>${SITE.title}</span>
        </a>
        <ul class="nav-links">${links}</ul>
      </nav>
    `;
  }
}

export default PortfolioNav;
