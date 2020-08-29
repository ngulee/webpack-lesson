import imgSrc from './images/s9.jpeg';
import './index.scss'

const Header = function() {
  const root = document.getElementById('root');
  const header = document.createElement('div');
  header.innerText = 'Header_webpack';

  const img = new Image();
  img.src = imgSrc;
  img.classList.add('test-img');
  // header.style.backgroundImage = `url(./${img})`
  

  root.append(img);
  root.append(header);
}

export default Header;