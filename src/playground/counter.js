class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.state = {
      count: 0
    }
  }
  handleAdd(){
    this.setState((prevState)=>{
      return{
        count: prevState.count + 1
      }
    })
  }
  handleRemove(){
    this.setState((prevState)=>{
      return{
        count: prevState.count - 1
      }
    })
  }
  handleRemoveAll(){
    this.setState(()=>{
      return{
        count: 0
      }
    })
  }
  render(){
    return(
      <div>
        <h1>Contador: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleRemove}>-1</button>
        <button onClick={this.handleRemoveAll}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
/*let count = 0;

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
*/
