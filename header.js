 const Header = function() {
  const root = document.getElementById('root');
  const header = document.createElement('div');
  header.innerText = 'Header';

  root.append(header);
}

export default Header;