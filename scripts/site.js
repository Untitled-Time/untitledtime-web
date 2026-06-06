/* =========================================================================
   UNTITLED TIME — site behaviour (vanilla)
   Scroll reveals · interactive mirror · deep-time rulers · dipper readout
   ========================================================================= */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. SCROLL REVEALS ------------------------------------------------ */
  const reveals = document.querySelectorAll('.reveal');
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('in', 'instant'));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 12% 0px' });
    reveals.forEach((el) => {
      // anything already on (or near) the first screen reveals instantly —
      // never gets trapped pre-animation if rendering is throttled
      const top = el.getBoundingClientRect().top;
      if (top < vh * 0.92) {
        el.classList.add('in', 'instant');
      } else {
        io.observe(el);
      }
    });
  }

  /* ---- 2. INTERACTIVE MIRROR ------------------------------------------- */
  const mirror = document.getElementById('mirror');
  const holes = document.getElementById('holes');
  if (holes) {
    // build a hex-ish field of drainage holes
    const rows = [3, 4, 5, 4, 5, 4, 3];
    const frag = document.createDocumentFragment();
    const n = rows.length;
    rows.forEach((count, r) => {
      const y = 12 + (r / (n - 1)) * 76; // 12%..88%
      for (let c = 0; c < count; c++) {
        const x = 50 + (c - (count - 1) / 2) * 13;
        const b = document.createElement('b');
        b.style.left = x + '%';
        b.style.top = y + '%';
        frag.appendChild(b);
      }
    });
    holes.appendChild(frag);
  }
  if (mirror && !reduceMotion) {
    const setPos = (px, py) => {
      const rect = mirror.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (px - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (py - rect.top) / rect.height));
      mirror.style.setProperty('--mx', (28 + x * 44) + '%');
      mirror.style.setProperty('--my', (30 + y * 36) + '%');
    };
    mirror.addEventListener('pointermove', (e) => setPos(e.clientX, e.clientY));
    mirror.addEventListener('pointerleave', () => {
      mirror.style.setProperty('--mx', '50%');
      mirror.style.setProperty('--my', '46%');
    });
    // gentle idle drift until first interaction
    let t = 0, idle = true;
    mirror.addEventListener('pointerenter', () => { idle = false; });
    (function drift() {
      if (idle) {
        t += 0.012;
        mirror.style.setProperty('--mx', (50 + Math.sin(t) * 8) + '%');
        mirror.style.setProperty('--my', (46 + Math.cos(t * 0.8) * 6) + '%');
      }
      requestAnimationFrame(drift);
    })();
  }

  /* ---- 3. DEEP-TIME RULERS --------------------------------------------- */
  const rulerWrap = document.getElementById('depths-rulers');
  if (rulerWrap) {
    const fillBars = () => rulerWrap.querySelectorAll('.fill').forEach((f) => {
      f.style.width = (f.getAttribute('data-fill') || 0) + '%';
    });
    if (reduceMotion || !('IntersectionObserver' in window)) {
      fillBars();
    } else {
      const ro = new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => { if (e.isIntersecting) { fillBars(); obs.disconnect(); } });
      }, { threshold: 0.4 });
      ro.observe(rulerWrap);
    }
  }

  /* ---- 4. DIPPER READOUT ----------------------------------------------- */
  let data = {};
  try { data = JSON.parse(document.getElementById('bowl-data').textContent); } catch (e) {}
  const readout = document.getElementById('readout');
  const nodes = document.querySelectorAll('.bowl-node');

  function render(key) {
    if (!readout || !data[key]) return;
    const d = data[key];
    const name = d.url
      ? '<a class="person-link" href="' + escapeAttr(d.url) + '" target="_blank" rel="noopener noreferrer">' + escape(d.name) + '</a>'
      : escape(d.name);
    readout.innerHTML =
      '<div class="ro-star">' + escape(d.star) + '</div>' +
      '<div class="ro-name">' + name + '</div>' +
      '<div class="ro-role">' + escape(d.role) + '</div>' +
      '<div class="ro-blurb">' + escape(d.blurb) + '</div>';
    nodes.forEach((n) => n.classList.toggle('active', n.getAttribute('data-key') === key));
  }
  function escape(s) {
    const d = document.createElement('div'); d.textContent = s; return d.innerHTML;
  }
  function escapeAttr(s) {
    return escape(s).replace(/"/g, '&quot;');
  }
  nodes.forEach((n) => {
    const key = n.getAttribute('data-key');
    n.addEventListener('mouseenter', () => render(key));
    n.addEventListener('focus', () => render(key));
    n.addEventListener('click', () => render(key));
  });
  render('polaris'); // default

  /* ---- 5. INQUIRY FORM ------------------------------------------------- */
  const inquiryForm = document.getElementById('foot-inquiry');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (inquiryForm.querySelector('[name="name"]').value || '').trim();
      const message = (inquiryForm.querySelector('[name="message"]').value || '').trim();
      const subject = encodeURIComponent('Untitled Time — Partnership Inquiry');
      const body = encodeURIComponent((name ? 'From: ' + name + '\n\n' : '') + message);
      window.location.href = 'mailto:rxyan2@wm.edu?subject=' + subject + '&body=' + body;
    });
  }

})();
