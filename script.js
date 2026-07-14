(() => {
  const menu = document.querySelector('#menu');
  const nav = document.querySelector('#nav');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();

  if (menu && nav) {
    const setMenu = (open) => {
      nav.classList.toggle('open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? '닫기' : '메뉴';
    };

    menu.addEventListener('click', () => {
      setMenu(menu.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  if (window.TetrisApp) window.TetrisApp.initialize();
})();
