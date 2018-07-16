class RandomApp extends React.Component {
  render(){
    const title = "Random App";
    const subtitle = "Sort some things";
    const options = ['Roleta', 'Veganos', 'Sabores da terra']
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
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
        <button>what should i do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render(){
    return(
      <div>
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
  render(){
    return (
      <div>
        <button>submit</button>
      </div>
    )
  }
}


ReactDOM.render(<RandomApp />, document.getElementById('app'));
