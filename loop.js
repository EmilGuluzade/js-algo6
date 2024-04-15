//! 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// let eded = prompt("eded daxil edin :");

// let cem = 0;
// let hasil = 1;

// if (eded.length > 2 && eded.length < 4) {
//   for (let i = 0; i < eded.length; i++) {
//     cem += parseInt(eded[i]);
//     hasil *= parseInt(eded[i]);
//   }

//   console.log(`cem =${cem} hasil =${hasil} edediOrta=${cem/3} `);
// } else {
//   console.log("eded 3 reqemli olmalidir");
// }

//! 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// let eded = parseInt(prompt("eded daxil edin :"));

// for (let i = 0; i <= eded; i++) {
//     if (eded%i==0) {
//         console.log(i)
//     }

// }

//! 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// let eded = parseInt(prompt("eded daxil edin :"));
// let count = 0;
// for (let i = 0; i <= eded; i++) {
//   if (eded % i == 0) {
//     count++;
//   }
// }
// console.log(count);

//! 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//!  0 x 0 = 0
//!  1 x 1 = 1
//!  2 x 2 = 4
//!  3 x 3 = 9
//!  5 x 5 = 25
//!  6 x 6 = 36
//!  7 x 7 = 49
//!  8 x 8 = 64
//!  9 x 9 = 81
//!  10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i ** 2}`);
// }

//!5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//! i    i^2   i^3
//!  0    0     0
//!  1    1     1
//!  2    4     8
//!  3    9     27
//!  4    16    64
//! 5    25    125
//!  6    36    216
//!   7    49    343
//!   8    64    512
//!   9    81    729
//!  10   100   1000 */

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}  ${i**2}  ${i**3}`);
//   }

//! 6)  0 - 100 arası yalnız sadə ədədləri console'da çap edin

// for (let i = 2; i < 100; i++) {
//   if (i == 2) {
//     console.log(i);
//   } else {
//     var check = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         check = false;
//       }
//     }

//     if (check) {
//       console.log(i);
//     }
//   }
// }

//! 7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın
// let oddSum=0
// let evenSum=0
// for (let i = 0; i < 100; i++) {
//     if (i%2==0) {
//         evenSum+=i
//     } else {
//         oddSum+=i
//     }
    
// }

// console.log(`teklerin cemi =${oddSum}
// cutlerin cemi =${evenSum}`)