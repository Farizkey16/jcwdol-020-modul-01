// Conditional statement: code yang ditujukan untuk memberikan pilihan eksekusi program sesuai kondisi yang diberikan

/*
- If : untuk satu kondisi
- If...else : untuk dua kondisi
- If ... else if ... else : untuk tiga kondisi atau lebih
- Switch ... case : pengkondisian dalam bentuk validasi kecocokan nilai
*/

// IF Statement
/**
 * aturan penulisan:
 * if (condition) {
 * - code to execute
 * }
 * note:
 * condition: kondisi yang diinginkan berdasarkan nilai boolean yang didapat dari comparison/logical/truthly/falsy
 */

let usia: number = 10
let nama: string = "Bardock"
let email: string = "bardock@saiyan.com"

let message = " "

if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil.`
} else if (usia > 30) {
    message = `Terima kasih ${nama} sudah memverifikasi diri`
} else {
    message = `Halo ${nama}, Anda belum cukup umur.`
}

console.log(message);

let examGrade: number = 100;
let result: string = "" // variable penampung output

if (examGrade >= 90) {
    result = "Grade A"
} else if (examGrade < 90 && examGrade >= 80) {
    result = "Grade B"
} else if (examGrade < 80 && examGrade >= 70) {
    result = "Grade C"
} else {
    result = "Grade D"
}

console.log(result);

// Ternary operator --> versi singkat if-else

usia = 20;
// const isVerified: string = condition ? mainValue : optionValue
/* condition -> the block
mainValue -> value return if true
optionValue -> value if false
*/

usia = 5
let verified: string = usia > 17 ? "berhasil!" : "gagal.";
message = `verifikasi usia ${email} ${verified}`;
console.log(message)

usia = 5
message = `verifikasi usia ${email} ${usia > 17 ? "berhasil!" : "gagal."}`; // alternative syntax
console.log(message)

// Switch Case

let job: string = "Coder";

switch (job) {
    case "Coder":
        console.log("Build a software");
        break;
    case "Driver":
        console.log("Drive a car");
        break;
    default:
        console.log("I don't know.")

}

// Exercise:
// Soal 1: - Buat program untuk menentukan harga tiket berdasarkan usia
//         - Di bawah 5 tahun, maka gratis
//         - 5 > 17 tahun, 20.000
//         - 17 - 60 tahun, 50.000
//         - > 60 tahun, gratis

let usiaPembeli: string | number = 11;
let printPesan: string = ""

if (usiaPembeli < 5 || usiaPembeli > 60) {
    printPesan = `Karena usia Anda ${usiaPembeli} tahun, maka tiket Anda GRATIS. Silakan masuk.`
} else if (usiaPembeli > 5 && usiaPembeli < 17) {
    printPesan = `Karena usia Anda ${usiaPembeli} tahun, silakan bayar sebesar Rp20.000 untuk masuk.`
} else {
    printPesan = `Karena usia Anda ${usiaPembeli} tahun, silakan bayar sebesar Rp50.000 untuk masuk.`
}

console.log(printPesan)

// Soal 2: - Buat pengkondisian untuk memastikan suatu data merupakan email atau bukan
//         - cek input apakah email apa bukan

let email_user: string = "test@test.com"
let message_print: string = ""

if (email_user.includes("@") && email_user.includes(".")) {
    message_print = `Email Anda, "${email_user}" adalah email yang valid.`
} else {
    message_print = `Email Anda bukan merupakan email yang valid. Silakan masukkan kembali.`
}

console.log(message_print)