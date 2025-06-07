// src/main.js
import './sass/main.scss';
import App from './js/app';
import Menu from '../src/components/Menu/Menu';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const app = App();

  // Создаём и добавляем меню внутрь #root
  const menu = Menu();
  root.appendChild(menu);
  root.appendChild(app);

  // Находим кнопку бургера внутри Header
  const burgerButton = document.querySelector('.header__button[aria-label="Меню"]');

  // Создаём overlay
  const overlay = document.createElement('div');
  overlay.classList.add('menu-overlay');
  document.body.appendChild(overlay);

  // Обработчик открытия/закрытия
  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    overlay.classList.toggle('menu-overlay--visible');
  });

  // Закрытие по клику вне меню
  overlay.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    overlay.classList.remove('menu-overlay--visible');
  });

  // Закрытие по крестику
  const closeBtn = menu.querySelector('.menu__close-button');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('menu--open');
      overlay.classList.remove('menu-overlay--visible');
    });
  }
});