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

