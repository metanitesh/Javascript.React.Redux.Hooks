function Store(){
  let stateTree = {

  }
  
  let listeners = []

  return {
    getStore : () => stateTree,
    updateStore: (key, value) => {
      stateTree[key] = value
      listeners.forEach( fn => fn(stateTree))

    },
    listen: (fn) => {
      listeners.push(fn)
    }
      
  }
  
}


var people = Store()
console.log(people)
people.listen( (state) => {console.log('here is the new state', state)})
people.updateStore('nitesh', {id: 1, work:'Engineer'})