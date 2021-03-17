class App extends React.Component {

  
  addTodo = (event) => {
    event.preventDefault();
    
    const {value} = this.input
    this.props.app.dispatch({
      type: 'ADD_TODO',
      data: {
        id: 4,  
        message: value,
        done: false
      }
    })
  }

  componentDidMount(){
    this.props.app.subscribe((state) => {
     this.forceUpdate() 
    })
  }

  render() {

    const {todos,goals} = this.props.app.getState()
    const dom = todos.map( todo => {
        return (<li>{todo.message}</li>)
    })
    
    return (
      <div>
      <h1>React Todo</h1>
      <form onSubmit={(e) => this.addTodo(e)}>
        <input ref={(input) => this.input = input } type="text" />
      </form>
      <ul>
        {dom}  
      </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App app={app}/>,
  document.getElementById('root')
)