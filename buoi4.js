// const mouse = {
//     name : 'Mickey',
//     sayhi : function() {
//       console.log('Hi, my name is' , this.name)
//     }
// }
// mouse.sayhi()
// console.log(this)

// const sayHello = mouse.sayhi
// sayHello.bind({name : 'Cat'})()
// function run(cb){
//     console.log('run...')
//     cb()
// }
  
// const mouse = {
//     name : 'Mickey',
//     run : function() {
//         console.log(this.name + ' is running')
//     }
// }
  
// run(mouse.run.bind(mouse))

// 18 : Arrow function
// const arrayNum = [2,3,4,5,6,7,8,9,10]
// const newArrayNum = arrayNum.map((value , index) => {
//     return value * 2
// })
// console.log(newArrayNum)

// Vi du
// const a = {
//     name : 'AAA',
//     run : function() {
//         var run2 = function(){
//             console.log(this.name)
//         }
//         run2()
//     }
// }

// a.run()

// 19 : Template string
//   function greeting(name){
//     return `Hi, ${name} !`
//   }
//   console.log(greeting('phat'))

// 20 Arguments
// const obj = {
//     0 : 'Thanh',
//     1 : 'Trang',
//     2 : 'Thủy',
//     length : 3
// }  
// console.log(Array.from(obj))

// function sum(){
//     const numbers = Array.from(arguments)
//     return numbers.reduce((sum , num) => sum + num)
// }
// console.log(sum(1,2,3,4,5,6,7))

// function sum(a = 0 , b = 0 ){
//     console.log(a + b)
// }
// sum(10 )

  
// 21 : Call
// function greeting(name,age){
//     console.log(`Hi! ${name} . I am ${age} . My location at ${this.location}` )
// }
// greeting.call({location : 'D1'},'Phat',26)

// 22 : Apply

// function sum(){
//     const numbers = Array.from(arguments)
//     return numbers.reduce((sum , num )=> sum + num , 0)
// }
// function average(){
//     const x = sum.apply(null,arguments)
//     return x / arguments.length
// }
// average(1,2,3,6)

// 22 : Enhanced object literals

// function showName(name){
//     return {name}
// }
// console.log(showName('phat'))

// 23 : rest
// function sum(...nums){
//     return nums.reduce((a ,b) => a + b)
//   }
// sum(1,2,3,4,5)

// 24 : spread
// const a = [1,2,3]

// function sum(...numbers){
//     console.log(numbers.join())
// }
// sum(...a)

// const obj1 = {
//     a : 1,
//     b : 2,
//     c : 3,
//     d : {e : 10}
//   }
// let obj2 = {}
// for(let key in obj1){
//   obj2[key] = obj1[key]
// }
// let obj2 = {...obj1}

// console.log(obj2)
