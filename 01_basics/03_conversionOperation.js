let score = "Bhairav"

console.log(typeof score);  // string

let valueInNumber = Number(score) 
console.log(valueInNumber);  // NaN
console.log(typeof valueInNumber); // Number


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Bhairav"
// let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);  // true 

// 1 => true; 0 => false
// "" => false
// "Bhairav" => true

let someNumber = 33

console.log(someNumber)  // 33
console.log(typeof someNumber)  // 33

let stringNumber = String(someNumber)
console.log(stringNumber);   // 33
console.log(typeof stringNumber);  // string 

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);  // -3

console.log(2+2);  // 4 
console.log(2-2);  // 0
console.log(2*2);  // 4
console.log(2**3); // 8
console.log(2/3);  // 0.6666
console.log(2%3);  // 2

let str1 = "hello"
let str2 = " Bhairav"

let str3 = str1 + str2
console.log(str3); // hello Bhairav

console.log("1" + 2); // 12
console.log(1 + "2");  // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log( (3 + 4) * 5 % 3);  // 2

console.log(+true); // 1
console.log(+"");  // 0


let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion