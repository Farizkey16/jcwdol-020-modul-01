// Variable
/*
* Keyword variables: let, const, var
* Variable naming rules:
* 1. Must begin with a letter, $, or _.
* 2. Can contain letters, numbers, $, and _.
* 3. Cannot be a reserved keyword (e.g., let, const, var, if, else, etc.)
* 4. Case-sensitive (e.g., myVar and myvar are different variables).
* 5. Cannot start with a number.
* 6. Cannot contain spaces or special characters (e.g., @, #, %, etc.)
* 7. Cannot be a number.
* 8. Cannot be a boolean value (true or false).
* 9. Cannot be null.
* 10. Cannot be undefined.
* 11. Cannot be an object.
* 12. Cannot be an array.
* 13. Cannot be a function.
*/

// Data types
/*
* Primitive data types:
* 1. String: A sequence of characters enclosed in single or double quotes.
* 2. Number: A numeric value (integer or floating-point).
* 3. Boolean: A logical value that can be either true or false.
* 4. Null: A special value that represents the absence of any object value.
* 5. Undefined: A variable that has been declared but has not been assigned a value.
* 6. Symbol: A unique and immutable value often used as an identifier for object properties.
* 7. Array: A special type of object that represents a list of values.
* 8. Object: A collection of key-value pairs.
examples:
*/

let region = "West Java" // string
let weight = 78.5 // number
let isActive = true // boolean
const noData = null // null
let notAssigned // undefined

/*non-primitive data types:
* 1. Object: A collection of key-value pairs.
* 2. Array: A special type of object that represents a list of values.
* 3. Function: A block of code that can be called and executed.
* 4. Date: A built-in object that represents dates and times.
*/
//examples
const product = ["apple", "banana", "orange"] // array
const person = { 
    name: "John", 
    age: 30, 
    city: "New York" } // object

// Variable differences
/* var vs let vs const
* 1. Scope:
*    - var: Function-scoped or globally scoped.
*    - let: Block-scoped.
*    - const: Block-scoped.
* 2. Redeclaration:
*    - var: Can be redeclared.
*    - let: Cannot be redeclared in the same scope.
*    - const: Cannot be redeclared in the same scope.
* 3. Reassignment:
*    - var: Can be reassigned.
*    - let: Can be reassigned.
*    - const: Cannot be reassigned.
* 4. Hoisting:
*    - var: Hoisted to the top of the function or global scope.
*    - let: Hoisted but not initialized, causing a ReferenceError if accessed before declaration.
*    - const: Hoisted but not initialized, causing a ReferenceError if accessed before declaration.
*/

//Var: redeclare, reassign
var city = "Malang"
console.log(city);
var city = "Bandung";
console.log(city);

// let: non-redeclare, reassign
let age = 40;
console.log(age);
// let age = 25 --> this cannot be done as it's non-redeclare
age = 25; // this can be done as it's reassign
console.log(age);

// const: non-redeclare, non-reassign
const pi = 3.14;
console.log(pi);
// const pi = 3.14159; // this cannot be done as it's non-redeclare
// pi = 3.14159; // this cannot be done as it's non-reassign
// (22 Apr 2025) const juga bisa dipakai untuk crystalize formula dan tidak diganti-ganti


var myName = "Farizky";
console.log(myName); 
