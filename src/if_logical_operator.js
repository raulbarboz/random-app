//if statements
//ternary operators
//logical and operator

var app ={
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: ['One','Two']
}

var user = {
  location: 'teste',
  age: 31
}

function getLocation(location) {
  if(location){
  return <li>Item two: {location}</li>;
  }
}

var template = (
  <div>
  <h1>{app.title ? app.title : 'anonymous'}</h1>
  {app.subtitle && <p>app.subtitle</p>}
  <ol>
    <li>Item One</li>
    <li>Item two</li>
    {user.age && <li>Item three: {user.age}</li>}
    {getLocation(user.location)}
  </ol>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
