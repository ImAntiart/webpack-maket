import "./Footer.scss";

export default function Footer() {
  const footer = document.createElement("footer");
  footer.className = "footer";
footer.innerHTML = `
 <div class="footer__copyright">
    <p>© 2019 CPS</p>
    <p>Разработано командой Apesong</p> 
</div>
  <p class="footer__policy">Политика конфиденциальности</p>
  <p class="footer__offer">Информация, размещенная на данной странице, не является публичной офертой</p>
`;

  return footer;
}
