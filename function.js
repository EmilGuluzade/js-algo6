//!1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (I am jhon doe)
// const printFullName=(name,surname)=>{
// return `Im am ${name} ${surname}`
// }
// console.log(printFullName("jhon", "doe"));

//! 2) daxil edilən ədədin kvadratını return edən funksiya yazın

// function square(number) {
// return Math.pow(number,2)
// }

// console.log(square(5));

//!3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// const sum=(a, b)=>{
// return `cem ${a+b}`
// }
// const multiply=(a, b)=>{
//     return `hasil ${a*b}`
// }
// const subtruct=(a, b)=>{
//     return `ferq ${a-b}`
// }
// const divide=(a, b)=>{
//     return `nisbet ${a/b}`
// }

// console.log(sum(2, 3));
// console.log(multiply(2, 3));
// console.log(subtruct(2, 3));
// console.log(divide(2, 3));

//!4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.
// const calculator = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       return a + b;
//       break;
//     case "*":
//       return a * b;
//       break;
//     case "/":
//       return a / b;
//       break;
//     case "-":
//       return a - b;
//       break;
//     default:
//       return `2 reqem ve operator daxil edin`;
//       break;
//   }
// };
// console.log(calculator(2, 5, "+")); //7
// console.log(calculator(2, 5, "*")); //10
// console.log(calculator(2, 5, "/")); //0.4
// console.log(calculator(2, 5, "-")); //-3

//! 5) arrayın ilk və son elementinin cəmini return edən function yazın

// const getSum = (array) => {
// return array[0]+array[array.length-1]
// }
// console.log(getSum([1, 2, 3])); // 4
//console.log(getSum([80, 5, 58, 17, 100])); // 180
// console.log(getSum([15, -500, 0, 50])); // 65

//!6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın
// let getSum=(array)=>{
//     return (array.reduce((acc,el)=>{
// return acc+el
//     },0))
// }
// console.log(getSum([80, 5, 58, 17, 100]));

//! 7) arrayin daxilindəki max elementi return edən funksiya yazın
// const maxEl = (arr) => {
//   let maxItem = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxItem) {
//       maxItem = arr[i];
//     }
//   }

//   return maxItem;
// };

// console.log(maxEl([80, 5, 58, 17, 100]));
//! 8) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin
// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// const filterEmployees = (arr) => {
//   let filteredEmployees = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].salary > 60000) {
//       filteredEmployees.push(arr[i]);
//     }
//   }
//   return filteredEmployees;
// };

// console.log(filterEmployees(employees));

//! 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// const findElement=(arr, item)=>{
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]==item) {
//         return true
//     }

// }
// return false
// }

// console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
// console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
// console.log(findElement(["a", "g", "y", "d"], "d")); // d array elementərindən biridir

//! 10) sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// let sampleNews =
//   "As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,and new features happen.";

// function findSpaceCounts(str) {
//   let newStr = str.replace(/\s+/g, "");
//   return str.length - newStr.length;
// }
// console.log(
//   `sampleNews metninde bosluqlarin sayi : ${findSpaceCounts(sampleNews)}`
// );

//! 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.

// const concatArray=(arr1,arr2)=>{
// let newArr=[]
// for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i])
// }
// for (let i = 0; i < arr2.length; i++) {
//     newArr.push(arr2[i])
// }
// return newArr
// }
//  console.log(concatArray([1,2,3,4,5],[6,7,8,9]))

//! 12. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// const array_filled = (a, b) => {
//   let arr = [];
//   for (let i = 0; i < a; i++) {
//     arr[i] = b;
//   }

//   return arr;
// };
// console.log(array_filled(6, 0));

//!13. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.Məsələn:console.log(move([10, 20, 30, 40, 50], 0, 2));Expected Output:[20, 30, 10, 40, 50]

// const move = (arr, fromIndex, toIndex) => {
//   if (
//     fromIndex < 0 ||
//     fromIndex >= arr.length ||
//     toIndex < 0 ||
//     toIndex >= arr.length
//   ) {
//     return "index arrayin colundedi";
//   }

//   const elementToMove = arr.splice(fromIndex, 1)[0];

//   arr.splice(toIndex, 0, elementToMove);

//   return arr;
// };

// console.log(move([10, 20, 30, 40, 50], 0, 2));

//!14. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.Məsələn:console.log(range(1, 4));Expected Output:[1, 2, 3, 4]

// const range = (from, to) => {
//   let arr = [];
//   for (let i = from; i <= to; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// console.log(range(1, 4));
