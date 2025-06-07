/** @format */

import cross from "../../assets/images/cross.png";
import logoIcon from "../../assets/images/Logo.png";
import highlight from "../../assets/images/highlight.png";
import callIcon from "../../assets/images/call.png";
import chatIcon from "../../assets/images/chat.png";
import profileIcon from "../../assets/images/profile.png";
import searchIcon from "../../assets/images/search.png";
import "./Menu.scss";

export default function Menu() {
  const menu = document.createElement("aside");
  menu.classList.add("menu");

  menu.innerHTML = `
    <section class="menu__nav">
        <nav class="menu__nav__button">
            <button class="menu__close-button">
                <img src="${cross}" alt="Закрыть" />
            </button>
            <button>
                <img src="${logoIcon}" alt="" />
            </button>
        </nav>
        <nav class="header__nav">
            <img src="${searchIcon}" alt="" />
      </nav>
    </section>

    <article class="menu__main">
      <nav class="menu__main__nav">
        <button class="menu__main__nav-button">
          <img src="${highlight}" alt="" />
          Ремонт техники
        </button>
        <button class="menu__main__nav-button">Услуги и сервисы</button>
        <button class="menu__main__nav-button">Корпоративным клиентам</button>
        <button class="menu__main__nav-button">Продавцам техники</button>
        <button class="menu__main__nav-button">Партнерам</button>
        <button class="menu__main__nav-button">Производителям</button>
        <button class="menu__main__nav-button">Наши сервисные центры</button>
        <button class="menu__main__nav-button">Контакты</button>
      </nav>

      <section class="menu__main__contacts">
        <div class="menu__main__contacts__content">
          <div class="menu__main__contacts__actions">
            <button class="menu__main__contacts__actions-item" aria-label="Позвонить">
              <img src="${callIcon}" alt="Позвонить" />
            </button>
            <button class="menu__main__contacts__actions-item" aria-label="Написать">
              <img src="${chatIcon}" alt="Написать" />
            </button>
            <button class="menu__main__contacts__actions-item" aria-label="Профиль">
              <img src="${profileIcon}" alt="Профиль" />
            </button>
          </div>
          <a
            href="mailto:mail@cps.com"
            class="menu__main__contacts__links-item--email"
            >mail@cps.com</a
          >
          <a
            href="tel:+8 800 890 8900"
            class="menu__main__contacts__links-item--phone"
            >8 800 890 8900</a
          >
        </div>

        <div
          class="menu__main__contacts__language"
          role="group"
          aria-label="Выбор языка"
        >
          <button type="button" class="menu__main__contacts__language-button">
            RU
          </button>
          <button type="button" class="menu__main__contacts__language-button">
            EN
          </button>
          <button type="button" class="menu__main__contacts__language-button">
            CH
          </button>
        </div>
      </section>
    </article>
  `;


const closeBtn = menu.querySelector(".menu__close-button");
closeBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
});

  return menu;
}
