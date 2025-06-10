/** @format */

import "./Header.scss";

import burgerIcon from "../../assets/images/burger.png";
import dividerIcon from "../../assets/images/divider.png";
import logoIcon from "../../assets/images/Logo.png";
import callIcon from "../../assets/images/call.png";
import chatIcon from "../../assets/images/chat.png";
import profileIcon from "../../assets/images/profile.png";
import repairIcon from "../../assets/images/repair.png";
import searchIcon from "../../assets/images/search.png";
import compLow from "../../assets/images/320Comp.png";
import highlight from "../../assets/images/highlight.png";
import expand from "../../assets/images/expand.png";

export default function Header() {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
  <section class="header__main-nav">
   <nav class="header__logo-nav" aria-label="Основная навигация">
      <button class="header__button" aria-label="Меню">
        <img src="${burgerIcon}" alt="" />
      </button>

      <div class="header__divider header__divider--hide-on-low">
        <img src="${dividerIcon}" alt="" />
      </div>

      <a href="index.html" class="header__logo">
        <img src="${logoIcon}" alt="Логотип компании" />
      </a>
    </nav>

    <nav class="header__actions" aria-label="Дополнительные действия">
      <button class="header__button header__button--hide-on-low" aria-label="Позвонить">
        <img src="${callIcon}" alt="" />
      </button>

      <button class="header__button header__button--hide-on-low" aria-label="Написать">
        <img src="${chatIcon}" alt="" />
      </button>

      <button class="header__button header__button--hide-on-low" aria-label="Профиль">
        <img src="${profileIcon}" alt="" />
      </button>

      <div class="header__divider">
        <img src="${dividerIcon}" alt="" />
      </div>

      <button class="header__button" aria-label="Ремонт">
        <img src="${repairIcon}" alt="" />
      </button>

      <button class="header__button" aria-label="Поиск">
        <img src="${searchIcon}" alt="" />
      </button>
    </nav>
  </section>
   

        <div class="header__controls">
      <section class="services">
        <header class="services__header">
          <div class="services__header-h1">
            <h1>
              <img src="${highlight}" alt=""/>
              Услуги и сервисы
            </h1>
          </div>

          <nav class="services__request" aria-label="Действия пользователя">
            <button class="services__request-button">
              Оставить заявку
              <img src="${repairIcon}" alt="" />
            </button>

            <button class="services__request-button">
              Статус ремонта
              <img src="${searchIcon}" alt="" />
            </button>
          </nav>
        </header>

        <nav class="services__menu" aria-label="Категории услуг">
          <button class="services__menu-item services__menu-item--hide-on-small">
            Ремонтируемые бренды
          </button>
          <button class="services__menu-item">Ремонтируемые устройства</button>
          <button class="services__menu-item">Дополнительные услуги</button>
          <button class="services__menu-item">Цены на услуги</button>
          <button class="services__menu-item">Специальные цены</button>
          <button class="services__menu-item">Отзывы</button>
          <div class="services__scroll-fade"></div>
        </nav>
      </section>

      <section class="about-company">
        <article class="about-company__info">
          <div class="about-company__text">
            <br class="about-company__br">
            <div class="about-company__text--main">
              Мы являемся авторизованным сервисным центром по ремонту техники
              Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с
              официальной гарантией производителя.
            </div>
            <br class="about-company__br--second">

            <div class="about-company__text--secondary">
              Мы успешно работаем с 1992 года и заслужили репутацию надежного
              партнера
              <span class="about-company__text--third"
                >, что подтверждает большое количество постоянных клиентов. Мы
                гордимся тем, что к нам обращаются по рекомендациям и, в свою
                очередь, советуют нас родным и близким.</span
              >
            </div>
          </div>

          <div class="about-company__read-more" id="readMoreBtn">
            <img src="${expand}" alt="" />
            <button class="about-company__read-more-text">Читать далее</button>
          </div>
          
        </article>

        <img src="${compLow}" alt="Фотография офиса нашей компании" class="about-company__image"/>
      </section>
    </div>
  `;

  // Добавляем элемент в DOM сразу после создания
  document.body.appendChild(header);

  // Теперь получаем элементы
  const readMoreBtn = document.getElementById("readMoreBtn");
  const secondaryText = document.querySelector(".about-company__text--secondary");
  const thirdText = document.querySelector(".about-company__text--third");
  const buttonTextEl = readMoreBtn?.querySelector(".about-company__read-more-text");

  // Функция для обновления видимости текста
  function updateTextVisibility() {
    if (!secondaryText || !thirdText) return;

    if (window.matchMedia("(min-width: 1440px)").matches) {
      secondaryText.style.display = "inline";
      secondaryText.style.opacity = "1";
      thirdText.style.display = "inline";
      thirdText.style.opacity = "1";
    } else if (!window.matchMedia("(max-width: 767px)").matches) {
      secondaryText.style.display = "inline";
      secondaryText.style.opacity = "1";
      thirdText.style.display = "none";
      thirdText.style.opacity = "0";
    }
  }

  // Логика кнопки
  if (readMoreBtn && secondaryText && thirdText && buttonTextEl) {
    readMoreBtn.addEventListener("click", function () {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const isThirdVisible =
        window.getComputedStyle(thirdText).display !== "none";

      if (isMobile) {
        const isHidden =
          window.getComputedStyle(secondaryText).display === "none";

        if (isHidden) {
          secondaryText.style.display = "inline";
          thirdText.style.display = "inline";
          requestAnimationFrame(() => {
            secondaryText.style.opacity = "1";
            thirdText.style.opacity = "1";
          });
        } else {
          secondaryText.style.opacity = "0";
          thirdText.style.opacity = "0";
          setTimeout(() => {
            secondaryText.style.display = "none";
            thirdText.style.display = "none";
          }, 300);
        }

        buttonTextEl.textContent = isHidden ? "Скрыть текст" : "Читать далее";
      } else {
        if (isThirdVisible) {
          thirdText.style.opacity = "0";
          setTimeout(() => {
            thirdText.style.display = "none";
          }, 300);
          buttonTextEl.textContent = "Читать далее";
        } else {
          thirdText.style.display = "inline";
          requestAnimationFrame(() => {
            thirdText.style.opacity = "1";
          });
          buttonTextEl.textContent = "Скрыть текст";
        }
      }
    });

    window.addEventListener("resize", () => {
      updateTextVisibility();
    });

    updateTextVisibility(); 
  }

    return header;
  }

