// src/components/Feedback/Feedback.js
import './Feedback.scss';
import highlight from "../../assets/images/highlight.png";
import cross from "../../assets/images/cross.png";
import send from '../../assets/images/send.png';


export default function Feedback() {
  const feedbackPopup = document.createElement('aside');
  feedbackPopup.classList.add('feedback-popup');

  feedbackPopup.innerHTML = `
<section class="feedback-popup__content">
  <button class="feedback-popup__close">
    <img src="${cross}" alt="Закрыть" />
  </button>
  <h2 class="feedback-popup__header">
    <img src="${highlight}" alt="" />
    <p>Обратная связь</p>
  </h2>
  <form class="feedback-popup__form">
    <label class="feedback-popup__label">
      <input type="text" name="name" placeholder="Имя" required />
    </label>

    <label class="feedback-popup__label">
      <input type="tel" name="phone" placeholder="Телефон" required />
    </label>

    <label class="feedback-popup__label">
      <input
        type="email"
        name="email"
        placeholder="Электронная почта"
        required
      />
    </label>

    <label class="feedback-popup__label feedback-popup__label--message">
      <textarea name="message" placeholder="Сообщение"></textarea>
    </label>

    <div class="feedback-popup__privacy-consent">
        Нажимая “отправить”, вы даете согласие на <a href="" class="feedback-popup__privacy-consent--link">обработку персональных данных</a>и
        соглашаетесь с нашей <a href="" class="feedback-popup__privacy-consent--link">политикой конфиденциальности</a>
    </div>
  </form>
      <button class="feedback-popup__submit-img" type="submit">
        <img src="${send}" alt="Отправить" />
    </button>

</section>

  `;

  // Закрытие по клику на крестик
  const closeBtn = feedbackPopup.querySelector('.feedback-popup__close');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    feedbackPopup.remove();
  });

  // Закрытие по клику вне области
  feedbackPopup.addEventListener('click', (e) => {
    if (e.target === feedbackPopup) {
      feedbackPopup.remove();
    }
  });

  return feedbackPopup;
}