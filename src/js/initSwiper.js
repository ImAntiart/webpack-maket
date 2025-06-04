import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function initSwiper() {
  const swiperEl = document.querySelector('.swiper');

  if (!swiperEl) return;

  new Swiper(swiperEl, {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
}