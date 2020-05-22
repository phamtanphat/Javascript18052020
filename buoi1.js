// 1 : Khai bao bien
// var a = "Nguyen Van Teo"
// 2 : Kieu du lieu
// Primities type (Kieu nguyen thuy)
//  + Null
// var a = null
// console.log(a)
// + Undefined
// TH1 : Khai bao bien nhung khong co gia tri
// var a
// console.log(a)
// TH2 : Truy van toi thuoc tinh khong ton tai
// var nguyenVanA = {name : 'Nguyen Van A', age : 20}
// console.log(nguyenVanA.address)
// Th3 : Phuong thuc khong co return hoac chi tu return 
// function tinhtong(a , b){
//     return
//  }
 
// console.log(tinhtong(5, 10))
// Object type (Kieu doi tuong)
// JSON
// var teo = {name : 'Nguyen Van Teo', age : 20}
// console.log(typeof teo)
// Array type
// var arrayName = ["Teo","Ti","Tun"]
// console.log(arrayName)

// 3 : Object
// var nguyenVanA = {name : "Nguyen Van A", age : 20}
// console.log(nguyenVanA['name'])

//4 : Array
// var arrayNames = ["Teo","Ti","Tun"]
// console.log(arrayNames[0])

// 5: Toan tu
//  + - * / % ++ -- 
// var a = 10
// var b = 2
// console.log(a / b)
// a = a + 1
// a += 1
// a = ++a
// console.log(a)

// var a = 10
// var b = 5
// var c = a++ - b++ + --b + b++ - ++a + --a + b-- + a--
// 10 - b++ + --b + b++ - ++a + --a + b-- + a-- a = 11, b = 5
// 10 - 5 + --b + b++ - ++a + --a + b-- + a-- a = 11, b = 6
// 10 - 5 + 5 + b++ - ++a + --a + b-- + a-- a = 11, b = 5
// 10 - 5 + 5 + 5 - ++a + --a + b-- + a-- a = 11, b = 6
// 10 - 5 + 5 + 5 - 12 + --a + b-- + a-- a = 12, b = 6
// 10 - 5 + 5 + 5 - 12 + 11 + b-- + a-- a = 11, b = 6
// 10 - 5 + 5 + 5 - 12 + 11 + 6 + a--  a = 11, b = 5
// 10 - 5 + 5 + 5 - 12 + 11 + 6 + 11   a = 11, b = 5
//15  - 1 + 17
// 31
// console.log(c)


// 5 : Function
// function showName(name){
//     console.log(name)
// }
// function tinhtong(a , b){
//    return
// }

// console.log(tinhtong(5, 10))

// 6 : Object method
// var myDog = {
//     name: 'Kiki',
//     weight : 5,
//     age : 1,
//     showName : function(){
//         console.log(this.name)
//     }
// }
// console.log(myDog.showName())

// function setName(object){
//     return object.name = "B";
// }
// var a = {name : "A"}
// console.log(setName(a))
// console.log(a)

// 7 : Cau dieu kien

// Co 6 gia tri tuong trung cho false
// false , 0 , '' , null , undefined , NaN
var a = 6
var b = 10
if (a > b & a > 5) 
    console.log("True")
else
    console.log("False")

