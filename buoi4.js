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
function run(cb){
    console.log('run...')
    cb()
}
  
const mouse = {
    name : 'Mickey',
    run : function() {
        console.log(this.name + ' is running')
    }
}
  
run(mouse.run.bind(mouse))
  