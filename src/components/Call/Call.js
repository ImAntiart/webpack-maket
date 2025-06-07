import './Call.scss';
import highlight from "../../assets/images/highlight.png";
import cross from "../../assets/images/cross.png";
import send from '../../assets/images/send.png';


export default function Call() {
  const callPopup = document.createElement('aside');
  callPopup.classList.add('call-popup');

  callPopup.innerHTML = `
<section class="call-popup__content">
  <button class="call-popup__close">
    <img src="${cross}" alt="Закрыть" />
  </button>
  <h2 class="call-popup__header">
    <img src="${highlight}" alt="" />
    <p>Заказать звонок</p>
  </h2>
  <form class="call-popup__form">

    <label class="call-popup__label">
      <input type="tel" name="phone" placeholder="Телефон" required />
    </label>

    <div class="call-popup__privacy-consent">
        Нажимая “отправить”, вы даете согласие на <a href="" class="call-popup__privacy-consent--link">обработку персональных данных</a>и
        соглашаетесь с нашей <a href="" class="call-popup__privacy-consent--link">политикой конфиденциальности</a>
    </div> 
  </form>
      <button class="call-popup__submit-img" type="submit">
        <img src="${send}" alt="Отправить" />
    </button>

</section>

  `;

  // Закрытие по клику на крестик
  const closeBtn = callPopup.querySelector('.call-popup__close');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    callPopup.remove();
  });

  // Закрытие по клику вне области
  callPopup.addEventListener('click', (e) => {
    if (e.target === callPopup) {
      callPopup.remove();
    }
  });

  return callPopup;
}