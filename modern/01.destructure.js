const person = {
  'name' : 'Nitesh',
  'age': 32,
  'occupation': 'Software Engineer'
}

const { name:firstName, age, occupation } = person
console.log(firstName)

const weatherDataSet = [12,32,4,5]
const [monday, tuesday, wednesday, thursday] = weatherDataSet

console.log(monday)


function greet ({firstName, lastName, occupation='Engineer'}){
  console.log(`Hello, ${firstName}`)
  console.log(`Your are an awesome, ${occupation}`)
}

greet({
  firstName: "Nitesh",
  lastName: "Sharma"
})