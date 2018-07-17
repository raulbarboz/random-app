class RandomApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Roleta', 'Veganos', 'Sabores da terra', 'Shopping', 'Maiô']
    }
  }
  componentDidMount(){
    const options = JSON.parse(localStorage.getItem('options'));

    if(options){
      this.setState(() => {
        return{
          options
        }
      })
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }

  }
  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({options: prevState.options.filter((option) => { return optionToRemove !== option})}))
  }
  handleAddOption(option) {
    if(!option){
      return 'enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'This option already exists'
    } else {
      this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }
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
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
        handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

//stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

Header.defaultProps = {
  title: 'some defaults'
}

// stateless functional component
const Action = (props) => {
  return(
    <div>
      <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      >
      what should i do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return(
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {
        props.options.map((option)=> (
          <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          />
        ))
    }

    </div>
  )
}

const Option = (props) => {
      return(
        <div>
        {props.optionText}
        <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >
        remove
        </button>
        </div>
      )
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)

    this.setState(() => {
      return { error }
    })

  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleAddOption}>
        <input typr="text" name="option"/>
        <button>Add Option</button>
      </form>
      <p>{this.state.error && this.state.error}</p>
      </div>
    )
  }
}


ReactDOM.render(<RandomApp />, document.getElementById('app'));
