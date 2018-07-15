'use strict';

console.log('app is running');

var template = React.createElement(
  'p',
  null,
  'This is JSX, da hora'
);

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Raul Barboza'
  ),
  React.createElement(
    'p',
    null,
    'Age: 31'
  ),
  React.createElement(
    'p',
    null,
    'Location: Bixiga'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
