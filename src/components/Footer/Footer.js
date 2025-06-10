import "./Footer.scss";

export default function Footer() {
  const footer = document.createElement("footer");
  footer.className = "footer";
footer.innerHTML = `
  <p class="footer__copyright">© 2019 CPS Разработано командой Apesong</p>
  <p class="footer__policy">Политика конфиденциальности</p>
  <p class="footer__offer">Информация, размещенная на данной странице, не является публичной офертой</p>
`;

  return footer;
}
