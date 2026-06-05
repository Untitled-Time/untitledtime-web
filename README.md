# Untitled Time

**Untitled Time** is a deep-time art and philosophy project about a vessel that keeps no clock time.

It holds three times at once:

- the deep time of its fossil stone
- the brief time of the face it reflects
- the indeterminate transit time of a stone carried away by a stranger's hands

The public site is written as a restrained 五行 narrative with a 北斗七星 / POLARIS team constellation. Its tone is spare, contemplative, and grounded in 空 and 无为.

## Site Structure

The page is a single scroll:

1. **火 - The White Obelisk:** The rocket, escape, and the human urge to leave.
2. **金 - The Silicon Silence:** Machine obsolescence and the question of meaning after labor.
3. **木 - The Cathedral of Patience:** The seed, Future Library, and long-duration care.
4. **水 - The Mirror:** Still water, non-contention, 五蕴皆空, and reflection as a way of seeking time.
5. **土 - The Vessel:** The Coquina bowl, pierced mirror, St Andrews pairing, child-height vessel, and the human act of carrying a stone away.
6. **北斗七星 - The Navigators:** The team constellation pointing toward POLARIS.

## Vessel Concept

A stone bowl rests in a forest. It is carved from Coquina, Virginia fossil stone roughly 2.5 million years old. It holds nothing. Behind a field of drainage holes, a convex mirror returns the visitor's face against deep time.

A second vessel is imagined at the University of St Andrews, cut from 330-million-year-old Carboniferous limestone. Each site uses its own stone as its own clock.

The clock's unit is not seconds. It is the uncertain journey of a stone moved by a stranger's hands.

## Visual Assets

Current vessel images live in `src/assets/`.

Images currently used by `index.html`:

- `Coquina Bowl Forest prototype at walking scale.jpg`
- `Pierced mirror bowl detail.jpg`
- `Elevation and material study.jpg`

Additional concept assets currently present:

- `The constellation plan.png`
- `The human act .png`

Keep image references URL-encoded in HTML when filenames contain spaces.

## Technical Notes

This checkout is a static site:

- `index.html`
- `style.css`
- `src/assets/`
- `CNAME`

There is no current `package.json` or Astro build script in this repository state. The site can be previewed with a simple static server:

```bash
python3 -m http.server 4322
```

Then open:

```text
http://127.0.0.1:4322/index.html
```

Useful checks:

```bash
npx --yes html-validate@latest index.html
git diff --check
```

## Deployment

- **Hosting:** GitHub Pages
- **DNS:** Cloudflare
- **Domain:** [untitledtime.org](https://untitledtime.org)

## Contact

**Facilitator:** Ran Yang  
**Institution:** William & Mary  
**Email:** rxyan2@wm.edu
