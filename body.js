const Body = function() {
  const root = document.getElementById('root');
  const body = document.createElement('div');
  body.innerText = 'Body';

  root.append(body);
}

export default Body;