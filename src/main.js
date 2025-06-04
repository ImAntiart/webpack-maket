import './sass/main.scss';
import App from './js/app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  root.appendChild(App());
});