// number : tipe data dalam bentuk angka
let jarak: number = 1500; // integer
let berat: number = 78.5 // float

// Arithmethic : +, -, *, /,%
let numberA: number = 12;
let numberB: number = 16;

let result: number = numberA * numberB
console.log(result)

// Increment

let count: number = 0;
count++ //postfix --> addition done later
console.log(count)
++count //prefix --> addition done earlier
console.log(count)

// Decrement
count--
console.log(count)

// Math Object

const pi: number = Math.PI
console.log(pi)

// pembulatan
console.log(Math.round(25.4))
console.log(Math.ceil(25.4))
console.log(Math.floor(25.9))

// Min & Max
let nums = (12, 18, 81, 90, 135)
console.log(Math.max(nums))
console.log(Math.max(12, 15, 81,190))
console.log(Math.min(12, 15, 81,190))

// Random value
console.log(Math.random());

// Parsing data
let angka: string = "123.456"
console.log(parseInt(angka))
console.log(parseFloat(angka))

let price: number = 525000
console.log(price.toString())
console.log(price.toLocaleString("id-ID", {
    style: "currency", 
    currency: "IDR",
    minimumFractionDigits: 0,}))