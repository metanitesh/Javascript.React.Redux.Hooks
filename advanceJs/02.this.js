//implicit
var person = {
  name: 'Nitesh',
  age: 32,
  greet: function(){
    console.log("hello ", this.name)
  },
  job: {
    // name: 'software engineer',
    announce: function(){
      console.log( 'My job is', this.name)
    }
  }
}

person.job.announce()

//explicit

var me = {
  name: 'Nitesh'
}

function greet(age){
  console.log('My name is', this.name)
  console.log('Age is', age)
}

// greet.call(me, 32);
// greet.apply(me, [32]);
// greet.bind(me, 32)();


//new 
function Person(name){
  this.name = name
  this.greet = function(){
    console.log('My name is', this.name)
  }
}

var nitesh = new Person('Nitesh')
nitesh.greet()

//window

function greet(){
  console.log('Hello, My name is,', this.name)
}
window.name = 'nitesh'
greet()


