// constructor
// fp vs oop
// function Dog(name , weight){
//     this.name = name
//     this.weight = weight
//     this.showName = function(){
//         console.log(this.name)
//     }
// }
// Dog.prototype.showWeight = function(){
//     console.log(this.weight)
// }

// var myDog1 = new Dog("Kiki",5)
// var myDog2 = new Dog("Lulu",7)

// console.log(myDog1.showWeight == myDog2.showWeight)

// var numArray = [5,10,1,8,9]

// var newNumArray = numArray.map(function(value , index){
//     return value * 2
// })
// console.log(newNumArray)

// Array.prototype.mymap = function(cb){
//     var newArr = []
//     for(var i = 0 ; i < this.length ; i++){
//         newArr.push(cb(this[i], i))   
//     }
//     return newArr
// }
// var newNumArray = numArray.mymap(function(value , index){
//     return value * 2
// })
// console.log(newNumArray)

// 13 : Filter
// var numArr = [1,2,3,4,5,6,7,8,9,10]
// var newArr = numArr.filter(function(value , index){
//     return value % 2 == 0
// })
// console.log(newArr)
var arrUsers = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ]
