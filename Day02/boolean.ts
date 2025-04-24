// Boolean: tipe data yang hanya memiliki dua opsi nilai: true atau false

let benar: boolean = true;
let salah: boolean = false;

// Comparison operator: >, <, >=, <=, ==, ===, !=

let valueA: string | number = 12 // use | to add more data type
let valueB: string | number = 12

console.log(valueA == 12) // == berlaku kalau value sama, tapi tipe data beda
console.log(valueA === 12) // === berlaku kalau value dan tipe data sama

// Logical operator
/*
* AND = &&
* OR = ||
* NOT = !
*/

// AND &&: logika yang akan menghasilkan TRUE jika semua nilai boolean TRUE
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR ||: logika yang akan menghasilkan TRUE jika salah satu nilai boolean TRUE
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// NOT !: Membalikkan nilai boolean
console.log(!false);
console.log(!(valueA === valueB))

// nilai boolean berdasarkan data
// TRUTHLY
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));


// FALSY
console.log(Boolean(""));
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(false))
console.log(Boolean(null))