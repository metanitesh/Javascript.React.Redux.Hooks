class Animal{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  play(){
    console.log(this.name + " is playing")
  }

}

var leo = new Animal('leo', 9)
// leo.play()


for(let key in leo){
  // if(leo.hasOwnProperty(key)){
    console.log(leo[key])
  // }
  
}

// console.log( Object.getPrototypeOf(leo).play )
// console.log(leo instanceof Animal)

