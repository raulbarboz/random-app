'use strict';

//if statements
//ternary operators
//logical and operator
var divOption;
var app = {
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  e.target.elements.option.value = '';

  if (option) {
    app.options.push(option);
  }
  render();
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'button',
      { onClick: onMakeDecision },
      'Sort'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { typr: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
}

render();
