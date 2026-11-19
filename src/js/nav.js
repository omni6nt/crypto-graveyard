/**
 * nav.js
 *
 * Progressive enhancement for the responsive site navigation.
 *
 * Export:
 *   initNav() — initializes the mobile toggle, keyboard behavior, and
 *               aria-current state for the current URL hash.
 */
export function initNav() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const toggle = nav.querySelector('.nav-toggle');
  const list = nav.querySelector('#nav-list');
  if (!toggle || !list) return;

  nav.classList.add('js-nav-ready');

  const links = Array.from(list.querySelectorAll('a'));

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open, returnFocus = false) {
    toggle.setAttribute('aria-expanded', String(open));
    const label = toggle.querySelector('.visually-hidden');
    if (label) {
      label.textContent = open ? 'Close navigation menu' : 'Open navigation menu';
    }
    if (returnFocus) toggle.focus();
  }

  function updateAriaCurrent() {
    const hash = window.location.hash;
    let matched = false;

    links.forEach((link) => {
      const isCurrent = Boolean(hash) && link.getAttribute('href') === hash;
      if (isCurrent) {
        link.setAttribute('aria-current', 'page');
        matched = true;
      } else {
        link.removeAttribute('aria-current');
      }
    });

    // Keep the cemetery as the default current section when there is no hash
    // or the hash does not correspond to one of the primary navigation links.
    if (!matched && links.length > 0) {
      links[0].setAttribute('aria-current', 'page');
    }
  }

  toggle.addEventListener('click', () => {
    if (isOpen()) {
      setOpen(false, true);
      return;
    }

    setOpen(true);
    const firstLink = links[0];
    if (firstLink) firstLink.focus();
  });

  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false, true);
      return;
    }

    // Shift+Tab from the first link naturally returns focus to the toggle.
    // Close the menu without preventing the browser's normal focus movement.
    if (
      event.key === 'Tab' &&
      event.shiftKey &&
      isOpen() &&
      event.target === links[0]
    ) {
      setOpen(false);
    }
  });

  nav.addEventListener('focusout', (event) => {
    if (!isOpen()) return;

    const nextTarget = event.relatedTarget;
    if (!nextTarget || !nav.contains(nextTarget)) {
      // Natural focus departure: close, but never steal the new focus target.
      setOpen(false);
    }
  });

  updateAriaCurrent();
  window.addEventListener('hashchange', updateAriaCurrent);
}
