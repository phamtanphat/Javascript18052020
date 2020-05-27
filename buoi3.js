// constructor
// fp vs oop
function Dog(name , weight){
    this.name = name
    this.weight = weight
    this.showName = function(){
        console.log(this.name)
    }
}
Dog.prototype.showWeight = function(){
    console.log(this.weight)
}

var myDog1 = new Dog("Kiki",5)
var myDog2 = new Dog("Lulu",7)

myDog2.showWeight()
