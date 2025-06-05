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
import deliver from "../../assets/images/deliver.png";
import decoy from "../../assets/images/decoy.png";
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
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт ноутбуков</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт планшетов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт ПК</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт мониторов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт телефонов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт принтеров</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт проекторов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт Smart TV</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт игровых приставок</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт фотоаппаратов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button class="swiper-slide main__catalog-slider__button main__catalog-slider__button-custom-slide--repair">
      <p>Ремонт умных часов</p>
      <img src="${go}" alt="Выбор" />
    </button>
    <button">
  <img src="${go}" alt="Пустышка" style="visibility: hidden;" />
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

     <div class="main__header">
      <h1 class="main__header-h1">Цены на услуги</h1>
    </div>


    

   <nav id="priceSlider" class="main__catalog-slider swiper">
  <div class="swiper-wrapper">

    <div class="swiper-slide">
      <div class="main__service-card">
        <p class="label label--type">Ремонтные услуги</p>
        <p class="value value--type">Диагностика</p>

        <p class="label label--price">Цена</p>
        <p class="value value--price">Бесплатно</p>

        <p class="label label--time">Срок</p>
        <p class="value value--time">30 мин</p>

        <img src="${deliver}" alt="Подробнее" class="card-arrow" />
      </div>
    </div>

    <div class="swiper-slide">
      <div class="main__service-card">
        <p class="label label--type">Ремонтные услуги</p>
        <p class="value value--type">Замена дисплея</p>

        <p class="label label--price">Цена</p>
        <p class="value value--price">1000 ₽</p>

        <p class="label label--time">Срок</p>
        <p class="value value--time">30–120 мин</p>

        <img src="${deliver}" alt="Подробнее" class="card-arrow" />
      </div>
    </div>


        <div class="swiper-slide">
      <div class="main__service-card">
        <p class="label label--type">Ремонтные услуги</p>
        <p class="value value--type">Диагностика</p>

        <p class="label label--price">Цена</p>
        <p class="value value--price">Бесплатно</p>

        <p class="label label--time">Срок</p>
        <p class="value value--time">30 мин</p>
        <img src="${deliver}" alt="Подробнее" class="card-arrow" />
      </div>
    </div>

    <div class="swiper-slide">
      <div class="main__service-card">
        <p class="label label--type">Ремонтные услуги</p>
        <p class="value value--type">Диагностика</p>

        <p class="label label--price">Цена</p>
        <p class="value value--price">Бесплатно</p>

        <p class="label label--time">Срок</p>
        <p class="value value--time">30 мин</p>

        <img src="${deliver}" alt="Подробнее" class="card-arrow" />
      </div>
    </div>

        <div class="swiper-slide">
      <div class="main__service-card">
        <p class="label label--type">Ремонтные услуги</p>
        <p class="value value--type">Диагностика</p>

        <p class="label label--price">Цена</p>
        <p class="value value--price">Бесплатно</p>

        <p class="label label--time">Срок</p>
        <p class="value value--time">30 мин</p>

        <img src="${deliver}" alt="Подробнее" class="card-arrow" />
      </div>
    </div>

  </div>

  <div class="swiper-pagination"></div>
</nav>

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
  let brandsSwiper = null;
  let repairSwiper = null;
  let priceSwiper = null;

  function initializeSlider() {
    const isMobile = window.innerWidth <= 767;

    const brandsSliderEl = document.getElementById("brandsSlider");
    if (isMobile && !brandsSwiper && brandsSliderEl) {
      brandsSwiper = new Swiper(brandsSliderEl, {
        modules: [Pagination],
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    } else if (!isMobile && brandsSwiper) {
      brandsSwiper.destroy(true, true);
      brandsSwiper = null;
    }

    const repairSliderEl = document.getElementById("repairSlider");
    if (isMobile && !repairSwiper && repairSliderEl) {
      repairSwiper = new Swiper(repairSliderEl, {
        modules: [Pagination],
         slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    } else if (!isMobile && repairSwiper) {
      repairSwiper.destroy(true, true);
      repairSwiper = null;
    }

    const priceSliderEl = document.getElementById("priceSlider");
    if (isMobile && !priceSwiper && priceSliderEl) {
      priceSwiper = new Swiper(priceSliderEl, {
        modules: [Pagination],
          slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    } else if (!isMobile && priceSwiper) {
      priceSwiper.destroy(true, true);
      priceSwiper = null;
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    initializeSlider();

    initToggle({
      slideSelector: "#brandsSlider .swiper-slide",
      buttonId: "toggleBrandsButton",
    });

    initToggle({
      slideSelector: "#repairSlider .swiper-slide",
      buttonId: "toggleRepairButton",
    });
  });

  window.addEventListener("resize", () => {
    initializeSlider();
  });

  return main;
}
