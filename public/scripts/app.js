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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
