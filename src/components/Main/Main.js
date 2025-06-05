/** @format */

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
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Main.scss";

export default function Main() {
  const main = document.createElement("main");
  main.className = "main";
  main.innerHTML = `
    <div class="main__header">
      <h1 class="main__header-h1">Ремонт техники различных брендов</h1>
    </div>

    <nav id="brandsSlider" class="main__catalog-slider swiper">
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
      <button id="toggleBrandsButton" class="main__expand-text__button">
        Показать всё
      </button>
    </div>

    <div class="main__header">
      <h1 class="main__header-h1">Ремонт различных видов техники</h1>
    </div>
    
<nav id="repairSlider" class="main__catalog-slider swiper">
  <div class="swiper-wrapper">
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт ноутбуков</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт планшетов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт ПК</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт мониторов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт телефонов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт принтеров</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт проекторов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт Smart TV</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт игровых приставок</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт фотоаппаратов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button custom-slide">
      <p>Ремонт умных часов</p>
      <img src="${go}" alt="Выбор" />
    </button>
  </div>
  <div class="swiper-pagination"></div>
</nav>

    <div class="main__expand-text">
      <img src="${expand}" alt="" />
      <button id="toggleRepairButton" class="main__expand-text__button">
        Показать всё
      </button>
    </div>

  `;

  // После того, как main будет добавлен в DOM, инициализируем Swiper и toggleSlides
  document.body.appendChild(main);

  // === Функция для одного слайдера ===
  function initToggle({ slideSelector, buttonId }) {
    const slides = main.querySelectorAll(slideSelector);
    const toggleButton = main.querySelector(`#${buttonId}`);

    function getVisibleCount() {
      if (window.innerWidth <= 767) return 12;
      if (window.innerWidth >= 1120) return 8;
      return 6;
    }

    function hideExtraSlides() {
      const visibleCount = getVisibleCount();

      slides.forEach((slide, index) => {
        if (index >= visibleCount) {
          slide.classList.add("collapsed");
        } else {
          slide.classList.remove("collapsed");
        }
      });

      const hasMore = slides.length > visibleCount;
      toggleButton.style.display = hasMore ? "block" : "none";
    }

    function toggleSlides() {
      const visibleCount = getVisibleCount();
      const firstHiddenSlide = slides[visibleCount];
      const isCollapsed = firstHiddenSlide?.classList.contains("collapsed");

      slides.forEach((slide, index) => {
        if (index >= visibleCount) {
          if (isCollapsed) {
            slide.classList.remove("collapsed");
          } else {
            slide.classList.add("collapsed");
          }
        }
      });

      toggleButton.textContent = isCollapsed ? "Скрыть" : "Показать всё";
    }

    // Инициализация
    hideExtraSlides();
    toggleButton.addEventListener("click", toggleSlides);
    window.addEventListener("resize", () => {
      hideExtraSlides();
    });
  }

  // === Инициализируем Swiper и toggle для обоих блоков ===
  window.addEventListener("DOMContentLoaded", () => {
    new Swiper(".swiper", {
      modules: [Pagination],
      slidesPerView: "auto",
/*       centeredSlides: true, */
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    initToggle({
      slideSelector: "#brandsSlider .swiper-slide",
      buttonId: "toggleBrandsButton",
    });

    initToggle({
      slideSelector: "#repairSlider .swiper-slide",
      buttonId: "toggleRepairButton",
    });
  });

  return main;
}
