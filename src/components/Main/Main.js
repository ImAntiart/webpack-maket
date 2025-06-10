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
import arrow from "../../assets/images/arrow.png"
/* import decoy from "../../assets/images/decoy.png"; */
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

<nav id="priceSliderMobile" class="main__catalog-slider swiper">
  <div class="swiper-wrapper">

    <div class="swiper-slide swiper-slide--price">
      <div class="price__wrapper">
        <div class="price__wrapper-item">
          <p>Ремонтные услуги</p>
          <p>Тестирование с выдачей технического заключения</p>
        </div>
        <div class="price__wrapper-item">
          <p>Цена</p>
          <p>1 000 ₽</p>
        </div>
        <div class="price__footer">
          <div class="price__wrapper-item">
            <p>Срок</p>
            <p>30-120 мин</p>
          </div>
          <button>
            <img src="${deliver}" alt="Подробнее" />
          </button>
        </div>
      </div>
    </div>

    <div class="swiper-slide swiper-slide--price">
      <div class="price__wrapper">
        <div class="price__wrapper-item">
          <p>Ремонтные услуги</p>
          <p>Диагностика</p>
        </div>
        <div class="price__wrapper-item">
          <p>Цена</p>
          <p>Бесплатно</p>
        </div>
        <div class="price__footer">
          <div class="price__wrapper-item">
            <p>Срок</p>
            <p>30 мин</p>
          </div>
          <button>
            <img src="${deliver}" alt="Подробнее" />
          </button>
        </div>
      </div>
    </div>

    <div class="swiper-slide swiper-slide--price">
      <div class="price__wrapper">
        <div class="price__wrapper-item">
          <p>Ремонтные услуги</p>
          <p>Замена дисплея</p>
        </div>
        <div class="price__wrapper-item">
          <p>Цена</p>
          <p>1 000 ₽</p>
        </div>
        <div class="price__footer">
          <div class="price__wrapper-item">
            <p>Срок</p>
            <p>30-120 мин</p>
          </div>
          <button>
            <img src="${deliver}" alt="Подробнее" />
          </button>
        </div>
      </div>
    </div>

        <div class="swiper-slide swiper-slide--price">
      <div class="price__wrapper">
        <div class="price__wrapper-item">
          <p>Ремонтные услуги</p>
          <p>Тестирование с выдачей технического заключения</p>
        </div>
        <div class="price__wrapper-item">
          <p>Цена</p>
          <p>1 000 ₽</p>
        </div>
        <div class="price__footer">
          <div class="price__wrapper-item">
            <p>Срок</p>
            <p>30-120 мин</p>
          </div>
          <button>
            <img src="${deliver}" alt="Подробнее" />
          </button>
        </div>
      </div>
    </div>

    <div class="swiper-slide swiper-slide--price">
      <div class="price__wrapper">
        <div class="price__wrapper-item">
          <p>Ремонтные услуги</p>
          <p>Замена программного обеспечения</p>
        </div>
        <div class="price__wrapper-item">
          <p>Цена</p>
          <p>1 000 ₽</p>
        </div>
        <div class="price__footer">
          <div class="price__wrapper-item">
            <p>Срок</p>
            <p>30-120 мин</p>
          </div>
          <button>
            <img src="${deliver}" alt="Подробнее" />
          </button>
        </div>
      </div>
    </div>

  </div>

  <div class="swiper-pagination"></div>
</nav>


<section class="main__price-table" id="priceSlider">
  <!-- Заголовки -->
  <div class="main__price-table-head">
    <p>Ремонтные услуги</p>
    <p>Цена</p>
    <p>Срок</p>
  </div>

  <div class="main__price-table-row--wrappler">
    <!-- Строка 1 -->
    <div class="main__price-table-row">
      <p>Диагностика</p>
      <p>Бесплатно</p>
      <p>30 мин</p>
      <button class="main__price-table-button">
        <img src="${deliver}" alt="Подробнее" />
      </button>
    </div>

    <div class="main__price-table-row">
      <p>Замена дисплея</p>
      <p>1 000 ₽</p>
      <p>30 - 120 мин</p>
      <button class="main__price-table-button">
        <img src="${deliver}" alt="Подробнее" />
      </button>
    </div>

    <div class="main__price-table-row">
      <p>Замена полифонического динамика</p>
      <p>1 000 ₽</p>
      <p>30 - 120 мин</p>
      <button class="main__price-table-button">
        <img src="${deliver}" alt="Подробнее" />
      </button>
    </div>

    <div class="main__price-table-row">
      <p>Тестирование с выдачей технического заключения</p>
      <p>1 000 ₽</p>
      <p>30 - 120 мин</p>
      <button class="main__price-table-button">
        <img src="${deliver}" alt="Подробнее" />
      </button>
    </div>

    <div class="main__price-table-row">
      <p>Замена программного обеспечения</p>
      <p>1 000 ₽</p>
      <p>30 - 120 мин</p>
      <button class="main__price-table-button">
        <img src="${deliver}" alt="Подробнее" />
      </button>
    </div>
  </div>
</section>

<div class="main__price-table-info">
  <p>
    Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную
    услугу. Для получения коммерческого предложения на постоянное обслуживание,
    оставьте заявку.
  </p>
  <br>
  <div class="main__price-table-info--commercial">
    <button>
      Получить коммерческое предложение<img src="${arrow}" alt="Предложение" /> 
    </button>
  </div>
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
        /*         slidesOffsetBefore: 16,
        slidesOffsetAfter: 16, */
        centeredSlides: false,
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
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        centeredSlides: false,
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

    const priceSliderEl = document.getElementById("priceSliderMobile");
    if (isMobile && !priceSwiper && priceSliderEl) {
      priceSwiper = new Swiper(priceSliderEl, {
        modules: [Pagination],
        slidesPerView: "auto",
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        centeredSlides: false,
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
