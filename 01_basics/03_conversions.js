// Conersion Operations
// Basically conversions are used to convert a DT into another DT(Ex. number to string)
// Syntax is just the required DT the variable

// Conversion of number DT to String DT
let num=33
console.log(num);
console.log(typeof num);
let stringnum= String(num)
console.log(typeof stringnum);

// Conversion of string DT to number DT
let x="33abc"
console.log(x);
console.log(typeof x);
let xx= Number(x)
console.log(typeof xx);
console.log(xx);

//Conversion of string DT to Boolean DT
let y="abc"
console.log(y);
console.log(typeof y);
let yy= Boolean(y)
console.log(typeof yy);
console.log(yy);
// 1 => true; 0 => false
// "Samiksha" => true
// "" => false

// ********************************Operations**************************************

// add(+), sub(-), mult(*), div(/), modulus(%)reminder of div, increment +1(++), decrement -1(--), exponentiation(**)power of

let value = 3
let negvalue = -value
console.log(negvalue);
// negative operation

// All operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2++);
// console.log(2--);
// console.log(2**);


// Addtion of two values
let abc = 1
let bca = 2
let cba = abc + bca
console.log(cba);

// if the first value has "" then all values will be considered as strings
console.log("1" + 2 + 2);
// => 122


// if the last value has "" then only last value is string are the operations will be performed
console.log(1 + 2 + "3");
// => 33

