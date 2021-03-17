function Animal(name, age){
  this.name = name
  this.age = age
}

Animal.prototype = {
  play: function () {
    console.log(this.name + ' is playing')
  }
}

var leo = new Animal('leo', 9)
leo.play()

for(let key in leo){
  if(leo.hasOwnProperty(key)){
    console.log(leo[key])
  }
  
}
