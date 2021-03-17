class Store {

  constructor(reducers){
    console.log(reducers)
    this.reducers = reducers
  }

  state = []

  listeners = []

  getState() {
    return this.state 
  }

  dispatch(action){
    
    this.state = this.reducers(this.state, action)
    this.listeners.forEach ( fn => fn(this.state))
  }

  
  addListener(fn){
    this.listeners.push(fn)
    return () => {
      this.listeners = this.listeners.filter(listener =>  listener !== fn )
    }
  }

}

function todos(state = [], action){

  switch (action.type){
    case 'ADD_TODO':
      return state.concat(action.data)
  
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
      break
    case 'TOGGLE_TODO':
      return state.map( 
        todo => todo.id === action.id 
          ? Object.assign({}, todo, {done: !todo.done}) 
          : todo
        )

    default:
      return state 
  }

}

function goals(state = [], action){

  switch (action.type){
    case 'ADD_GOAL':
      return state.concat(action.data)
  
    case 'REMOVE_GOAL':
      return state.filter(todo => todo.id !== action.id)
      break
    case 'TOGGLE_GOAL':
      return state.map( 
        todo => todo.id === action.id 
          ? Object.assign({}, todo, {done: !todo.done}) 
          : todo
        )

    default:
      return state 
  }

}

const rootReducer = function(state = {}, action){
  return {
    todo: todoReducer(state.todo, action),
    goal: goalReducer(state.goal, action)
  }
}

const removeTest = (store) => (next) => (action) => {
  console.log('Checking the test')
  next(action)
}

const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log(`The action is ${action.type}`)
    console.log(`The new state is`, store.getState())
  console.groupEnd(action.type)
  next(action)
}

var app = new Redux.createStore(Redux.combineReducers({
  todos,
  goals
}), Redux.applyMiddleware(logger))
// app.subscribe(() => console.log(app.getState()))


const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    data: todo
  }
}

//Action
app.dispatch(addTodo({
  id: 10,
  message: 'Buy a new mobile',
  done: false
}))

app.dispatch({
  type: 'ADD_TODO',
  data: {
    id: 2,  
    message: 'Buy some Vegetables',
    done: false
  }
})

// // app.dispatch({
// //   type: 'REMOVE_TODO',
// //   id: 2
// // })

// app.dispatch({
//   type: 'TOGGLE_TODO',
//   id: 1
// })


// app.dispatch({
//   type: 'ADD_GOAL',
//   data: {
//     id: 1,
//     message: 'React/Redux',
//     done: false
//   }
// })

// app.dispatch({
//   type: 'ADD_GOAL',
//   data: {
//     id: 2,  
//     message: 'Hooks',
//     done: false
//   }
// })


// app.dispatch({
//   type: 'TOGGLE_GOAL',
//   id: 2
// })



