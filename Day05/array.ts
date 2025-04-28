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

for (let i = 0; i < gadgetList.length; i++) {
    console.log(`${i + 1}. ${gadgetList[i]}`)
}