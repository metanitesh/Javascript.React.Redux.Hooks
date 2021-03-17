let arr = [1,2,3,4]
let arr2 = arr.map( num => num*2)
console.log(arr2)

arr = [1,2,3,4]
arr2 = arr.map( num => ({
 [num] : num*2
}))
console.log(arr2)


arr = [1,2,3,4]
arr2 = arr.map( num => console.log(num) || ({
 [num] : num*2
}))

console.log(arr2)

//this
// function oldThis(){
//   console.log(this)
// }

// console.log(oldThis())
// (function(){
//   console.log(arr2)
// }())

// (function(){

// }())