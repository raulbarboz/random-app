console.log('app is running');

var template = <p>This is JSX, da hora</p>;

var template2 = (
  <div>
  <h1>Raul Barboza</h1>
  <p>Age: 31</p>
  <p>Location: Bixiga</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
