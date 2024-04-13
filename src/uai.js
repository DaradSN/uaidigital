
import home from '../pages/home/home';
import contato from '../pages/menu/contato';
import portifolio from '../pages/menu/portifolio';
import sobre from '../pages/menu/sobre';

const principal = document.querySelector('#principal');
const init = () => {
  window.addEventListener('hashchange', () => {
    principal.innerHTML = '';
    switch (window.location.hash) {
      case '':
        principal.appendChild(home());
        break;
      case '#home':
        principal.appendChild(sobre());
        break;
      
      case '#contato':
        principal.appendChild(contato());
        break;
      case '#portifolio':
        principal.appendChild(portifolio());
        break;
      default:
        principal.appendChild(home());
        break;
    }
  });
};

window.addEventListener('load', () => {
  principal.appendChild(home());
  init();
});