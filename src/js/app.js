import '../sass/main.scss';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';


export default function App() {
  const app = document.createElement('div');
  app.classList.add('app');

  app.appendChild(Header());
  app.appendChild(Main()); 


  return app;
}


