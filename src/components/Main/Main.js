import expand from "../../assets/images/expand.png";
import go from "../../assets/images/go.png";
import logoAcer from "../../assets/images/brandsLogo/logoAcer.png";
import logoLenovo from "../../assets/images/brandsLogo/logoLenovo.png";
import logoSamsung from "../../assets/images/brandsLogo/logoSamsung.png";
import logoApple from "../../assets/images/brandsLogo/logoApple.png";
import logoViewSonic from "../../assets/images/brandsLogo/logoViewSonic.png";
import logoBosch from "../../assets/images/brandsLogo/logoBosch.png";
import logoHp from "../../assets/images/brandsLogo/logoHp.png";
import logoSony from "../../assets/images/brandsLogo/logoSony.png";

// Импорты Swiper
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Main.scss";


export default function Main() {
  const main = document.createElement("main");
  main.className = "main";
  main.innerHTML = `
    <div class="main__header">
      <h1 class="main__header-h1">Ремонт техники различных брендов</h1>
    </div>

    <nav class="main__catalog-slider swiper">
      <div class="swiper-wrapper">
        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoLenovo}" alt="Логотип Lenovo" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoSamsung}" alt="Логотип Samsung" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoApple}" alt="Логотип Apple" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoViewSonic}" alt="Логотип ViewSonic" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoBosch}" alt="Логотип Bosch" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoHp}" alt="Логотип HP" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoAcer}" alt="Логотип Acer" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoSony}" alt="Логотип Sony" />
          <img src="${go}" alt="Выбор" />
        </button>

        <!-- Дубликаты -->
        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoHp}" alt="Логотип HP" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoAcer}" alt="Логотип Acer" />
          <img src="${go}" alt="Выбор" />
        </button>

        <button class="swiper-slide main__catalog-slider__button">
          <img src="${logoSony}" alt="Логотип Sony" />
          <img src="${go}" alt="Выбор" />
        </button>

        <div class="services__scroll-fade"></div>
      </div>

      <div class="swiper-pagination"></div>
    </nav>

    <div class="main__expand-text">
      <img src="${expand}" alt="" />
      <button id="toggleCatalogButton" class="main__expand-text__button">
        Показать всё
      </button>
    </div>
  `;

  // Инициализируем Swiper только после создания элемента
  window.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  });

  return main;
}