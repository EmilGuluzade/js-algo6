//!   1.studentlərin ortalama score'nu yeni bir arrayda yığın
// const students = [
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Davud", scores: [100, 100, 100] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
// ];

// let newArr = [];

// for (let i = 0; i < students.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < students[i].scores.length; j++) {
//     sum += students[i].scores[j];
//   }
//   students[i].scores = sum / students[i].scores.length;
//   newArr.push(students[i]);
// }

// console.log(newArr);

//! 2. webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];

// let newArr = [];

// for (let i = 0; i < webTechs.length; i++) {
//   if (webTechs[i].length > 4) {
//     newArr.push(webTechs[i]);
//   }
// }

// console.log(newArr);

//! 3.product arrayindəki producların qiymətləri cəmini və ortalamasını tapın
// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];

//   let sum=products.reduce((acc,el)=>{
//     return acc+el.price
//   },0)
// let ortalam=sum/(products.length)
//   console.log(`producların qiymətləri cəmi = ${sum}
// producların qiymətləri ortalamasını = ${ortalam}`)

//! 4.countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// for (let i = 0; i < countries.length; i++) {
//   if (
//     countries[i].charAt(0).toLocaleLowerCase() == "a" &&
//     countries[i].charAt(countries[i].length - 1).toLocaleLowerCase() == "a"
//   ) {
//     console.log(countries[i]);
//   }
// }

//!5. Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.
// let n = prompt("eded daxil edin :");
// function findNumberOfDivisors(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(`${n} bolenlerinin sayi : ${findNumberOfDivisors(n)}`);

//!6daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin
// let str = prompt("cumle daxil edin :");
// function findSpaceCounts(str) {
//   let newStr = str.replace(/\s+/g, "");
//   return str.length - newStr.length;
// }
// console.log(`bu cumlede bosluqlarin sayi : ${findSpaceCounts(str)}`);
