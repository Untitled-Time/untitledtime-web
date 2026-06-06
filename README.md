# Untitled Time

**Untitled Time** is a static web presentation for a deep-time public art and philosophy project: a network of stone vessels that hold nothing, read time through absence, and invite visitors to begin durations that may be completed by someone else.

The site is a single-page, editorial scroll for the William & Mary and St Andrews project. It frames the vessel as an instrument built around emptiness: fossil stone, pierced surfaces, reflected faces, rain, transit, and a Big Dipper / Polaris constellation of collaborators and sites.

## Project Shape

The page moves through these sections:

1. **Hero:** Untitled Time as a hundred-year question between William & Mary and St Andrews.
2. **Concept:** transit time as the open interval between letting something go and its coming to rest.
3. **The Untitled Duration:** the human act of carrying a stone away.
4. **The Functional Void:** a bowl that keeps time by holding nothing.
5. **Landscape Infrastructure:** seven draining bowls arranged as the Big Dipper, anchored by a Polaris basin.
6. **The Navigators:** an interactive constellation readout for the project team.
7. **Cosmic Deep-Time Twist:** Polaris as a temporary north, already moving through axial precession.
8. **The Vessel:** Coquina at College Woods, Carboniferous limestone at St Andrews, and two human scales for adult and child encounters.

## Repository Structure

```text
index.html
styles/
  base.css
  components.css
  directions.css
scripts/
  site.js
src/assets/
CNAME
```

There is no build step or package manifest in the current repository state. GitHub Pages can serve the site directly from the root `index.html`.

## Visual Assets

Current image assets live in `src/assets/`.

Images used by the page:

- `The human act.png`
- `Pierced mirror bowl detail.jpg`
- `The constellation plan.png`
- `Elevation and material study.jpg`
- `Coquina Bowl Forest prototype at walking scale.jpg`
- `Short version.jpg`

Additional support asset:

- `drainage holes.jpg`

Keep paths URL-safe when adding new image references. Spaces work in quoted HTML/CSS paths, but simpler filenames are easier to maintain.

## Responsive Behavior

The site is built as a responsive static page:

- the two-column section rail collapses into a single-column mobile layout below `900px`
- geology cards and I Ching cells stack below `720px`
- hero credits, figure captions, constellation readouts, and vessel height cards tighten below `640px`
- feature images use shorter mobile heights to avoid oversized crops on small screens
- fixed paper texture scrolling is disabled on narrow mobile viewports
- reveal animations respect `prefers-reduced-motion`
- a `no-js` fallback keeps content visible if JavaScript is disabled

## Local Preview

Run a simple static server from the repository root:

```bash
python3 -m http.server 4322
```

Then open:

```text
http://127.0.0.1:4322/
```

## Useful Checks

```bash
npx --yes html-validate@latest index.html
git diff --check
```

For layout review, open the local server in desktop and mobile widths and check the hero, constellation, figures, and footer.

## Deployment

- **Hosting:** GitHub Pages
- **DNS:** Cloudflare
- **Domain:** [untitledtime.org](https://untitledtime.org)
- **Entry point:** `index.html`

## Contact

**Facilitator:** Ran Yang  
**Institution:** William & Mary  
**Email:** rxyan2@wm.edu
