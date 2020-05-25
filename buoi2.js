// 9 : for of , for in
// var arrayNames = ["Teo","Ti","Tun"]
// var myDog = {
//     name : 'Lucky',
//     weight : 2
// }
// for ( var element of arrayNames){
//     console.log(element)
// }
// for (var element in myDog){
//     console.log(myDog[element])
// }

// Ví dụ
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//     var result = 1;
//     for (var element of arr){
//         result *=  element
//     }
//     return result
// }

// console.log(multiply([2, 3, 4])); // expect: 24


/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

// var apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
  
//   function getkey(object){
//       for (var element in object){
//           console.log(element)
//           for(var elementbedroom in object[element]){
//               console.log(elementbedroom)
//               for(var elementBed in object[element][elementbedroom]){
//                   console.log(elementBed)
//               }
//           }
//       }
//   }

  // Cach 2 
//   for (var element in object){
//     console.log(element)
//     if(typeof object[element] == 'object'){
//         getkey(object[element])
//     }
// }
  
//   getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
// 10 : Array method
// var arrayNames = ['Teo','Ti','Tun','Hoa','Hue']

// Them du lieu vao vi tri cuoi cua mang
// arrayNames.push('Tuan')
// Xoa du lieu vao vi tri cuoi cua mang
// arrayNames.pop()
// Them du lieu vao vi tri dau cua mang
// arrayNames.unshift('Tuan')
// Xoa du lieu vi tri dau cua mang
// arrayNames.shift()
// Them du lieu o giua mang
// Parameter 1 : vi tri truyen vao la vi tri ma ban muon them
// arrayNames.splice(1 , 0 , 'Tuan')
// Xoa du lieu o giua mang
// arrayNames.splice(1 , 2 )
// console.log(arrayNames.splice(1 , 2 ))


// function removeEnd(arr, n) {
//     arr.splice( arr.length - n , n )
//     return arr
// }

// console.log(removeEnd([2, 3, 1, 8, 9, 7], 1));  // [2,3,1]

// 11 : Function nhan tham so la 1 function
/**
 * 1. Viết hàm double nhận vào 1 số bất kì, hiển thị ra số đó nhân đôi
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 */

// function double(num) {
//     return num * 2
// }

// function sumAndDo(nums, callback) {
//     var result = 0;
//     for (var element of nums){
//         result += callback(element)
//     }
//     console.log(result)
// }

// sumAndDo([1, 2, 3], double);

// 1 - 100
// 1 : in so chan
// 2 : in so le
// 3 : in so chia 3 du 1
// 4 : in so can bac 2

// in so chan
// for ( var i = 1 ; i <= 100 ; i++){
//     if ( i % 2 == 0){
//         console.log(i)
//     }
// }

// in so le
// for ( var i = 1 ; i <= 100 ; i++){
//     if ( i % 2 == 1){
//         console.log(i)
//     }
// }


// in so chia 3 du 1
// for ( var i = 1 ; i <= 100 ; i++){
//     if ( i % 3 == 1){
//         console.log(i)
//     }
// }


// in so chinh phuong
// for ( var i = 1 ; i <= 100 ; i++){
//     if (Math.sqrt(i) % 1 == 0  ){
//         console.log(i)
//     }
// }

// function tinhtoan(callback){
//     for ( var i = 1 ; i <= 100 ; i++){
//         var dk = callback(i)
//         if (dk) console.log(i)
//     }
// }

// tinhtoan(function(i){
//     return Math.sqrt(i) % 1 == 0
// })

// function dosth(callback){
//     callback()
// }
// dosth(console.log)

// 12 : Map

// var numArray = [5,10,1,8,9]

// var newNumArray = numArray.map(function(value , index){
//     if (value % 2 == 0){
//         return value * 2
//     }
//     return value
// })
// console.log(newNumArray)

function namesOnly(arr) {

}

namesOnly([
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
])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]



