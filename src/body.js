// import './body.scss'
import './font/iconfont.scss'

const Body = function() {
  const root = document.getElementById('root');
  const body = document.createElement('div');
  body.innerHTML = '<div class="iconfont icon-full-screen">1234!!!!</div>';

  root.append(body);
}

export default Body;