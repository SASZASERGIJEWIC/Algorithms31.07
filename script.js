//1 уровень сложности: Напишите функцию, которая принимает массив чисел и возвращает наибольшее число из этого массива.

// function findMaxNumber(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const numbers = [2, 4, 6, 8, 20];
// const maxNumber = findMaxNumber(numbers);
// console.log("наибольшее число из этого массива:", maxNumber);

// Напишите функцию, которая принимает строку и возвращает true, если строка является
//палиндромом (читается одинаково слева направо и справа налево), и false в противном случае.

function palindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join(""); //cleanedStr.split("").reverse().join("") превращает строку в массив символов, 
  //                                                           переворачивает и потом объединяет символы в строку, обратив их порядок. 
}
console.log(palindrome("level"));
console.log(palindrome("merci"));
