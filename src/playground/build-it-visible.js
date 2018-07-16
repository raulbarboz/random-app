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

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
      {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>foi</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'))
}
render();
