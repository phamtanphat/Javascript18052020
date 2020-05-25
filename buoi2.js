// 9 : for of , for in
var arrayNames = ["Teo","Ti","Tun"]
var myDog = {
    name : 'Lucky',
    weight : 2
}
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

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getkey(object){
      for (var element in object){
          console.log(element)
          if(typeof object[element] == 'object'){
              getkey(object[element])
          }
      }
  }
  
  getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  