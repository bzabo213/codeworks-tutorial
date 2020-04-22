//  DataTypes Primitive vs Reference

// number
let num1 = 100;
let num2 = -50;
let num3 = 10.52;


// string
let myName = "Bernhard";
let greeting = "Hello Javascript";


// boolean
let happy = true;
let sad = false;


// unassigned
let unassigned;


// null
let noValue = null;


// me is an Object
let me = {
    name: "Bernhard",
    happy: true,
    born: 1977,
    died: null
}


//  Math and Operators
//  Addition
let addNum = 3 + 5; // 8
addNum += 10; // 18

//  Subtraction
let subNum = 5 - 2; // 3
addNum -= 1; // 2

//  Multiplication
let multNum = 5 * 2; // 10
multNum *= 3; // 30

//  Division
let divNum = 12 / 2; // 6
divNum /= 3; // 2

//  Increment
let incNum = 0;
incNum++ // 1
incNum += 1; 

//  Decrement
let decNum = 1;
decNum-- // 0

//  Comparison
// 10 == 12; // false
// 10 == "10" // true
// 10 === "10" // false
// 10 != 5 // true
// 10 != 10 // false
// 10 < 5 // false
// 10 > 5 // true
// 10 <= 10 // true
// 10 >= 10 // true