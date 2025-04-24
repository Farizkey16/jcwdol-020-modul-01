// No 1. Write a code to find area of rectangle

// Area of Rectangle = W x L

let sqLength: number = 5;
let sqWidth: number = 3;

const sqArea: number = sqLength * sqWidth;
console.log(sqArea);

// No 2. Write a code to find perimeter of rectangle
// Perimeter of rectangle = P = (L + W) x 2

const perRectangle: number = (sqLength * sqWidth) * 2
console.log(perRectangle);

// No 3. Write a code to find diameter, circumference, and area of a circle
// Diameter = 2 * radius; circumference = 2 * PI * radius; area = PI * r * r

let cirRadius: number = 7

const diameter_circle = 2 * cirRadius
console.log(diameter_circle);

const circumference_circle = 2 * (Math.PI) * cirRadius
console.log(circumference_circle);

const area_circle = (Math.PI) * Math.pow(cirRadius, 2)
console.log(area_circle);

// No 4. write a code to find angles of triangle if two angles are given
// Third angle = 180 - first angle - second angle

let firstAngle: number = 70;
let secondAngle: number = 35;

const thirdAngle: number = 180 - (firstAngle + secondAngle);
console.log(thirdAngle);

// No 5. Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
/*
Example : 400 days → 1 year, 1 month, 5 days
Example: 366 days → 1 year, 0 month, 1 day
*/

/*
Process:
1. Take an input in days
2. Create variables in const, converting the number of days into year, month, and days separately
3. Since each variable might return in float, round it down
4. return and concatenate with year, month, and day
*/

let days_input = 850; // variable yang akan berkurang untuk kalkulasi hari
let days_initial_display = days_input // Hanya untuk display di akhir
let one_year = 365;
let one_month = 30;

const day_to_year = Math.floor(days_input / one_year);
const day_to_month = Math.floor((days_input %= 365)/30)
const day_display = Math.floor(days_input %= 30)

let finalResult = `${days_initial_display} days -> ${day_to_year} year, ${day_to_month} month, ${day_display} day(s)`

console.log(finalResult)

// No 6. Write a code to get difference between dates in days.
/*
Example : date1 = 2022-01-20, date2 = 2022-01-22
Output : 2
*/

// constants

const milliSecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInADay = 24;


// Dates

let date1: Date = new Date('2024-01-01')
let date2: Date = new Date('2025-04-22')

const differenceinMilli = date2.getTime() - date1.getTime();
// Conversions

const mill_to_second = differenceinMilli / milliSecondsInSecond
const second_to_minutes = mill_to_second/secondsInMinute
const minutes_to_hour = second_to_minutes/minutesInHour
const hour_to_days = minutes_to_hour/hoursInADay

// Calculation

console.log(hour_to_days);


// Module Exercise

// 1. Write a code to check whether a number is odd or even

// Using If-Else

let numberCheckIf = 0;
let messagePrintIf = "";

if (numberCheckIf % 2 !== 0) {
    messagePrintIf = `${numberCheckIf} is an Odd Number`
} else {
     messagePrintIf = `${numberCheckIf} is an Even Number`
}

console.log(messagePrintIf)

// 2. Write a code to check whether a number is prime number or not

let primeNumberCheck = 5;
let messagePrintPrime = ""


if (primeNumberCheck <= 1) {
    messagePrintPrime = `${primeNumberCheck} is NOT a prime number.`
} else if (primeNumberCheck === 2) {
    messagePrintPrime = `${primeNumberCheck} is a prime number.`
} else {
    let primeCheck = true; // Asumsikan dulu ini bilangan prima
    for (let i = 2; i <= Math.sqrt(primeNumberCheck); i++) { // Mulai dari 2 karena < 2 sudah dicek bilangan prima
        if (primeNumberCheck % i === 0) { // Tanpa perlu cek lebih dari akar angka primeNumberCheck, hanya perlu cek hingga akarnya saja
            primeCheck = false;
            break;
        }

    }
    if (primeCheck) {
        messagePrintPrime = `${primeNumberCheck} is a prime number.`
    } else {
        messagePrintPrime = `${primeNumberCheck} is NOT a prime number.`
    }

}

console.log(messagePrintPrime)

// bisa juga yang dihitung berapa kali habis dibagi, kalau misalnya hanya 2, bilangan prima. kalau lebih, bukan bilangan prima

let countPrime = 0;
let prime_num_check = 11;
let messagePrintAgain: string = ""

for (let i: number = 1; i <= prime_num_check; i++) {
    if (prime_num_check % i === 0) {
        countPrime++
    }
    if (countPrime === 2) {
        messagePrintAgain = `${prime_num_check} is a prime number`
    } else {
        messagePrintAgain = `${prime_num_check} is NOT a prime number`
    }
}

console.log(messagePrintAgain);


// 3. Write a code to find the sum of the numbers 1 to N

let num_total = 0;
let n_number = 10

for (let i = 0; i <= n_number; i++) {
    num_total += i;
}

console.log(num_total)

// 4. Write a code to find factorial of a number

let factorial_number = 6;
let total_number = 1;

for (let i = 1; i <= factorial_number; i++) {
    total_number *= i
}

console.log(total_number)

// 5. Write a code to print the first N fibonacci numbers
// Fibonacci = 1, 2, 3, 5, 8 (rule: after next number = next number + current number)
// 0, 1, 1, 2, 3, 5, 8

let fibonacci_limit = 15;
let firstFib: number = 0;
let secondFib: number = 1;
let thirdFib: number;

for (let i = 0; i < fibonacci_limit; i++) {
    thirdFib = secondFib + firstFib;
    firstFib = secondFib
    secondFib = thirdFib

    console.log(thirdFib)
}

console.log(firstFib)


// Modul Git