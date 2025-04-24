// Looping : cara untuk menjalankan program berulang

/**
 * FOR LOOP: perulangan yang digunakan ketika dari awal sudah diketahui batas looping-nya
 * aturan penulisan:
 * for (statement 1; statement 2; statement 3) {
 *      - code to execute
 * }
 * 
 * statement 1 : variable yang mendefinisikan nilai awal dari hitungan batas looping
 * statement 2 : kondisi untuk memeriksa bahwa statement_1 memiliki nilai sesuai kondisi yang diberikan
 * statement 3 : berisi perhitungan increment atau decrement yang dilakukan pada variable statement_1
 */


for (let i: number = 0; i < 5; i++) {
    console.log(`Loop ke-${i}`);
}

/**
 * WHILE LOOP: digunakan untuk proses looping yang batasnya tidak pasti
 */