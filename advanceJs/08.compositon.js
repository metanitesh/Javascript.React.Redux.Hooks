class Animal {
  constructor(name, breed){
    this.name = name
    this.breed = breed
  }

  eat(){
    console.log(`${this.name} is eating`)
  }
}

class Dog extends Animal{
  constructor(name, breed){
    super(name, breed)
  }

  bark(){
    console.log(`${this.name} is barking`)
  }
}

const leo = new Dog('leo', 'puppy')
leo.bark()


//composition 
const eater = (state) => ({
  eat(){
    console.log(`${state.name} is eating`)
  }  
})


function dog(name, breed){
  const dog = {
    name, 
    breed
  }

  return Object.assign(dog, 
    eater(dog))
}

const ralph = dog('Ralph', 'BullDog')

console.log(ralph.eat())