// class Animal{
//   #name = 'Default'

//   static version  = 7

//   #privateMethod() {
//     return 'hello world'
//   }

//   greet = () => {
//     console.log(this.#name)
//   }
// }




// var leo = new Animal()


// console.log(leo.greet())
// console.log(leo.#privateHello)
// console.log(leo)



class MyObject {

  // Private field
  #foo;
    
  constructor(foo) {
    this.#foo = foo;
  }

  // #privateFun(prefix) {
  //  return prefix + this.#foo;
  // }
    
  // publicFun() {
  //   return this.#privateFun(">>");
  // }

}