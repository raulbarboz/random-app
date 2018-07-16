class RandomApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Roleta', 'Veganos', 'Sabores da terra']
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return{
        options: []
      }
    })
  }
  handleAddOptions() {
    this.setState((prevState) => {
      return{
        options: prevState.push('raul')
      }
    })
  }
  handlePick(){
    const sort = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[sort]);
  }
  render(){
    const title = "Random App";
    const subtitle = "Sort some things";
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
        <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
        handleAddOptions={this.handleAddOptions}
        />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      )
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button
        onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}
        >
        what should i do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render(){
    return(
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      {
          this.props.options.map((option)=> <Option key={option} optionText={option}/>)
      }
      <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return(
      <div>
      {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = '';

    if(option){
      console.log(option);
    }
  }
  render(){
    return (
      <div>
      <form onSubmit={this.props.handleAddOptions}>
        <input typr="text" name="option"/>
        <button>Add Option</button>
      </form>
      </div>
    )
  }
}


ReactDOM.render(<RandomApp />, document.getElementById('app'));
