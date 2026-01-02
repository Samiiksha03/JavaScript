// ==========================================
// PHASE 1 PRACTICE TASKS
// Write your code under each task comment.
// ==========================================

// ------------------------------------------
// 1. VARIABLES (let vs const)
// ------------------------------------------
// Task: Create a 'const' for your birth year and a 'let' for your age.
// Try to update both. (Comment out the one that errors).
const myName = "Khushi";
const birtYear = 2003;
let age = 22;
console.log("My name is" + myName + "and I am" + age + "years old.")
//birthYear=2004;
age = 23;
console.log("Now my age is" + age)



// ------------------------------------------
// 2. DATA TYPES
// ------------------------------------------
// Task: Create a String, a Number, and a Boolean.
// Log the 'typeof' each variable.
const name = "khushi";
let myAge = 22;
let isStudent = true;
console.log(typeof name)
console.log(typeof myAge)
console.log(typeof isStudent)


// ------------------------------------------
// 3. OPERATORS
// ------------------------------------------
// Task: Create two variables, a = 10 and b = "10".
// Log the result of (a == b) and (a === b).
// Explain in a comment why they are different.
let a = 10;
let b = "10";
console.log(a == b)
console.log(a === b)
//== chceks only the values not the data types. Ex a=10 and b="10" are equal
//=== checks the vales as well as data types. Ex a=10 and b="10" are not equal


// ------------------------------------------
// 4. CONDITIONS (If/Else)
// ------------------------------------------
// Task: Check if a variable 'temperature' is > 30.
// If yes, log "Hot". Else, log "Cold".
let temperature = 31;
if (temperature > 30) {
    console.log("Hot")
} else {
    console.log("cold")
}


// ------------------------------------------
// 5. CONDITIONS (Switch Statement) - *You asked for this!*
// ------------------------------------------
// Task: Create a variable 'day' (e.g., "Monday").
// Use a switch statement to log:
// - "Start of week" if Monday
// - "Midweek" if Wednesday
// - "Weekend" if Saturday or Sunday
// - "Regular day" for anything else.
let day = "monday";

switch (day) {
    case "monday":
        console.log("start of the week")
        break;
    case "wednesday":
        console.log("midweek")
        break;
    case "saturday":
    case "sunday":
        console.log("weekend")
        break;
    default:
        console.log("regular day")
        break;
}


// ------------------------------------------
// 6. LOOPS (For Loop)
// ------------------------------------------
// Task: Print numbers from 1 to 5 using a for loop.
for (i = 1; i <= 5; i++) {
    console.log(i)
}


// ------------------------------------------
// 7. LOOPS (While Loop) - *You asked for this!*
// ------------------------------------------
// Task: Create a variable 'count' = 5.
// Use a while loop to print the count as long as it is > 0.
// Decrease count by 1 in each step.
let count = 5;
while (count > 0) {
    console.log(count)
    count--
}


// ------------------------------------------
// 8. FUNCTIONS (Arrow Function)
// ------------------------------------------
// Task: Write an arrow function 'multiply' that takes two numbers.
// Return the result. Call it and log the answer.
const multiply = (a, b) => {
    return a * b
}
console.log(multiply(2, 3))


// ==========================================
// DONE? Save this file and tell me "I am done"
// ==========================================
