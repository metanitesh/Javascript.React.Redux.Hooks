//concat
const arr1 = [1,2,3]
const arr2 = [3,4,5]
const arr3 = arr1.concat(arr2)
console.log(arr3)


//every
const ages = [18,20,21,40]
const groupCanVote = ages.every( age => age >= 18)
console.log(groupCanVote)

//fill
const random10 = Array(10).fill(undefined)
console.log(random10)

//Filter 
const tweetStars = [20,3,40,5]
const popularTweets = tweetStars.filter( tweet => tweet>10 )
console.log(popularTweets)

//Find
const tweetId = [1,23,2,4]
const tweet4 = tweetId.find(id => id === 4)
console.log(tweet4)

//FindIndex
const tweet4Index = tweetId.findIndex(id => id === 4)
console.log(tweet4Index)

//ForEach
const tweet=['hello', 'world']
tweet.forEach( tweet => console.log(tweet))

//Includes/IndexOf
const friends = ['Akhil', 'Ashish', 'Lin']
let isFriend = friends.includes('Lin')
console.log(isFriend)
friendIndex = friends.indexOf('Jalyasa')
console.log(friendIndex)

//Join
console.log(friends.join(" "))

//Map
const tweets = [{id: 1, stars: 32}, {id: 2, stars: 2}, {id: 3, stars: 20}]
const tweetIds = tweets.map(tweet => tweet.id)
console.log(tweetIds)

//Pop=Filter [Mutation]
const numbers = [1,2,3,4,5,]
numbers.pop()
console.log(numbers)
//Push=concat [Mutation]
numbers.push(10)
console.log(numbers)

//Reduce
const numberArray = [1,2,3,3]
const countDuplicateobject = numberArray.reduce((countObject, number)=> {
  if(countObject[number]){
    countObject[number] += 1
  }else{
    countObject[number] = 1
  }
  return countObject
}, {})

console.log(countDuplicateobject)

//reverse
const string = 'I like JavaScript'
const reverseString = string.split('').reverse().join('')
console.log(reverseString)

//shift=> Filter[Mutable]
let oldFriends = ['Ashish', 'Vishvesh', 'Sohail', 'Raveendra', 'Kundan', 'Tushar']
oldFriends.shift()
console.log(oldFriends)

//Slice
let someOldFriends = oldFriends.slice(1,4)
console.log(someOldFriends)

//some
const groupAges = [6, 14, 12, 22, 13]
const canCamp = ages.some(age => age >= 25)
console.log(canCamp)

//sort
let movies = ['Batman', 'SuperMan', 'Hitman']
movies.sort()
console.log(movies)

let years = [1923, 1900, 2000]
years.sort((a,b) => b-a)
console.log(years)

const users = [
  { name: 'Jim', age: 28 },
  { name: 'Alex', age: 32 },
  { name: 'Mikenzi', age: 26 },
  { name: 'Christina', age: 42 },
]


users.sort((a, b) => a.name > b.name)
console.log(users)

//splice
const userNames = ['Jake', 'Karl', 'Mikenzi']
userNames.splice(1,1)
console.log(userNames)

//unshift => Concat [Mutation]
const weather = [43, 41, 45]
weather.unshift(32)
console.log(weather)
