// Function
/**
 *  - Definisi: sekumpulan program yang ditujukan untuk menyelesaikan suatu proses khusus/spesifik
 *              - Untuk menggunakan function, maka harus dibuat terlebih dahulu
 *              - Function bersifat reusable
 * 
 * - Kategori: built-in function dan user-defined function
 * - Aturan : 
 *      - Nama function mengacu pada aturan penamaan variable
 *      - format penulisan:
 *          - Declarative function:
 *                  function namaFunc(param1, param2) {
 *                      - code
 *                      }
 *          - Function expression:
 *                  const namaFunc = function() {
 *                      - code
 *                      }
 *          - Arrow function:
 *                  const namaFunc = (param1, param2) => - code
 *                 / const namaFunc = (param1, param2) => {
 *                  - code
 *                      }
 * - Function mungkin membutuhkan parameter. Parameter merupakan penampung value dari luar function,
 *  yang nantinya mungkin akan dibutuhkan untuk melengkapi proses di dalam function
 * 
 * - Function biasanya menghasilkan nilai output melalui return.
 */

// Declarative Function
// Membuat function

function penjumlahan_angka() {
    let angkaA: number = 12;
    let angkaB: number = 5;
    const result: number = angkaA + angkaB
    return result
}

penjumlahan_angka; // memanggil fungsi

console.log(penjumlahan_angka()); // menjalankan fungsi

// Jadi reusable

function penjumlahan_angka2(angkaA: number, angkaB: number) {
    const result2: number = angkaA + angkaB;

    return result2
}

console.log(penjumlahan_angka2(15,2))

// CALLBACK FUNCTION: sebuah function yang dititipkan lewat parameter untuk dijalankan
//                    di dalam function utama pemilik parameter
// note: ingat dulu function utamanya yang mana
// parameter yang isinya function harus namanya mengandung callback/cb
// callback ini placeholder untuk function apapun
// function setelah dan sebelum callbackfn bisa digunakan
// function callback bisa langsung dibuat saat memanggil function utama

function renderCalculator(angkaC: number, angkaD: number, callbackFnOperation: any) {
    const hasil: number = callbackFnOperation(angkaC, angkaD)
    console.log(`Hasil perhitungan = ${hasil}`)
}

function pengurangan(valueA: number, valueB: number){ // nama parameter di callback boleh beda
    return valueA - valueB
}

console.log(renderCalculator(12, 5, pengurangan))
renderCalculator(12, 5, function(nilaiA: number, nilaiB: number){
    return nilaiA/nilaiB
}) // ==> anonymoous function

// array.forEach(). array.map()

/**
 *  - .forEach() = does not transform the array, returns undefined. It's like, "for each item, perform xx action". Not building a new array, just performing an external action.
 *  - .map() = transforms the array, return a new array, does not modify the original array
 */

// Example forEach:

const prices: number[] = [4, 8, 15, 16, 23, 42] // original prices for an item

prices.forEach((price, i, arr) => {
    arr[i] = price * 0.5 // the formula forces the array to be renewed
})

console.log(prices);// this changes the original array

// if we want to create a new array, we need to manually push the values to the new array

const discountPrices: number[] = [];

prices.forEach((price, i, arr) => {
    discountPrices.push(price * 0.5)
})

console.log(discountPrices)

// Example map:

const discount_map: number[] = prices.map((price) => {
    return price * 0.5 // map replaces the original array with returned value
})
console.log(prices) // original array does not modified
console.log(discount_map) // created new array

// Another example

const products = [
    {name: "Laptop", price: 499, color: "White"},
    {name: "Smartphone", price: 899, color: "Black"},
    {name: "Headphones", price: 50, color: "White"},
    {name: "Tablet", price: 199, color: "Grey"},
    {name: "Keyboard", price: 210, color: "Blue"}
]

const discounts = products.map((product) => {
    // return product.price * 0.5 // this is just to overwrite ONLY the price
    return {
        ...product,
        price: product.price * 0.5
    }})

console.log(discounts)

const categorizedProducts = products.map(product => {
    let category: string;
    if (product.price < 100) category = "Budget";
    else if (product.price < 500) category = "Mid-range";
    else category = "Premium";
    return {...product, category}
})

console.log(categorizedProducts)