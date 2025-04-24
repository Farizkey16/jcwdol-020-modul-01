// string: data yang terdiri dari huruf atau text
let namaToko : string = "Toko Sederhana";
let lokasiToko: string =  `Jl. Sederhana`; // kalau pake backtick

// Menggabungkan data string
// Cara 1: menggunakan operator penjumlahan
let tokoKu: string = namaToko + " " + lokasiToko; 
console.log(tokoKu)

// Cara 2: menggunakan template backtic

let tokoKu2: string = `${namaToko} ${lokasiToko}`; // menggunakan backtick
console.log(tokoKu2)

// typeof: fungsi JS yang bertugas untuk mengetahui tipe data suatu variabel atau data
console.log(typeof tokoKu); // string
console.log(typeof tokoKu2); // string
console.log(typeof 10); // number


// Fungsi bawaan tipe data string
let greeting: string = "HELLO WORLD";

// length: menghitung panjang character pada string
console.log(greeting.length); // 11

// toLowerCase() : merubah semua huruf menjadi huruf kecil
let lowerCase = greeting.toLowerCase()
console.log(lowerCase)

// toUpperCase() : merubah semua huruf menjadi huruf kapital
console.log(lowerCase.toUpperCase())

// includes() : memastikan suatu kata di dalam  string
console.log(lowerCase.includes("Student"))

// split() : merubah data string menjadi array 
console.log(lowerCase.split(""))

// replace(): mengganti kata tertentu
console.log(lowerCase.replace("world", "student"))
