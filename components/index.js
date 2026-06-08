import PortfolioNav from './portfolio-nav.js';
import HeroSection from './hero-section.js';
import AboutSection from './about-section.js';
import SkillsGrid from './skills-grid.js';
import ProjectsGrid from './projects-grid.js';
import ContactSection from './contact-section.js';
import PortfolioFooter from './portfolio-footer.js';
import { SITE } from './data.js';

document.title = `${SITE.title} - Full-Stack Developer`;

customElements.define('portfolio-nav', PortfolioNav);
customElements.define('hero-section', HeroSection);
customElements.define('about-section', AboutSection);
customElements.define('skills-grid', SkillsGrid);
customElements.define('projects-grid', ProjectsGrid);
customElements.define('contact-section', ContactSection);
customElements.define('portfolio-footer', PortfolioFooter);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
