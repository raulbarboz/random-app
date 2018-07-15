//if statements
//ternary operators
//logical and operator

const app ={
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: ['One','Two']
}

const user = {
  location: 'teste',
  age: 31
}

function getLocation(location) {
  if(location){
  return <li>Item two: {location}</li>;
  }
}

const template = (
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

let count = 0;

const addOne = () => {
  count++
  render();
}
const minusOne = () => {
  count--;
  render();
}
const reset = () => {
  count = 0
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const templateTwo = (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot);
}

render()
