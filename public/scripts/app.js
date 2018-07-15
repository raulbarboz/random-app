'use strict';

//if statements
//ternary operators
//logical and operator

var app = {
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: ['One', 'Two']
};

var user = {
  location: 'teste',
  age: 31
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'li',
      null,
      'Item two: ',
      location
    );
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title ? app.title : 'anonymous'
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    'app.subtitle'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    ),
    user.age && React.createElement(
      'li',
      null,
      'Item three: ',
      user.age
    ),
    getLocation(user.location)
  )
);

var count = 0;

var addOne = function addOne() {
  count++;
  render();
};
var minusOne = function minusOne() {
  count--;
  render();
};
var reset = function reset() {
  count = 0;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Contador: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

render();
