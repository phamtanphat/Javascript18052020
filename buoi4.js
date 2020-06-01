const mouse = {
    name : 'Mickey',
    sayhi : function() {
      console.log('Hi, my name is' , this.name)
    }
}
// mouse.sayhi()
// console.log(this)

const sayHello = mouse.sayhi
sayHello.bind({name : 'Cat'})()
