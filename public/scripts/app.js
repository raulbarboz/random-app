'use strict';

// let enableState = {
//   state: true
// }
//
// let enableStateChange = () => {
//   if(enableState.state === true){
//     enableState.state = false
//   }else{
//     enableState.state = true
//   }
//   console.log(enableState.state);
//   render();
// }
//
//
// const myApp = document.getElementById('app');
// function render(){
//   const template = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={enableStateChange}>{enableState.state ? 'Enable' : 'Disable'}</button>
//     {enableState.state && <p>Enable</p>}
//     </div>
//   )
//   ReactDOM.render(template, myApp)
// }
//
// render();

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'foi'
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
render();
