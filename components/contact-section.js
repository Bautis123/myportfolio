import { CONTACT, SITE } from './data.js';

class ContactSection extends HTMLElement {
  connectedCallback() {
    const contactItems = CONTACT.items.map((item) => {
      const content = `
        <div class="c-icon">${item.icon}</div>
        ${item.label}
      `;

      if (!item.href) {
        return `<span class="c-item">${content}</span>`;
      }

      return `
        <a href="${item.href}" target="${item.href.startsWith('http') ? '_blank' : '_self'}" rel="noopener noreferrer" class="c-item">
          ${content}
        </a>
      `;
    }).join('');

    this.innerHTML = `
      <div class="contact-box reveal">
        <div class="contact-left">
          <h2>${CONTACT.heading}</h2>
          <p>${CONTACT.intro}</p>
          <div class="contact-items">${contactItems}</div>
        </div>
        <div class="contact-right">
          <p>${CONTACT.prompt}</p>
          <span>${CONTACT.note}</span>
          <a href="mailto:${SITE.email}" class="btn-white">${CONTACT.actionLabel} &rarr;</a>
        </div>
      </div>
    `;
  }
}

export default ContactSection;
