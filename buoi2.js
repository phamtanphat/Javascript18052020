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

function multiply(arr) {
    var result = 1;
    for (var element of arr){
        result *=  element
    }
    return result
}

console.log(multiply([2, 3, 4])); // expect: 24

Ví dụ
/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {

}

console.log(multiply([2, 3, 4])); // expect: 24