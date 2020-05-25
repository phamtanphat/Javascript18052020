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


function removeEnd(arr, n) {
    arr.splice( arr.length - n , n )
    return arr
}

console.log(removeEnd([2, 3, 1, 8, 9, 7], 1));  // [2,3,1]
