(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (!button || !nav) return;

  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    nav.dataset.open = 'false';
    document.body.classList.remove('menu-open');
  };

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
    document.body.classList.toggle('menu-open', open);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close();
      button.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 840) close();
  });
})();
