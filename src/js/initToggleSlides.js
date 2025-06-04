export function initToggleSlides() {
  const slides = document.querySelectorAll(".swiper-slide");
  const toggleButton = document.getElementById("toggleCatalogButton");

  if (!toggleButton || !slides.length) {
    console.warn('Элементы для toggleSlides не найдены');
    return;
  }

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width <= 767) return 12;
    if (width >= 1120) return 8;
    return 6;
  }

  function hideExtraSlides() {
    const visibleCount = getVisibleCount();
    const hasMore = slides.length > visibleCount;

    slides.forEach((slide, index) => {
      slide.classList.toggle("collapsed", index >= visibleCount);
    });

    toggleButton.style.display = hasMore ? "block" : "none";
    toggleButton.textContent = hasMore ? "Показать всё" : "Скрыть";
  }

  function toggleSlides() {
    const visibleCount = getVisibleCount();
    const isCollapsed = slides[visibleCount]?.classList.contains("collapsed");

    slides.forEach((slide, index) => {
      if (index >= visibleCount) {
        slide.classList.toggle("collapsed", !isCollapsed);
      }
    });

    toggleButton.textContent = isCollapsed ? "Скрыть" : "Показать всё";
  }

  hideExtraSlides();
  toggleButton.addEventListener("click", toggleSlides);
  window.addEventListener("resize", hideExtraSlides);
}