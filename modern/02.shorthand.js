function person(firstName, lastName){
  return {
    firstName, 
    lastName,
    greet(){
      console.log(`Hello, ${firstName}`)
    }
  }
}

person('Nitesh', 'Sharma').greet()


function computedProp(prefix, name, occupation){
  return {
    [`${prefix} ${name}`] : occupation
  }
}

console.log(computedProp('Mr.', 'Nitesh', 'Engineer'))
