// src/components/Header/Header.js

import burgerIcon from '../../../assets/images/burger.png';
import dividerIcon from '../../../assets/images/divider.png';
import logoIcon from '../../../assets/images/Logo.png';
import callIcon from '../../../assets/images/call.png';
import chatIcon from '../../../assets/images/chat.png';
import profileIcon from '../../../assets/images/profile.png';
import repairIcon from '../../../assets/images/repair.png';
import searchIcon from '../../../assets/images/search.png';

export default function Header() {
    const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `

  const mainNav = document.createElement('nav');
  mainNav.className = 'header__main-nav';
  mainNav.setAttribute('aria-label', 'Основная навигация');


  const menuButton = document.createElement('button');
  menuButton.className = 'header__button';
  menuButton.setAttribute('aria-label', 'Меню');
  menuButton.innerHTML = `<img src="${burgerIcon}" alt="" />`;
  mainNav.appendChild(menuButton);


  const divider = document.createElement('div');
  divider.className = 'header__divider header__divider--hide-on-low';
  divider.innerHTML = `<img src="${dividerIcon}" alt="" />`;
  mainNav.appendChild(divider);

  // Логотип
  const logoLink = document.createElement('a');
  logoLink.href = 'index.html';
  logoLink.className = 'header__logo';
  logoLink.innerHTML = `<img src="${logoIcon}" alt="Логотип компании" />`;
  mainNav.appendChild(logoLink);

  // Дополнительные действия
  const actionsNav = document.createElement('nav');
  actionsNav.className = 'header__actions';
  actionsNav.setAttribute('aria-label', 'Дополнительные действия');

  // Кнопка "Позвонить"
  const callButton = document.createElement('button');
  callButton.className = 'header__button header__button--hide-on-low';
  callButton.setAttribute('aria-label', 'Позвонить');
  callButton.innerHTML = `<img src="${callIcon}" alt="" />`;
  actionsNav.appendChild(callButton);

  // Кнопка "Написать"
  const chatButton = document.createElement('button');
  chatButton.className = 'header__button header__button--hide-on-low';
  chatButton.setAttribute('aria-label', 'Написать');
  chatButton.innerHTML = `<img src="${chatIcon}" alt="" />`;
  actionsNav.appendChild(chatButton);

  // Кнопка "Профиль"
  const profileButton = document.createElement('button');
  profileButton.className = 'header__button header__button--hide-on-low';
  profileButton.setAttribute('aria-label', 'Профиль');
  profileButton.innerHTML = `<img src="${profileIcon}" alt="" />`;
  actionsNav.appendChild(profileButton);

  // Второй разделитель
  const secondDivider = document.createElement('div');
  secondDivider.className = 'header__divider';
  secondDivider.innerHTML = `<img src="${dividerIcon}" alt="" />`;
  actionsNav.appendChild(secondDivider);

  // Кнопка "Ремонт"
  const repairButton = document.createElement('button');
  repairButton.className = 'header__button';
  repairButton.setAttribute('aria-label', 'Ремонт');
  repairButton.innerHTML = `<img src="${repairIcon}" alt="" />`;
  actionsNav.appendChild(repairButton);

  // Кнопка "Поиск"
  const searchButton = document.createElement('button');
  searchButton.className = 'header__button';
  searchButton.setAttribute('aria-label', 'Поиск');
  searchButton.innerHTML = `<img src="${searchIcon}" alt="" />`;
  actionsNav.appendChild(searchButton);

  // Добавляем всё в header
  header.appendChild(mainNav);
  header.appendChild(actionsNav);

  return header;
}