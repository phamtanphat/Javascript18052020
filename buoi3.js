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

var numArray = [5,10,1,8,9]

// var newNumArray = numArray.map(function(value , index){
//     return value * 2
// })
// console.log(newNumArray)

Array.prototype.mymap = function(cb){
    var newArr = []
    for(var i = 0 ; i < this.length ; i++){
        newArr.push(cb(this[i], i))   
    }
    return newArr
}
var newNumArray = numArray.mymap(function(value , index){
    return value * 2
})
console.log(newNumArray)
