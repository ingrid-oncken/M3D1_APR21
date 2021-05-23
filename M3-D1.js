/*

1)
Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

2)
Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

3)
Create a function to remove a character at the specified position of a given string and return the new string.

4)
 Create a function to find the largest of three given integers.

5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

6) 
Create a function that creates and returns the specified number of copies of a given string (positive number).

7)
Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)
Create a function to find the longest string from a given array of strings.

12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)
Create a function to find the index of the greatest element of a given array of integers

14)
Create a function to get the largest even number from an array of integers.

15)
Create a function to check from two given integers, whether one is positive and another one is negative.

16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)
Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

// 1)Create a function to calculate the sum of the two given integers.
//   If the two values are the same, then returns the triple of their sum.
console.log(`******************** EX 1 ******`)

const funcEx1 = function (n1, n2) {
  return n1 === n2 ? (n1 + n2) * 3 : n1 + n2
}
console.log(`For the numbers 3 and 7 we have ${funcEx1(3, 7)}`)
console.log(`For the numbers 5 and 5 we have ${funcEx1(5, 5)}`)
console.log(`For the numbers 10 and 8 we have ${funcEx1(10, 8)}`)

console.log(`\n\n`)

// 2) Create a function to check two given numbers.
//   Return true if one of the numbers is 50, or if their sum is 50.
console.log(`******************** EX 2 ******`)

const funcEx2 = function (n1, n2) {
  return n1 === 50 || n2 === 50 || n1 + n2 === 50
}
console.log(`For the numbers 3 and 7 we have ${funcEx2(3, 7)}`)
console.log(`For the numbers 50 and 5 we have ${funcEx2(50, 5)}`)
console.log(`For the numbers 10 and 40 we have ${funcEx2(10, 40)}`)

console.log(`\n\n`)

console.log(`******************** EX 3 ******`)

// 3) Create a function to remove a character at the specified position of a
//    given string and return the new string.

const funcEx3 = function (string, position) {
  return string.slice(0, position) + string.slice(position + 1)
}
console.log(funcEx3(`Love`, 2))
console.log(funcEx3(`Ingrid`, 1))
console.log(funcEx3(`Hello`, 3))

// var str = "Hello World";
// str = str.slice(0, 3) + str.slice(4);
// console.log(str);

// function remove_character(str, char_pos) {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
//   return part1 + part2;
// }

// console.log(remove_character("Python", 0));
// console.log(remove_character("Python", 3));
// console.log(remove_character("Python", 5));

console.log(`\n\n`)

// 4) Create a function to find the largest of three given integers.
console.log(`******************** EX 4 ******`)

const funcEx4 = function (n1, n2, n3) {
  return n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3
}
console.log(`The largest number between 1, 3, 6 is ${funcEx4(1, 3, 6)}`)
console.log(`The largest number between 7, 4, 15 is ${funcEx4(7, 4, 15)}`)
console.log(`The largest number between 120, 74, 33 is ${funcEx4(120, 74, 33)}`)
console.log(`\n\n`)

// 5) Create a function to check whether two numbers are in range 40..60
//    or in the range 70..100 inclusive.
console.log(`******************** EX 5 ******`)
const funcEx5 = function (n1, n2) {
  return (
    (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60) ||
    (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100)
  )
}
console.log(funcEx5(43, 56))
console.log(funcEx5(70, 95))
console.log(funcEx5(39, 61))
console.log(funcEx5(72, 100))
console.log(funcEx5(43, 98))

console.log(`\n\n`)

// 6) Create a function that creates and returns the specified number of copies of a given string (positive number).
console.log(`******************** EX 6 ******`)

const funcEx6 = function (string, n) {
  return n > 0 ? string.repeat(n) : string
}
console.log(funcEx6(`Ingrid `, 5))
console.log(funcEx6(`Bla `, 3))

console.log(`\n\n`)

// 7) Create a function that returns the city name of a given string,
//    if the string begins with "Los" or "New", otherwise returns bla.
console.log(`******************** EX 7 ******`)

const funcEx7 = function (string) {
  return string.includes(`Los`) || string.includes(`New`) ? string : `bla`
}
console.log(funcEx7(`I love New York!`))
console.log(funcEx7(`I was born in Los Angeles.`))
console.log(funcEx7(`Berlim is a nice place to live`))

console.log(`\n\n`)

//Strive Answer
// const startsWith = function (str) {
//   if (str.startsWith("Los") || str.startsWith("New")) {
//     return str;
//   } else {
//     return "";
//   }
// };
// console.log(startsWith("Los Angeles"));

// Mikola answer
// const cityName = function (str) {
//   let city1 = "New York"
//   let city2 = "Los Angeles"

//   if (str.startsWith("New")) {
//     return city1
//   }
//   if (str.startsWith("Los")) {
//     return city2
//   } else {
//     return false
//   }
// }
// console.log("Ex 7 ", cityName("New Day"))

console.log(`******************** EX 8 ******`)
// 8) Create a function to calculate the sum of three elements
//of a given array of integers of length 3.

const funcEx8 = function (...array) {
  let sum = 0
  array.forEach((element) => {
    sum += element
  })
  return sum
}

console.log(funcEx8(10, 15, 20, 23, 45))

console.log(`\n\n`)

// console.log(`******************** EX 1 ******`)
// console.log(`\n\n`)

//9) Create a function to test whether an array of integers of
//   length 2 contains 1 or a 3.
console.log(`******************** EX 9 ******`)
// if (arr.includes(1) || arr.includes(3)) {
//   return true
// } else {
//   return false
// }
let arr9 = [1, 2]
let arr9b = [4, 4]

const funcEx9 = (...arr) => arr.includes(1) || arr.includes(3)
console.log(funcEx9(5, 4))
// console.log(funcEx9(1, 3))
// console.log(funcEx9(4, 6))
console.log(`\n\n`)

// 10) Create a function to test whether an array of integers of length 2
//     does not contain 1 or a 3
console.log(`******************** EX 10 ******`)

const funcEx10 = (arr) => !funcEx9(arr)
console.log(funcEx10(arr9b))

console.log(`\n\n`)

// 11) Create a function to find the longest string from a given array of strings.
console.log(`******************** EX 11 ******`)
let arr11 = ["Mykola", "Ingrid", "Alessandra", "Helena", "Theodora"]

const funcEx11 = (arr) => {
  let lenghtArr = []
  arr.forEach((str) => lenghtArr.push(str.length))

  let max = Math.max(...lenghtArr)
  let index = lenghtArr.indexOf(max)
  return `The largest name is ${arr[index]} with ${max} letters`
}
console.log(funcEx11(arr11))

console.log(`\n\n`)
