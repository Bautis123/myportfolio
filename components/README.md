# Portfolio Components

Edit portfolio content in `data.js` first:

- `SITE`: name, company, email, location, GitHub details
- `NAV_LINKS`: navigation items
- `HERO`: hero copy and buttons
- `PROFILE_ROWS`: profile card rows
- `ABOUT_COLUMNS`: about section text
- `SKILL_BLOCKS`: skills grid
- `PROJECTS`: project cards
- `CONTACT`: contact section copy and links

Image assets are referenced from `SITE.logo`, `SITE.photo`, and optional `PROJECTS[].image` fields.

Rendering lives in the matching component files:

- `portfolio-nav.js`
- `hero-section.js`
- `about-section.js`
- `skills-grid.js`
- `projects-grid.js`
- `contact-section.js`
- `portfolio-footer.js`

`index.js` imports and registers all components. `styles.css` controls all layout, colors, gradients, and hover states.
