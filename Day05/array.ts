/**
 * 
 * - Definisi: sebuah tipe data yang berisi sekumpulan data 
 *              dan setiap data memiliki alamat index yang selalu
 *              dimulai dari angka 0
 * 
 * - Tujuan: mempermudah pengelolaan data.
 * - Penulisan: data array ditandai dengan kurung siku [..., ...]
 * - Example: let numbs: number[] = [1, 2, 3, 4, ...]
 * 
 * 
 */

let headphone_list: string = "Headphone";
let laptop: string = "Laptop";

const gadgetList: string[] = ["headphone", "laptop", "TWS", "Pen"]
console.log(gadgetList)

// Cara memanggil data tertentu dari suatu array : namaVariable[index_yg_dipilih]
console.log(gadgetList[1]);
console.log(gadgetList[0]);

const gadgetPrice: number[] = new Array(85000, 450000);
console.log(gadgetPrice)

console.log(typeof gadgetList);
console.log(typeof gadgetPrice);
console.log(typeof null)

// Cara mengganti salah satu data array secara langsung

gadgetList[1] = "notebook"
console.log(gadgetList);

console.log(gadgetList[2]);

// Exercise: Dari data array yang ada, coba rubah menjadi data string berbentuk list barang;

/**
 * Expected output: 
 * 1. Headphone;
 * 2. Macbook
 * 3. TWS
 * 4. Pen
 */

let place_holder: string = " "

for (let i = 0; i < gadgetList.length; i++) {
    place_holder = place_holder + `${i + 1}. ${gadgetList[i]}\n`
}

console.log(place_holder)

// Array function

// Array.length = untuk mengetahui panjang sebuah array
console.log(gadgetList.length);

// array.push(newData) : menambahkan data baru pada akhir array
gadgetList.push("Smartwatch");
console.log(gadgetList);
console.log(gadgetList.length);

// array.pop(): menghilangkan sebuah data dari array (paling belakang)
gadgetList.pop();
console.log(gadgetList);

// array.unshift(newData) : menambahkan data baru pada awal array
gadgetList.unshift("PC");
console.log(gadgetList);

// array.shift() : menghapus data awal suatu array
gadgetList.shift();
console.log(gadgetList);

// array.splice() : menghapus/menyisipkan/memperbaharui data pada index tertentu
// 1. Menghapus data: array.splice(pilihanIndex, jumlahYangDihapus)

let car_brands: string[] = ["Toyota", "Mazda", "Nissan"];
console.log(car_brands);
car_brands.splice(1, 1);
console.log(car_brands);

// 2. Menyisipkan data: array.splice(pilihanIndex, jumlahYangDihapus, newData1, newData2, ...)
car_brands.splice(1, 0, "Daihatsu", "Subaru")
console.log(car_brands);

// 3. Memperbaharui data: array.splice(pilihanIndex, 1, newData)
car_brands.splice(1, 1, "Lexus")
console.log(car_brands)

// array.indexOf("data"): mencari index suatu data

console.log(car_brands.indexOf("Lexus"));

// array.reverse(): membalikkan urutan data

console.log(car_brands.reverse())

// array.sort() : mengurutkan data ASC;

console.log(car_brands.sort());

// Penggabungan data array
const studentsA: string[] = ["Andre", "Edo"];
const studentsB: string[] = ["Erica", "Steven"]

// array.concat(dataArray1, dataArray2, ...);

const students_total :string[] = studentsA.concat(studentsB, "Ruben") // apply method to the first data
console.log(students_total);

// Spread operator : menyalin data dari suatu array ke array yang baru

const studentList: string[] = [... studentsA, ...studentsB, "Ruben"]
console.log(studentList);

// Array destructure: mengeluarkan nilai suatu array menjadi variable yang berdiri sendiri

const data_new: any[] = ["Ruben", "Diaz", 17];
let [firstName, lastName, age_person] = data_new // Bisa pakai const untuk menghindari reassignment. Dan tidak bisa di-reassign
console.log(firstName);
console.log(lastName);
console.log(age_person);
firstName = "Edo"
console.log(firstName);
console.log(data_new[0]);