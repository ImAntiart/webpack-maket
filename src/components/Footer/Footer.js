import "./Footer.scss";

export default function Footer() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
  <p>© 2019 CPS Разработано командой Apesong</p>
<p>Политика конфиденциальности</p>
<p>Информация, размещенная на данной странице, не является публичной офертой</p>
    `;

  return footer;
}
