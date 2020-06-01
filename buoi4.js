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

function sum(){
    const numbers = Array.from(arguments)
    return numbers.reduce((sum , num) => sum + num)
}
console.log(sum(1,2,3,4,5,6,7))

  
