// import _ from 'lodash';



// document.addEventListener('click', () => {
//   var element = document.createElement('div');
//   element.innerHTML = "Dear Lee";
//   document.body.appendChild(element);
// })

// console.log(_.join(['a', 'b', 'c'], '-'))

// function getComponent() {
//   return import(/* webpackChunkName: 'lodash' */ 'lodash').then((_) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', 'Lee'], '-');
//     return element;
//   })
// }

// getComponent().then((el) => {
//   document.body.appendChild(el);
// })

async function getComponent() {
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  const element = document.createElement('div');
  element.innerHTML = _.join(['Dell', 'Lee'], '-');
  return element;
}

document.addEventListener('click', () => {
  getComponent().then((el) => {
    document.body.appendChild(el);
  })
})