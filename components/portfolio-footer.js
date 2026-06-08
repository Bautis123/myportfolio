import { SITE } from './data.js';

class PortfolioFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <span>&copy; 2026 ${SITE.company} - Lusaka, Zambia</span>
        <a href="#hero">Back to top &uarr;</a>
      </footer>
    `;
  }
}

export default PortfolioFooter;
