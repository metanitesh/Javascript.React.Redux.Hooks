function Animal (name, energy){
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function(){
  console.log(`${this.name} is eating`)
}

// var leo = new Animal('leo', 7)

function Dog(name, energy, breed){
  Animal.call(this, name, energy)
  this.breed = breed

}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function(){
  console.log(`${this.name} says woof woof`)
}


var drift = new Dog('drift', 9, 'Bulldog')
drift.constructor = Dog
console.log(drift)

console.log(drift.eat())
console.log(drift.constructor)



class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  sleep(){
    console.log(`${this.name} is sleeping`)
  }
}

class Employee extends Person{
  constructor(name, age, company){
    super(name, age)
    this.company = company;
  }

  work(){
    console.log(`${this.name} works for ${this.company}`)
  }
}


var nitesh = new Employee('Nitesh', 32, 'Mountblue')
console.log(nitesh)
console.log(nitesh.sleep())
console.log(nitesh.work())