// Types of Data Types
// (number, string, boolean, null, undefined, BigInt, symbol) Object is also a DT

let number=33
console.log(number);
console.log(typeof number);
// if the number is written in inverted commas then it becomes a string

let name="Samiksha"
console.log(name);
console.log(typeof name);
// string should always be written in inverted commas

let known= false
console.log(known);
console.log(typeof known);
// boolean values are in true or false only

let x= null
console.log(x);
console.log(typeof x);
// **IQ type of null DT is always object 

let y;
console.log(y);
console.log(typeof y);
// if no value is given to variable then its by default undefined

let z= BigInt("125489647826842663562");
console.log(z);
console.log(typeof z);
// n is always printed at the end on value

let zz= Symbol("Samiksha");
console.log(zz);
console.log(typeof zz);
// to seperate out the UNIQUE values, symbol DT is used



