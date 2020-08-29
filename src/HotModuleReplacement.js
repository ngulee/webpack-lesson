import './hmr.css';

function HotModuleReplacement() {
  const root = document.getElementById('root');
  const btn = document.createElement('button');
  const a = 1;
  
  btn.innerHTML = '新增 Item';
  root.appendChild(btn);

  btn.onclick= function(event) {
    const div = document.createElement('div');
    div.innerHTML = 'item';
    div.classList.add('item');
    console.log('event')
    root.appendChild(div);
  }
  
}

export default HotModuleReplacement;