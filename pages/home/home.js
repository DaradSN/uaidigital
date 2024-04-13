import logo from '../img/logo.png'
import menu from '../img/me';

export default () => {
    const container = document.createElement('div');
    container.id = 'csshome';
    const template = `
      <div class="container-menu"> 
          <nav id="menuPortifolio">
              <ul class="lista-menu">
                  <li><a href="#home" class="li-home">contato</a></li>
                  <li><a href="#sobre" class="li-sobre">sobre</a></li>
                  <li><a href="#portifolio" class="li-portifolio">portifolio</a></li>
              </ul>
          </nav> 
          <button id="btn-menu"><img src="${menu}" id ="iconMenu"></button>
      </div>`;
  
    container.innerHTML = template;
    return container;
  }