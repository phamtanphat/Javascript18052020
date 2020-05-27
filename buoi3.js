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
// Ví dụ
/* Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/
// var listProducts = [
//  {id: 1, categoryId: 1, name: 'Tivi'},
//  {id: 2, categoryId: 1, name: 'Tủ lạnh'},
//  {id: 3, categoryId: 3, name: 'Ghế sofa'},
//  {id: 4, categoryId: 1, name: 'Máy giặt'},
//  {id: 5, categoryId: 2, name: 'Chén bát'},
//  {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
//  {id: 7, categoryId: 3, name: 'Cửa kính'},
//  {id: 8, categoryId: 1, name: 'Điều hoà'},
//  {id: 9, categoryId: 3, name: 'Bàn tròn'},
//  {id: 10, categoryId: 2, name: 'Lò vi sóng'},
// ]

// function filterProductsByCategoryId(products, categoryId) {
//   // your code here!
//   return products.filter(function(value){
//       return value.categoryId == categoryId
//   }).map(function(value){
//       return {id : value.id , name : value.name}
//   })
// }

// console.log(filterProductsByCategoryId(listProducts,2))


// 14 : Reduce
var numArr = [1,2,3,4,5,6,7,8,9,10]

// Su dung reduce khong co gia tri khoi tao
// var total = numArr.reduce(function(prevalue , currentValue ){
//     console.log(prevalue , currentValue)
//     return prevalue + currentValue
// })

// Trả về số lượng người đã vote
function totalVotes(arr) {
    return arr.map(function(value){
        return value.voted
    }).reduce(function(total,currentValue){
        if(currentValue){
            total++
        }
        return total
    }, 0)
}
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters))// 7
