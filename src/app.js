//if statements
//ternary operators
//logical and operator
var divOption;
const app ={
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  e.target.elements.option.value = '';

  if(option){
    app.options.push(option)
  }
  render();
}

const removeAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');

function render() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <button onClick={onMakeDecision}>Sort</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
      {
        app.options.map((option) => <li key={option}>{option}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input typr="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();
