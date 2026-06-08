import { HERO, PROFILE_ROWS, SITE } from './data.js';

class HeroSection extends HTMLElement {
  connectedCallback() {
    const profileRows = PROFILE_ROWS.map((row) => `
      <div class="info-row">
        <span class="info-key">${row.key}</span>
        <span class="info-val ${row.tone || ''}">${row.value}</span>
      </div>
    `).join('');

    this.innerHTML = `
      <section id="hero">
        <div>
          <div class="hero-eyebrow">
            <span class="dot"></span>
            ${HERO.eyebrow}
          </div>
          <h1>${HERO.heading}</h1>
          <p class="hero-sub">${HERO.summary}</p>
          <div class="hero-actions">
            <a href="${HERO.primaryAction.href}" class="btn btn-dark">${HERO.primaryAction.label} &rarr;</a>
            <a href="${HERO.secondaryAction.href}" class="btn btn-outline">${HERO.secondaryAction.label}</a>
          </div>
        </div>

        <aside class="hero-card reveal" aria-label="Profile summary">
          <img src="${SITE.photo}" alt="${SITE.fullName}" class="hero-photo">
          <div class="hero-card-header">
            <div>
              <div class="avatar-name">${SITE.fullName}</div>
              <div class="avatar-role">Full-Stack Developer &middot; ${SITE.location}</div>
            </div>
          </div>
          <div class="hero-card-body">${profileRows}</div>
        </aside>
      </section>
    `;
  }
}

export default HeroSection;
