import '../sass/main.scss';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';


export default function App() {
  const app = document.createElement('div');
  app.classList.add('app');

  app.appendChild(Header());
  app.appendChild(Main()); 
  app.appendChild(Footer()); 


  return app;
}


